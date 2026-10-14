
import { initializeApp, applicationDefault, getApps } from "firebase-admin/app";
import { getAuth } from "firebase-admin/auth";

function getFirebaseAdminAuth() {
  const app =
    getApps().length > 0
      ? getApps()[0]
      : initializeApp({
          credential: applicationDefault(),
          projectId: process.env.FIREBASE_PROJECT_ID,
        });

  return getAuth(app);
}

export { getFirebaseAdminAuth };