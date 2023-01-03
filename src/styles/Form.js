import styled from "styled-components";
import { device } from "../assets/breakpoints";

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 40px;

  @media ${device.tablet} {
    margin: 0;
  }
`;

export const Input = styled.input`
  width: 330px;
  height: 55px;
  font-family: "Oswald", sans-serif;
  font-weight: 700;
  font-size: 22px;
  color: #000000;
  padding: 12px;
  border-radius: 6px;
  border: none;
  margin-bottom: 13px;
  &placeholder {
    color: #9f9f9f;
  }
  &:-webkit-autofill {
    -webkit-box-shadow: 0 0 0px 1000px #ffffff inset !important;
    -webkit-text-fill-color: #000000 !important;
  }

  @media ${device.desktop} {
    width: 430px;
    height: 65px;
    font-size: 27px;
  }
`;

export const Button = styled.button`
  width: 330px;
  height: 55px;
  font-family: "Oswald", sans-serif;
  font-weight: 700;
  font-size: 22px;
  color: #ffffff;
  background: #1877f2;
  border-radius: 6px;
  border: none;
  margin-bottom: 22px;

  @media ${device.desktop} {
    width: 430px;
    height: 65px;
    font-size: 27px;
  }
`;
