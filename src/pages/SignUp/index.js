import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { api } from "../../services";
import { loadingButton } from "../../assets/Spinners";
import * as S from "./style";
import * as Screen from "../../styles/Screen";
import * as Form from "../../styles/Form";
import Logo from "../../components/Logo";

export default function SignUpPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [form, setForm] = useState({
    email: "",
    password: "",
    name: "",
    picture_url: "",
  });
  const navigate = useNavigate();

  function handleForm(event) {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  }

  function signUp(event) {
    setIsLoading(true);
    event.preventDefault();
    api
      .post("/signup", form)
      .then(() => {
        navigate("/");
      })
      .catch((err) => {
        alert(err.response.data.message);
        setIsLoading(false);
      });
  }

  return (
    <Screen.Container>
      <Logo />
      <S.Container>
        <Form.Form onSubmit={signUp}>
          <Form.Input
            name="email"
            value={form.email}
            onChange={handleForm}
            type="email"
            placeholder="email"
            disabled={isLoading}
            required
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
          <Form.Button type="submit" disabled={isLoading}>
            {isLoading ? loadingButton : "Sign Up"}
          </Form.Button>
        </Form.Form>
        <Link to="/">
          <S.Link>Switch back to log in</S.Link>
        </Link>
      </S.Container>
    </Screen.Container>
  );
}
