import { useState } from "react";
import styles from "./password.module.scss";

export default function Password({ password, setPassword }) {
  const [passwordShow, setPasswordShow] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordShow(!passwordShow);
  };

  return (
    <div className={styles.wrapper}>
      <input
        className={styles.input}
        type={passwordShow ? "text" : "password"}
        id="password"
        name="password"
        required
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      {passwordShow ? (
        <img
          className={styles.eye}
          src="/icons/opne_eye_icon.svg"
          alt="Hide password"
          onClick={togglePasswordVisibility}
        />
      ) : (
        <img
          className={styles.eye}
          src="/icons/crossed_eye_icon.svg"
          alt="Show password"
          onClick={togglePasswordVisibility}
        />
      )}
    </div>
  );
}
