import styled from "styled-components";
import { device } from "../assets/breakpoints";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;

@media ${device.tablet} {
  flex-direction: initial;
}
`;
