import { Link, useNavigate } from "react-router-dom";
import * as Style from "./style";
import * as Screen from "../../styles/Screen";
import * as Form from "../../styles/Form";
import { useEffect, useState } from "react";
import Logo from "../../components/Logo";
import { api } from "../../services";
import { loadingButton } from "../../assets/Spinners";
import { useAuth } from "../../providers";

export default function SignInPage() {
  const navigate = useNavigate();
  const { userAuth, setUserAuth } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const [form, setForm] = useState({ email: "", password: "" });

  useEffect(() => {
    if (userAuth !== undefined) {
      navigate("/timeline");
    }
  }, [userAuth]);

  function handleForm(event) {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  }

  function signIn(event) {
    event.preventDefault();
    setIsLoading(true);

    const body = form;

    api
      .post(`/signin`, body)
      .then((response) => {
        setUserAuth(response.data);
        localStorage.setItem("linkr", JSON.stringify(response.data));
        navigate("/timeline");
      })
      .catch((error) => {
        alert(error.response.data.message);
        setIsLoading(false);
      });
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
