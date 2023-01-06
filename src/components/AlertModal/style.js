import styled from "styled-components";
import { device } from "../../assets/breakpoints";

export const Close = styled.button`
  background: #333333;
  font-size: 0.8rem;
  font-family: "Lato", sans-serif;
  border: none;
  font-weight: 700;
  color: #ffffff;
  position: absolute;
  top: 1rem;
  right: 2rem;

  @media ${device.desktop} {
    font-size: 1.5rem;
    top: 1.5rem;
    right: 3rem;
  }
`;

export const Title = styled.h2`
  width: 10rem;
  font-family: "Lato", sans-serif;
  font-weight: 700;
  font-size: 1rem;
  color: #ffffff;
  text-align: center;

  @media ${device.desktop} {
    width: 21rem;
    font-size: 2rem;
  }
`;

export const Subtitle = styled.h3`
  width: 10rem;
  font-family: "Lato", sans-serif;
  font-weight: 700;
  font-size: 0.8rem;
  color: #ff0000;
  text-align: center;
  margin-top: 1rem;

  @media ${device.desktop} {
    width: 21rem;
    font-size: 1.5rem;
  }
`;
