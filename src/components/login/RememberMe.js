// import "./remember.scss";

export default function RememberMe() {
  return (
    <div className="wrapper">
      <input
        className="checkbox"
        type="checkbox"
        id="remember_me"
        name="remember_me"
      />
      <label className="label" htmlFor="remember_me">
        Ricordami
      </label>
    </div>
  );
}
