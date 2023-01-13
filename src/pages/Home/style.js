import styled from "styled-components";

export const Title = styled.h1`
  margin: 4rem 0 2rem 0;
  display: flex;
  width: 937px;
  justify-content: left;
  color: #fff;
  font-family: "Oswald", sans-serif;
  font-size: 4rem;

  @media (max-width: 1024px) {
    width: 100%;
    font-size: 33px;
    padding: 0 1rem;
    margin: 1rem 0 2rem 0;
  }
`;

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 5rem;
  height: 100%;
  z-index: 4;
  overflow-y: auto;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none; /* Chrome */
  }

  @media (max-width: 768px) {
    margin-top: 10rem;
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

export const TrendingDiv = styled.div`
`;


export const NewPostsAlert = styled.div`
  height: 61px;
  width: 611px;
  margin-bottom: 2rem;
  background: #1877F2;
  border-radius: 1rem;
  justify-content: center;
  align-items: center;
  display:  ${props => props.active ? 'flex' : 'none'};
  cursor: pointer;

  :hover {
    background: rgba(75, 140, 240, 1);
  }
`;

export const NewPostsText = styled.p`
  font-size: 16px;
  font-weight: 400;
  font-family: 'Lato', sans-serif;
  color: #FFF;
`;

export const NewPostsIcon = styled.div` 
  margin-left: 4px;
  margin-top: 4px;
  font-size: 20px;
  color: #FFF;
`;