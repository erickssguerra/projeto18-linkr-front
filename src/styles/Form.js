import styled from "styled-components";

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Input = styled.input`
  width: 429px;
  height: 65px;
  font-family: "Oswald", sans-serif;
  font-weight: 700;
  font-size: 27px;
  color: #000000;
  padding: 12px;
  border-radius: 6px;
  border: none;
  margin-bottom: 6px;
  &placeholder {
    color: #9f9f9f;
  }
  &:-webkit-autofill {
    -webkit-box-shadow: 0 0 0px 1000px #ffffff inset !important;
    -webkit-text-fill-color: #000000 !important;
  }
`;

export const Button = styled.button`
  width: 429px;
  height: 65px;
  font-family: "Oswald", sans-serif;
  font-weight: 700;
  font-size: 27px;
  color: #ffffff;
  background: #1877f2;
  border-radius: 6px;
  border: none;
  margin-bottom: 22px;
`;
