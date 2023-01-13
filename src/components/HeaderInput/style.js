import styled from "styled-components";
import { IoIosSearch } from "react-icons/io";

export const InputContainer = styled.div`
  position: relative;
  width: 563px;
  height: 45px;
  border: none;
  border-radius: 8px;
  z-index: 4;

  @media (max-width: 1024px) {
    width: 450px;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const StyledInput = styled.input`
  width: 563px;
  height: 45px;
  border: none;
  border-radius: 8px;
  font-family: "Lato", sans-serif;
  font-size: 19px;
  padding: 1rem;

  ::placeholder {
    color: #c6c6c6;
  }

  :focus {
    outline: none;
  }

  @media (max-width: 1024px) {
    width: 450px;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const SearchIcon = styled.div`
  position: absolute;
  top: 25%;
  right: 20px;

  @media (max-width: 250px) {
    display: none;
  }
`;

export const StyledIcon = styled(IoIosSearch)`
  color: #c6c6c6;
  font-size: 25px;
`;

export const SearchDropDown = styled.div`
  position: absolute;
  padding-top: 45px;
  background: #e7e7e7;
  border-radius: 8px;
  width: 563px;
  overflow: hidden;
  display: ${(props) => props.open ? "initial" : "none"};

  @media (max-width: 1024px) {
    width: 450px;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const List = styled.ul`
  width: 100%;
`;

export const UserEmpty = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 3rem;

  :hover {
    background: rgba(200, 200, 200, 1);
  }
`;

export const User = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 3rem;
  width: 100%;
  padding: 2rem 1rem;
  cursor: pointer;

  :hover {
    background: rgba(200, 200, 200, 1);
  }
`;

export const UserImage = styled.img`
  height: 39px;
  width: 39px;
  border-radius: 19.5px;
`;

export const UserName = styled.p`
  font-family: "Lato", sans-serif;
  font-size: 19px;
  color: #515151;
  margin-left: 0.8rem;
`;

export const IsFollowing = styled.p`
  font-family: "Lato", sans-serif;
  font-size: 19px;
  color: #c5c5c5;
  margin-left: 0.8rem;
`;

export const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 1rem;
  z-index: 4;

  @media (max-width: 1024px) {
    top: 102px;
  }

  @media (max-width: 768px) {
    position: absolute;
    top: 120px;
    margin: 0;
    width: 90%;
    left: 50%;
    right: 50%;
    transform: translate(-50%, -50%);
  }
`;
