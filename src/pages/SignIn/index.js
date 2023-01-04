import { Link, useNavigate } from "react-router-dom";
import * as Style from "./style";
import * as Screen from "../../styles/Screen";
import * as Form from "../../styles/Form";
import { useState } from "react";
import Logo from "../../components/Logo";
import { api } from "../../services";
import { loadingButton } from "../../assets/Spinners";

export default function SignInPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [form, setForm] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  function handleForm(event) {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  }

  function signIn(event) {
    event.preventDefault();
    setIsLoading(true);
  }

  return (
    <Screen.Container>
      <Logo />
      <Style.FormContainer>
        <Form.Form onSubmit={signIn}>
          <Form.Input
            name="email"
            value={form.email}
            onChange={handleForm}
            type="email"
            placeholder="email"
            disabled={isLoading}
            required
            data-identifier="input-email"
          />
          <Form.Input
            name="password"
            value={form.password}
            onChange={handleForm}
            type="password"
            placeholder="password"
            disabled={isLoading}
            required
          />
          <Form.Button type="submit" disabled={isLoading}>
            {isLoading ? loadingButton : "Log In"}
          </Form.Button>
        </Form.Form>
        <Link to="/sign-up">
          <Style.Link>First time? Create an account!</Style.Link>
        </Link>
      </Style.FormContainer>
    </Screen.Container>
  );
}
