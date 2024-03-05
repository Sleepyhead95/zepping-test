import styles from "./header.module.scss";

export default function Header() {
  const logo = "/logo-zepping.png";

  return (
    <header className={styles.header}>
      <img src={logo} alt="Zeeping logo" />
    </header>
  );
}
