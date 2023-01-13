import styled from "styled-components";
import { device } from "../../assets/breakpoints";

export const CommentContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 75px 25px 25px 25px;
  background-color: #1e1e1e;
  margin: -50px 0px 0px 0px;

  display: ${(props) => (props.commentsOpen ? "flex" : "none")};
  flex-direction: column;
  align-items: center;

  ul {
    width: 100%;
  }

  @media ${device.desktop} {
    width: 611px;
    border-radius: 16px;
  }
`;

export const InputContainer = styled.div`
  width: 100%;

  display: flex;
  position: relative;

  form {
    width: 100%;
  }

  @media ${device.tablet} {
    width: auto;
  }
`;

export const CommentProfilePicture = styled.img`
  width: 39px;
  height: 39px;
  border-radius: 26.5px;
  margin-right: 14px;
`;

export const CommentInput = styled.input`
  width: 100%;
  height: 39px;
  padding: 0px 60px 0px 15px;
  background-color: #252525;
  border: none;
  border-radius: 8px;

  font-family: "Lato", sans-serif;
  font-size: 14px;
  font-weight: 400;
  color: #ffffff;

  ::placeholder {
    font-style: italic;
    color: #575757;
  }

  @media ${device.tablet} {
    width: 510px;
  }
`;

export const IconButton = styled.button`
  height: 100%;
  padding: 0px 20px;
  background-color: transparent;
  border: none;
  cursor: pointer;

  color: #ffffff;

  display: flex;
  align-items: center;
  justify-content: center;

  position: absolute;
  right: 0;
  top: 0;
`;
