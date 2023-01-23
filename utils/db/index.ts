import { initializeApp, applicationDefault, cert, ServiceAccount } from 'firebase-admin/app';
import { getFirestore, Timestamp, FieldValue } from 'firebase-admin/firestore';

import serviceAccount from './serviceAccountKey.json'

initializeApp({
  credential: cert(serviceAccount as ServiceAccount),
  databaseURL: "https://anime-checker-d8147-default-rtdb.europe-west1.firebasedatabase.app"
})

export const db = getFirestore()