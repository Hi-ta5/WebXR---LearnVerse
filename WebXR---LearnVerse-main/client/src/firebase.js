import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getAnalytics, isSupported, logEvent } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDt47wh2wgagWWjDJ9PDof3anW21YQc5UE",
  authDomain: "learnverse-cd0bd.firebaseapp.com",
  projectId: "learnverse-cd0bd",
  storageBucket: "learnverse-cd0bd.firebasestorage.app",
  messagingSenderId: "941904309035",
  appId: "1:941904309035:web:72a2f519788262a149f36e",
  measurementId: "G-WLTCNEYVTP"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);

// Safe Firebase Analytics initialization (handles non-browser or restricted environments)
export let analytics = null;
let isAnalyticsInitialized = false;

export const initAnalytics = async () => {
  if (typeof window === "undefined") return null;
  if (analytics) return analytics;
  if (isAnalyticsInitialized) return analytics;
  
  isAnalyticsInitialized = true;
  try {
    const supported = await isSupported();
    if (supported) {
      analytics = getAnalytics(app);
      console.log(`🔥 [Firebase Analytics] Connected successfully with measurement ID: ${firebaseConfig.measurementId}`);
      return analytics;
    } else {
      console.info("ℹ️ [Firebase Analytics] Web analytics environment not supported (e.g. storage disabled). Fallback active.");
    }
  } catch (err) {
    console.warn("⚠️ [Firebase Analytics] Initialization notice:", err?.message || err);
  }
  return null;
};

// Eager initialization in browser environment
if (typeof window !== "undefined") {
  initAnalytics().catch(() => {});
}

/**
 * Log custom or recommended Firebase Analytics events
 * Dispatches to both the Firebase Analytics SDK and Google gtag.js for 100% telemetry coverage.
 * @param {string} eventName
 * @param {object} params
 */
export const trackEvent = async (eventName, params = {}) => {
  try {
    const analyticsInst = await initAnalytics();
    if (analyticsInst) {
      logEvent(analyticsInst, eventName, params);
    }

    // Also dispatch to global Google tag gtag.js if initialized in index.html
    if (typeof window !== "undefined" && typeof window.gtag === "function") {
      window.gtag("event", eventName, params);
    }

    // Verbose debug output in dev mode
    if (import.meta.env?.DEV) {
      console.debug(`📊 [Analytics Event] ${eventName}:`, params);
    }
  } catch (err) {
    console.debug(`Analytics tracking notice (${eventName}):`, err?.message || err);
  }
};

export default app;