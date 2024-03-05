import styles from "./input.module.scss";

export default function FormInput() {
  return (
    <>
      <input
        className={styles.input}
        type="text"
        id="nome"
        name="nome"
        required
        placeholder="Nome"
      />
      <input
        className={styles.input}
        type="text"
        id="cognome"
        name="cognome"
        required
        placeholder="Cognome"
      />
      <input
        className={styles.input}
        type="email"
        id="email"
        name="email"
        required
        placeholder="E-mail"
      />
    </>
  );
}
