// firebase-config.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyBIUStqEMxu5p7_j7_X8u_s33lCWIPE9xg',
  authDomain: 'medibuddy-25e33.firebaseapp.com',
  projectId: 'medibuddy-25e33',
  storageBucket: 'medibuddy-25e33.firebasestorage.app',
  messagingSenderId: '912901279308',
  appId: '1:912901279308:web:0b68eef64d7bd4f3806ee9',
  measurementId: 'G-KY0S93YF9E',
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
