import Nationality from "./Nationality.js";
import Password from "./Password.js";
import ForgotPass from "./ForgotPass";
import RememberMe from "./RememberMe";
import FormInput from "./FormInput";
import styles from "./login.module.scss";

export default function LoginForm() {
  return (
    <div className={styles.wrapper}>
      <form className={styles.form}>
        <FormInput />
        <Password />
        <Nationality />
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
