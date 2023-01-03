import { Link, useNavigate } from "react-router-dom";
import * as Style from "./style";
import * as Screen from "../../styles/Screen";
import * as Logo from "../../styles/Logo";
import * as Form from "../../styles/Form";
import { useState } from "react";

export default function SignInPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [form, setForm] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  function handleForm(event) {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  }

  return (
    <Screen.Container>
      <Logo.Sidebar>
        <Logo.Header>Linkr</Logo.Header>
        <Logo.Subtile>
          save, share and discover the best links on the web
        </Logo.Subtile>
      </Logo.Sidebar>
      <Style.FormContainer>
        <Form.Form>
          <Form.Input
            name="email"
            value={form.email}
            onChange={handleForm}
            type="email"
            placeholder="email"
            disabled={isLoading}
            required
            data-identifier="input-email"
          ></Form.Input>
          <Form.Input
            name="password"
            value={form.password}
            onChange={handleForm}
            type="password"
            placeholder="password"
            disabled={isLoading}
            required
          ></Form.Input>
          <Form.Button>Log In</Form.Button>
        </Form.Form>
        <Link to="/sign-up">
          <Style.Link>First time? Create an account!</Style.Link>
        </Link>
      </Style.FormContainer>
    </Screen.Container>
  );
}
