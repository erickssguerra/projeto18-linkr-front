import styled from "styled-components";

export const PostContainer = styled.div`
  background: #171717;
  width: 36rem;
  height: 15rem;
  border-radius: 1rem;
  display: flex;
  align-items: center;
  flex-direction: row;
  padding: 1rem;
  margin-bottom: 1rem;
  position: relative;
`;

export const LeftContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  margin-right: 1rem;
`;

export const UserImg = styled.img`
  height: 4rem;
  width: 4rem;
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

`;

export const DeleteIcon = styled.button`
  font-size: 1rem;
  color: #ffffff;
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: #171717;
  border: none;
  cursor: pointer;
`;