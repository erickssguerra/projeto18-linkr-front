import styled from "styled-components";

export const Title = styled.h1`
  display: flex;
  align-items: center;
  width: 937px;
  justify-content: left;
  color: #fff;
  font-family: "Oswald", sans-serif;
  font-size: 4rem;
  margin: 8rem 0 2rem 0;

  @media (max-width: 1024px) {
    width: 100%;
    padding: 0 1rem;
  }

  @media (max-width: 768px) {
    width: 100%;
    font-size: 33px;
    padding: 0 1rem;
    margin: 12rem 0 2rem 0;
  }
`;

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  z-index: 4;
  overflow-y: auto;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none; /* Chrome */
  }
`;

export const MainContent = styled.section`
  width: 40rem;

  @media (max-width: 1024px) {
    width: 100%;
  }
`;

export const PageContent = styled.div`
  display: flex;

  @media (max-width: 1024px) {
    width: 100%;
  }
`;

export const PublishAndPostsDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 1024px) {
    width: 100%;
  }
`;

export const TrendingDiv = styled.div``;
