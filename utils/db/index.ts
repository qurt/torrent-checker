import admin from "firebase-admin";
import serviceAccount from './serviceAccountKey.json'

if (!admin.app.length) {
  try {
    admin.initializeApp({
      credential: admin.credential.cert(JSON.stringify(serviceAccount)),
      databaseURL: "https://anime-checker-d8147-default-rtdb.europe-west1.firebasedatabase.app"
    })
  } catch (err) {
    console.log('Firebase admin initialization error', err);
  }
}

export default admin.firestore();