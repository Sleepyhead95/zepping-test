import Nationality from "./Nationality.js";
import Password from "./Password.js";
import ForgotPass from "./ForgotPass";
import RememberMe from "./RememberMe";
import FormInput from "./FormInput";
import styles from "./login.module.scss";
import { useState } from "react";

export default function LoginForm() {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nationality, setNationality] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    const payload = {
      name: name,
      surname: surname,
      email: email,
      password: password,
      nationality: nationality,
    };

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    };

    try {
      const response = await fetch(
        "https://sicce-test.thingscloud.it/api/mobile/login",
        requestOptions
      );

      if (response.ok) {
        const data = await response.json();
        console.log("Login successful:", data);
        alert("Login successful");
      } else {
        console.error("Login failed:", response.statusText);
      }
    } catch (error) {
      console.error("Network error:", error.message);
    }
  };

  return (
    <div className={styles.wrapper}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <FormInput
          name={name}
          setName={setName}
          surname={surname}
          setSurname={setSurname}
          email={email}
          setEmail={setEmail}
        />
        <Password password={password} setPassword={setPassword} />
        <Nationality
          nationality={nationality}
          setNationality={setNationality}
        />
        <section className={styles.section}>
          <RememberMe />
          <ForgotPass />
        </section>
        <input
          type="submit"
          className={styles.btn}
          name="submit"
          value="Login"
        />
      </form>
    </div>
  );
}
