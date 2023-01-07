import styled from "styled-components";


export const PostContainer = styled.div`
  background: #171717;
  width: 611px;
  height: 276px;
  border-radius: 1rem;
  display: flex;
  align-items: center;
  flex-direction: row;
  padding: 1.2rem 0.8rem;
  margin-bottom: 1rem;
  font-family: !important'Lato', sans-serif;

  @media (max-width: 1024px) {
    width: 100%;
    border-radius: 0;
    justify-content: center;
  }

  @media (max-width: 768px) {
    height: 232px;
  }
`;

export const LeftContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  margin-right: 0.8rem;
  align-items: center;
`;

export const UserImg = styled.img`
  height: 50px;
  width: 50px;
  border-radius: 2rem;
  background: #fff;

  @media (max-width: 768px) {
    height: 40px;
    width: 40px;
  }
`;

export const LikesContainer = styled.div`
  width: 4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 1rem;
`;

export const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const UserName = styled.h2`
  font-size: 19px;
  font-family: "Lato", sans-serif;
  margin-bottom: 0.8rem;

  @media (max-width: 768px) {
    font-size: 17px;
  }
`;

export const UpperContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const PostIcons = styled.div`

`;

export const PostIcon = styled.button`
  font-size: 1rem;
  color: #ffffff;
  top: 1rem;
  right: 1rem;
  background: #171717;
  border: none;
  cursor: pointer;
  margin: 0 1rem;

  @media (min-width: 768px) {
    margin-right: 0;
    margin-left: 1rem;
  }
`;
