import styled from "styled-components";
import { device } from "../../assets/breakpoints";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  @media ${device.desktop} {
    width: 937px;
    margin: 0 auto;
  }
`;

export const Title = styled.h1`
  font-weight: 700;
  font-size: 2rem;
  color: #ffffff;
  padding: 2rem 1rem;

  @media ${device.desktop} {
    font-size: 3rem;
    padding: 4rem 0 3rem 0;
  }
`;
