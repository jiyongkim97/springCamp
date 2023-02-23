import { authService } from "../fbase";
import React, { useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup
} from "firebase/auth";

const auth = getAuth();
const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newAccount, setNewAccount] = useState(true);
  const [error, setError] = useState("");
  const onChange = (event) => {
    const { target: { name, value } } = event;
    if (name === "email") {
      setEmail(value)
    } else if (name === "password") {
      setPassword(value)
    }
  }
  const onSubmit = async (event) => {
    event.preventDefault();
    try {
      let data;
      if (newAccount) {
        data = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );
      } else {
        data = await signInWithEmailAndPassword(
          auth,
          email,
          password
        );
      }
    } catch (error) {
      setError("사용법 보기에서 아이디 양식을 확인해주세요:)");
    }
  };
  const loginAccount = () => setNewAccount(false)
  const createAccount = () => setNewAccount(true)
  const onSocialClick = async (event) => {
    const {
      target: { name },
    } = event;
    let provider;
    try {
      if (name === "google") {
        provider = new GoogleAuthProvider();
        const result = await signInWithPopup(authService, provider);
        const credential = GoogleAuthProvider.credentialFromResult(result);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="Auth">
        <form onSubmit={onSubmit} className="container" >
          <div><input
            name="email"
            type="text"
            placeholder="Email"
            required
            value={email}
            onChange={onChange}
            className="authInput" />
          </div>
          <div><input
            name="password"
            type="password"
            placeholder="Password"
            required
            value={password}
            onChange={onChange}
            className="authInput" />
          </div>
          <button onClick={loginAccount} >login</button>
          <button onClick={createAccount} >create</button>
          {error}
        </form>
        <div>
          <button name="google" onClick={onSocialClick} className="authBtn" >continue with google</button>
        </div>
      </div>
    </>
  )

}
export default Auth;