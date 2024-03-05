import styles from "./input.module.scss";

export default function FormInput({
  name,
  setName,
  surname,
  setSurname,
  email,
  setEmail,
}) {
  return (
    <>
      <input
        className={styles.input}
        type="text"
        id="nome"
        name="nome"
        required
        placeholder="Nome"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        className={styles.input}
        type="text"
        id="cognome"
        name="cognome"
        required
        placeholder="Cognome"
        value={surname}
        onChange={(e) => setSurname(e.target.value)}
      />
      <input
        className={styles.input}
        type="email"
        id="email"
        name="email"
        required
        placeholder="E-mail"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
    </>
  );
}
