import styled from "styled-components";
import { device } from "../assets/breakpoints";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

@media ${device.tablet} {
  flex-direction: initial;
}
`;
