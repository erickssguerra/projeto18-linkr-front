import styled from "styled-components";

export const PostContainer = styled.div`
  background: #171717;
  width: 611px;
  height: 276px;
  border-radius: 1rem;
  display: flex;
  align-items: center;
  flex-direction: row;
  padding: 1rem;
  margin-bottom: 1rem;
  font-family: !important'Lato', sans-serif;
`;

export const LeftContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  margin-right: 1rem;
  align-items: center;
`;

export const UserImg = styled.img`
  height: 50px;
  width: 50px;
  border-radius: 2rem;
  background: #FFF;
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
  width: 20rem;
`;

export const UserName = styled.h2`

`;

export const Description = styled.p`
  color: #B7B7B7;
`;

export const PostsContainer = styled.ul`
  width: 40rem;
  color: #FFF;
`;

export const Message = styled.p`
  color: #FFF;
`;