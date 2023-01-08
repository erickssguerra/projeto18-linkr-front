import styled from "styled-components";
import { IoIosSearch } from "react-icons/io";


export const InputContainer = styled.div`
  position: relative;
  z-index: 2;
  width: 563px;
  height: 45px;
  border: none;
  border-radius: 8px;
`;

export const StyledInput = styled.input`
  width: 563px;
  height: 45px;
  border: none;
  border-radius: 8px;
  font-family: 'Lato', sans-serif;
  font-size: 19px;
  padding: 1rem;

  ::placeholder {
    color: #C6C6C6;
  }

  :focus {
    outline: none;
  }
`;

export const SearchIcon = styled.div`
  position: absolute;
  top: 25%;
  right: 20px;
`;

export const StyledIcon = styled(IoIosSearch)`
  color: #C6C6C6;
  font-size: 25px;
`;

export const SearchDropDown = styled.div`
  position: absolute;
  padding-top: 45px;
  background: #E7E7E7;
  border-radius: 8px;
  width: 563px;
  overflow: hidden;
`;

export const List = styled.ul`
  width: 100%;
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
  font-family: 'Lato', sans-serif;
  font-size: 19px;
  color: #515151;
  margin-left: 0.8rem;
`;

export const SearchContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`;