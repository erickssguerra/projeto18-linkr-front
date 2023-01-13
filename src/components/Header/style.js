import styled from "styled-components";
import { Link } from "react-router-dom";

import { device } from "../../assets/breakpoints";

export const Container = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: start;
  background: #333333;
  z-index: 4;
  position: fixed;
  top: 0;

  @media ${device.desktop} {
    box-shadow: none;
  }
`;

export const HeaderText = styled.h1`
  color: #fff;
  font-family: "Passion One", sans-serif;
  font-size: 3rem;
  margin-left: 1rem;

  @media ${device.desktop} {
    font-size: 4rem;
  }
`;

export const HeaderMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: 1rem;
`;

export const MenuSelect = styled.button`
  color: #ffffff;
  font-size: 2rem;
  padding: 0 1rem;
  background: #151515;
  border: none;
  cursor: pointer;
  position: relative;
`;

export const MenuImage = styled.img`
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  cursor: pointer;
`;

export const MenuContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  right: 0;
  top: 5rem;
  border-bottom-left-radius: 1rem;
  padding: 1rem;
  background: rgba(0, 0, 0, 0);
  z-index: 5;
`;

export const DropdownMenuActive = styled.div`
  width: 8rem;
  height: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 0;
  right: 0;
  border-bottom-left-radius: 1rem;
  padding: 1rem;
  background: #171717;
`;

export const Option = styled.div`
  color: #ffffff;
  font-size: 1rem;
  cursor: pointer;
  &:hover {
    color: #ff0000;
  }
`;

export const HeaderLink = styled(Link)`
  text-decoration: none;
`;

export const HeaderContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0;
  height: 5rem;
  width: 100vw;
  background: #151515;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  z-index: 5;

  @media ${device.desktop} {
    box-shadow: none;
  }
`;

export const HeaderBotton = styled.div`
  width: 100%;
  height: 5rem;

  @media ${device.tablet} {
    display: none;
  }
`;

export const SerachOverlay = styled.div`
  background: rgba(0, 0, 0, 0);
  z-index: 3;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: ${(props) => props.open ? "initial" : "none"};
`;
