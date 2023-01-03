import { Link, useNavigate } from "react-router-dom";
import * as S from "./style";
import * as Screen from "../../styles/Screen";
import * as Form from "../../styles/Form";
import { useState } from "react";
import Logo from "../../components/Logo";

export default function SignUpPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [form, setForm] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  function handleForm(event) {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  }

  return (
    <Screen.Container>
      <Logo />
      <S.Container>
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
          <Form.Input
            name="name"
            value={form.name}
            onChange={handleForm}
            type="text"
            placeholder="username"
            disabled={isLoading}
            required
          />
          <Form.Input
            name="picture_url"
            value={form.picture_url}
            onChange={handleForm}
            type="url"
            placeholder="picture url"
            disabled={isLoading}
            required
          />
          <Form.Button>Sign Up</Form.Button>
        </Form.Form>
        <Link to="/">
          <S.Link>Switch back to log in</S.Link>
        </Link>
      </S.Container>
    </Screen.Container>
  );
}
