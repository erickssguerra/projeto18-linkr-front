import styled from "styled-components";

export const PostsContainer = styled.ul`
  width: 40rem;
  color: #FFF;

  @media (max-width: 1024px) {
    width: 100%;
  }
`;

export const Message = styled.p`
  color: #FFF;
  display: flex;
  justify-content: center;
`;

export const MessageContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  color: #ffffff;
`;

export const LoadingSpinner = styled.div`
  margin-top: 12px;
  margin-left: 8px;
`;