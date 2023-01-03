import styled from "styled-components";
import { device } from "../../assets/breakpoints";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media ${device.tablet} {
    width: 50%;
  }
`;

export const Link = styled.p`
  font-weight: 400;
  font-size: 17px;
  color: #ffffff;
  text-decoration: underline;
  cursor: pointer;

  @media ${device.desktop} {
    font-size: 20px;
  }
`;
