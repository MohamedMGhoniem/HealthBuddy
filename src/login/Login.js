import '../styles/login.css';

import { auth } from '../firebase-config';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import { useState } from 'react';

export async function signup(email, password) {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    console.log('User signed up:', userCredential.user);
  } catch (error) {
    console.error('Signup error:', error.message);
  }
}

export async function login(email, password) {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    console.log('User logged in:', userCredential.user);
  } catch (error) {
    console.error('Login error:', error.message);
  }
}

export default function Login({ onCloseForm }) {
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');

  return (
    <div
      className="login-wrapper"
      onClick={e => {
        if (e.target.closest('.login-container')) return;
        else onCloseForm();
      }}
    >
      <div className="login-container">
        <button className="btn-close" onClick={onCloseForm}>
          <svg className="icon">
            <use href="./svg.svg#icon-close"></use>
          </svg>
        </button>
        <div className="logo">
          <img src="./logo.png" alt="MediBuddy Robot Logo" />
          <p>Your AI Friend for a better lifestyle</p>
        </div>
        <form
          className="form-login"
          onSubmit={e => {
            e.preventDefault();
            const email = userEmail;
            const password = userPassword;
            login(email, password); // or login(email, password);
          }}
        >
          <div className="input-group">
            <input
              type="mail"
              id="mail"
              placeholder="Your E-mail"
              required
              value={userEmail}
              onChange={e => setUserEmail(e.target.value)}
            />
          </div>
          <div className="input-group">
            <input
              type="password"
              id="password"
              placeholder="Password"
              value={userPassword}
              onChange={e => setUserPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn-submit-login">
            Log in
          </button>
          <p className="hint-txt">
            don't have an account ? download the app and join us now
          </p>
        </form>
      </div>
    </div>
  );
}
