import styled from "styled-components";

export const Title = styled.h1`
  display: flex;
  align-items: center;
  width: 937px;
  justify-content: left;
  color: #fff;
  font-family: "Oswald", sans-serif;
  font-size: 4rem;

  @media (max-width: 1024px) {
    width: 100%;
    font-size: 33px;
    padding: 0 1rem;
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

export const UserInfos = styled.main`
  width: 941px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 8rem 0 2rem 0;

  @media (max-width: 1024px) {
    width: 100%;
    padding: 0 1rem;
  }

  @media (max-width: 768px) {
    margin: 12rem 0 2rem 0;
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

export const UserInfosContainer = styled.main`
  width: 829px;
  display: flex;
  align-items: center;
`;

export const FollowContainer = styled.div`
  display: flex;
`;

export const LoadingButton = styled.button`
  width: 7rem;
  height: 2rem;
  background: #171717;
  border: none;
  border-radius: 0.3rem;
  font-family: "Lato", sans-serif;
  font-size: 0.9rem;
  color: #ffffff;

  @media (max-width: 1024px) {
    width: 5rem;
    font-size: 0.8rem;
    margin-right: 1rem;
  }
`;

export const FollowButton = styled.button`
  width: 7rem;
  height: 2rem;
  background: #1877f2;
  border: none;
  border-radius: 0.3rem;
  font-family: "Lato", sans-serif;
  font-size: 0.9rem;
  color: #ffffff;
  cursor: pointer;

  @media (max-width: 1024px) {
    width: 5rem;
    font-size: 0.8rem;
    margin-right: 1rem;
  }
`;

export const UnfollowButton = styled.button`
  width: 7rem;
  height: 2rem;
  background: #ffffff;
  border: none;
  border-radius: 0.3rem;
  font-family: "Lato", sans-serif;
  font-size: 0.9rem;
  color: #1877f2;
  cursor: pointer;

  @media (max-width: 1024px) {
    width: 5rem;
    font-size: 0.8rem;
    margin-right: 1rem;
  }
`;
