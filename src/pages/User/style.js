import styled from "styled-components";

export const Title = styled.h1`
  display: flex;
  justify-content: left;
  color: #fff;
  font-family: "Oswald", sans-serif;
  font-size: 3rem;

  @media (max-width: 1024px) {
    width: 100%;
    font-size: 1.5rem;
    padding-left: 1rem;
    margin: 2rem 0;
  }
`;

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
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

export const UserInfos = styled.div`
width: 941px;
display: flex;
align-items: center;
margin: 4rem 0 2rem 0;

@media (max-width: 1024px) {
    width: 100%;
  }
`;

export const UserImg = styled.img`
  height: 50px;
  width: 50px;
  border-radius: 2rem;
  background: #fff;
  margin: 0 1rem;

  @media (max-width: 768px) {
    height: 40px;
    width: 40px;
  }
`;
