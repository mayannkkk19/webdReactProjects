import { useState } from "react";
import './EmailForm.css';
export function EmailForm() {
  const [showPass, setShowPass] = useState(false);

  function hidePassword() {
    if (showPass) {
      setShowPass(false);
    } else {
      setShowPass(true);
    }
  }

  return (
    <>
      <h1>Hello, welcome to my website</h1>
      <input className="email-input" placeholder="Email" />
      <div>
        <input
          className="password-input"
          placeholder="Password"
          type={showPass ? "text" : "password"}
        />
        <button onClick={hidePassword}>{showPass ? "Hide" : "Show"}</button>
      </div>
      <div>
        <button className="login-button">Login</button>
        <button className="signup-button">Sign up</button>
      </div>
    </>
  );
}
