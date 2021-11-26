import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import { doc, deleteDoc } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID,
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export async function getPosts() {
  const dbase = [];
  const querySnapshot = await getDocs(collection(db, 'posts'));
  querySnapshot.forEach((doc) => {
    dbase.push({
      id: doc.id,
      title: doc.data().title,
      text: doc.data().text,
      author: doc.data().author,
      date: doc.data().date.toDate().toLocaleString() || ' ',
    });
  });
  return dbase;
}

export async function getUsers() {
  const userDb = [];
  const querySnapshot = await getDocs(collection(db, 'users'));
  querySnapshot.forEach((doc) => {
    userDb.push({
      id: doc.id,
      email: doc.data().email,
      username: doc.data().username,
      uid: doc.data().uid,
    });
  });
  return userDb;
}

export async function deletePost(id) {
  await deleteDoc(doc(db, 'posts', id));
}
