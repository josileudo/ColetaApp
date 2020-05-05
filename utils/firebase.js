import firebase from 'firebase';

const prodConfig = {
  apiKey: 'AIzaSyAl335-Td6JxgxkJdJJ9O5Y08nfy27ovFU',
  authDomain: 'coletaapp-8b42e.firebaseapp.com',
  databaseURL: 'https://coletaapp-8b42e.firebaseio.com',
  projectId: 'coletaapp-8b42e',
  storageBucket: 'coletaapp-8b42e.appspot.com',
  messagingSenderId: '242264846632',
  appId: '1:242264846632:web:413b1b514667db190da01d',
  measurementId: 'G-ZD8YK2R8LV',
};
const devConfig = {
  apiKey: 'AIzaSyAl335-Td6JxgxkJdJJ9O5Y08nfy27ovFU',
  authDomain: 'coletaapp-8b42e.firebaseapp.com',
  databaseURL: 'https://coletaapp-8b42e.firebaseio.com',
  projectId: 'coletaapp-8b42e',
  storageBucket: 'coletaapp-8b42e.appspot.com',
  messagingSenderId: '242264846632',
  appId: '1:242264846632:web:413b1b514667db190da01d',
  measurementId: 'G-ZD8YK2R8LV',
};

const config = process.env.NODE_ENV === 'produto' ? prodConfig : devConfig;

export const firebaseImpl = firebase.initializeApp(config);
export const firebaseDatabase = firebase.database();
export const firebaseAuth = firebase.auth();
export const googleProvider = new firebase.auth.GoogleAuthProvider();
export const facebookProvider = new firebase.auth.facebookAuthProvider();
