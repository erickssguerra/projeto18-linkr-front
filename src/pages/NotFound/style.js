import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: "Lato", sans-serif;
  font-weight: 700;
  color: #ffffff;
  text-align: center;
`;

export const IconContainer = styled.div`
  font-size: 20rem;

  @media (max-width: 1024px) {
    font-size: 12rem;
  }
`;

export const Title = styled.h1`
  font-size: 6rem;
  margin: 1rem 0;

  @media (max-width: 1024px) {
    font-size: 3rem;
  }
`;

export const Link = styled.div`
  font-size: 3rem;
  margin: 4rem 0;
  a {
    color: inherit;
  }

  @media (max-width: 1024px) {
    font-size: 1.5rem;
    margin: 3rem 0;
  }
`;
