import styled from "styled-components";
import { device } from "../../assets/breakpoints";

export const card = styled.div`
  width: 301px;
  max-height: 406px;
  background-color: #171717;
  border-radius: 16px;
  padding: 16px;

  display: none;

  @media ${device.desktop} {
    display: flex;
    flex-direction: column;
  }
`;

export const lineDiv = styled.div`
  width: 100%;
  height: 1px;
  background-color: #484848;
  margin: 20px 0px;
`;

export const list = styled.ul`
  list-style-type: none;

  font-size: 19px;
  font-weight: 700;
  line-height: 22.8px;
  letter-spacing: 0.05em;
  color: #ffffff;

  display: ${(props) => props.isLoading ? "flex" : "inline"};
  justify-content: center;

  li {
    margin-bottom: 7px;
    cursor: pointer;
  }
`;
