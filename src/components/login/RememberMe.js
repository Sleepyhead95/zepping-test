import styles from "./remember.module.scss";

export default function RememberMe() {
  return (
    <div className={styles.wrapper}>
      <input
        className={styles.checkbox}
        type="checkbox"
        id="remember_me"
        name="remember_me"
      />
      <label className={styles.label} htmlFor="remember_me">
        Ricordami
      </label>
    </div>
  );
}
