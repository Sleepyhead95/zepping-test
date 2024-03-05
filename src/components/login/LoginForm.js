import Nationality from "./Nationality.js";
import Password from "./Password.js";
import ForgotPass from "./ForgotPass";
import RememberMe from "./RememberMe";
import FormInput from "./FormInput";
// import "./login_form.scss";

export default function LoginForm() {
  return (
    <div className="login-wrapper">
      <form className="login-form">
        <FormInput />
        <Password />
        <Nationality />
        <section className="forgot-password">
          <RememberMe />
          <ForgotPass />
        </section>
        <input type="submit" className="btn" name="submit" value="Login" />
      </form>
    </div>
  );
}
