import "./header.module.scss";

export default function Header() {
  const logo = "/logo-zepping.png";

  return (
    <header className="header">
      <img src={logo} alt="Zeeping logo" />
    </header>
  );
}
