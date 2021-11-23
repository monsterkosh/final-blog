import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyADSqO_rjouqzxtlnzN3auZLD_8ODWFyOY',
  authDomain: 'blogplace-f86de.firebaseapp.com',
  projectId: 'blogplace-f86de',
  storageBucket: 'blogplace-f86de.appspot.com',
  messagingSenderId: '384850488899',
  appId: '1:384850488899:web:83d1f1c247e2cbd8d0aef6',
  measurementId: 'G-ND0CR4Q33P',
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
