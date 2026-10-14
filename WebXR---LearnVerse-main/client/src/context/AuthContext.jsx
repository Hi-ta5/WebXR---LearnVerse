
import React, {
  createContext,
  useContext,
  useState,
  useEffect,
} from "react";

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
  onAuthStateChanged,
  getIdToken,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";

import { auth } from "../firebase";

const AuthContext = createContext(null);

async function readJson(response) {
  try {
    return await response.json();
  } catch {
    return {};
  }
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [progress, setProgress] = useState(null);
  const [loading, setLoading] = useState(true);

  // Get a Firebase ID token and synchronize the user with Express.
  const syncFirebaseUser = async (firebaseUser) => {
    const idToken = await getIdToken(firebaseUser);

    const response = await fetch("/api/auth/firebase-session", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${idToken}`,
        "Content-Type": "application/json",
      },
    });

    const data = await readJson(response);

    if (!response.ok) {
      throw new Error(
        data.error || "Unable to connect your Firebase account."
      );
    }

    setToken(idToken);
    setUser(data.user);

    // Fetch learning progress using the Firebase ID token.
    const progressResponse = await fetch("/api/progress", {
      headers: {
        Authorization: `Bearer ${idToken}`,
      },
    });

    if (progressResponse.ok) {
      setProgress(await readJson(progressResponse));
    } else {
      setProgress(null);
      console.error("Unable to fetch learning progress.");
    }

    return data.user;
  };

  // Restore the Firebase session after refresh or reopening the app.
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      if (!firebaseUser) {
        setUser(null);
        setToken(null);
        setProgress(null);
        setLoading(false);
        return;
      }

      try {
        await syncFirebaseUser(firebaseUser);
      } catch (error) {
        console.error("Session initialization failed:", error);
        setUser(null);
        setToken(null);
        setProgress(null);
      } finally {
        setLoading(false);
      }
    });

    return unsubscribe;
  }, []);

  // Create a Firebase account and sync its LearnVerse profile.
  const signup = async (name, email, password) => {
    const credential = await createUserWithEmailAndPassword(
      auth,
      email.trim(),
      password
    );

    await updateProfile(credential.user, {
      displayName: name.trim(),
    });

    // Refresh token so the updated profile claims can be available.
    await getIdToken(credential.user, true);

    return await syncFirebaseUser(credential.user);
  };

  // Authenticate through Firebase, not the old Express password route.
  const signin = async (email, password) => {
    const credential = await signInWithEmailAndPassword(
      auth,
      email.trim(),
      password
    );

    return await syncFirebaseUser(credential.user);
  };

  // Authenticate through Google Popup provider
  const signInWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    provider.setCustomParameters({ prompt: "select_account" });
    const credential = await signInWithPopup(auth, provider);
    return await syncFirebaseUser(credential.user);
  };

  const signout = async () => {
    await signOut(auth);
    setUser(null);
    setToken(null);
    setProgress(null);
  };

  // Preserve the existing topic-completion endpoint.
  const completeTopicNode = async (
    subjectId,
    topicId,
    topicTitle,
    score = null,
    totalQuestions = null
  ) => {
    const activeToken = token;

    if (!activeToken) {
      throw new Error("Please sign in before saving learning progress.");
    }

    const response = await fetch("/api/progress/complete", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${activeToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        subjectId,
        topicId,
        topicTitle,
        score,
        totalQuestions,
      }),
    });

    const data = await readJson(response);

    if (!response.ok) {
      throw new Error(data.error || "Unable to save learning progress.");
    }

    if (data.progress) {
      setProgress(data.progress);
    }

    return data.progress;
  };

  const value = {
    user,
    token,
    progress,
    loading,
    signup,
    signin,
    signInWithGoogle,
    signout,
    fetchProgress: async () => {
      if (!token) return null;

      const response = await fetch("/api/progress", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        throw new Error("Unable to fetch learning progress.");
      }

      const data = await readJson(response);
      setProgress(data);
      return data;
    },
    completeTopicNode,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be nested within an AuthProvider");
  }

  return context;
}