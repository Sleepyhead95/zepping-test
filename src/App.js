import "./App.scss";
import Header from "./components/Header";
import Register from "./components/Register";
import LoginForm from "./components/login/LoginForm";

export default function App() {
  return (
    <main>
      <Header />
      <LoginForm />
      <Register />
    </main>
  );
}
