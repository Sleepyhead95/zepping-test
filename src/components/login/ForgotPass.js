import styles from "./forgotPass.module.scss";

export default function ForgotPass() {
  return (
    <a className={styles.redirect} href="/redirect">
      <p className={styles.p}>Password dimenticata?</p>
    </a>
  );
}
