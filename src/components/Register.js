import styles from "./register.module.scss";

export default function Register() {
  return (
    <section className={styles.wrapper}>
      <p className={styles.p}>Non hai un account?</p>
      <input
        type="submit"
        name="register"
        value="Registrati"
        className={styles.btn}
      />
    </section>
  );
}
