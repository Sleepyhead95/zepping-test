import { useState } from "react";
// import "./password.scss";

export default function Password() {
  const [passwordShow, setPasswordShow] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordShow(!passwordShow);
  };

  return (
    <>
      <input
        className="input"
        type={passwordShow ? "text" : "password"}
        id="password"
        name="password"
        required
        placeholder="Password"
      />
      {passwordShow ? (
        <img
          className="eye-icon"
          src="/icons/opne_eye_icon.svg"
          alt="Hide password"
          onClick={togglePasswordVisibility}
        />
      ) : (
        <img
          className="eye-icon"
          src="/icons/crossed_eye_icon.svg"
          alt="Show password"
          onClick={togglePasswordVisibility}
        />
      )}
    </>
  );
}
