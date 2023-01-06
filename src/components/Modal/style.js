import styled from "styled-components";
import { device } from "../../assets/breakpoints";

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

export const ButtonContainer = styled.div`
  width: 9rem;
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;

  @media ${device.desktop} {
    width: 19rem;
  }
`;

export const Close = styled.button`
  width: 4rem;
  height: 1.5rem;
  background: #ffffff;
  border-radius: 0.3rem;
  border: none;
  font-family: "Lato", sans-serif;
  font-weight: 700;
  font-size: 0.6rem;
  color: #1877f2;
  cursor: pointer;

  @media ${device.desktop} {
    width: 8rem;
    height: 2rem;
    border-radius: 0.3rem;
    font-size: 1rem;
  }
`;

export const Comfirm = styled.button`
  width: 4rem;
  height: 1.5rem;
  background: #1877f2;
  border-radius: 0.3rem;
  border: none;
  font-family: "Lato", sans-serif;
  font-weight: 700;
  font-size: 0.6rem;
  color: #ffffff;
  cursor: pointer;

  @media ${device.desktop} {
    width: 8rem;
    height: 2rem;
    border-radius: 0.3rem;
    font-size: 1rem;
  }
`;
