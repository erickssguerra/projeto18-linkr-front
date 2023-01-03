import styled from "styled-components";
import { device } from "../../assets/breakpoints";

export const Sidebar = styled.div`
  width: 100%;
  height: 175px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #151515;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  @media ${device.tablet} {
    width: 50%;
    height: 100vh;
    justify-content: center;
    box-shadow: none;
  }

  @media ${device.desktop} {
    width: calc(100% - 535px);
    align-items: initial;
  }
`;

export const Header = styled.header`
  font-family: "Passion One", sans-serif;
  font-size: 76px;
  letter-spacing: 5px;
  color: white;
  margin-top: 10px;

  @media ${device.tablet} {
    width: 237px;
  }

  @media ${device.desktop} {
    font-size: 106px;
    margin-left: 144px;
  }
`;

export const Subtile = styled.h1`
  max-width: 237px;
  font-weight: 700;
  font-size: 23px;
  text-align: center;
  letter-spacing: 0;
  line-height: normal;
  margin-top: -10px;

  @media ${device.desktop} {
    max-width: 442px;
    font-size: 43px;
    margin: 0 20px 0 144px;
    text-align: left;
  }
`;
