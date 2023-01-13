import styled from "styled-components";

export const Container = styled.div`
  background: #1e1e1e;
  width: 611px;
  height: 3.4rem;
  border-radius: 1rem 1rem 0 0 ;
  display: ${(props) => (props.isFollower ? "none" : "flex")};
  align-items: flex-start;
  padding: 10px;
  font-family: "Lato", sans-serif;
  position: relative;
  top: 1rem;
  left: 0;
  z-index: 2;
  svg {
    margin-right: 6px;
  }

  @media (max-width: 1024px) {
    width: 100%;
    border-radius: 0;
  }

  @media (max-width: 768px) {

  }
`;
