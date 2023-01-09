import {
  Container,
  HeaderText,
  HeaderMenu,
  MenuImage,
  MenuSelect,
  MenuContainer,
  DropdownMenuActive,
  Option,
  HeaderLink
} from "./style";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../providers";
import HeaderInput from "../HeaderInput";

export default function Header() {
  const navigate = useNavigate();
  const { userAuth, setUserAuth } = useAuth();
  const [openMenu, setOpenMenu] = useState(false);

  function selectMenu() {
    setOpenMenu(!openMenu);
  }

  function logOut() {
    setOpenMenu(!openMenu);
    localStorage.removeItem("linkr");
    setUserAuth(undefined);
    navigate("/");
  }

  return (
    <Container>
      <HeaderLink to='/timeline'>
        <HeaderText>linkr</HeaderText>
      </HeaderLink>
      <HeaderInput />
      <HeaderMenu>
        <MenuSelect onClick={selectMenu}>
          {openMenu ? <IoIosArrowUp /> : <IoIosArrowDown />}
        </MenuSelect>
        {userAuth && (
          <MenuImage
            onClick={selectMenu}
            src={userAuth.picture_url}
            alt="user picture"
          />
        )}
        {openMenu && (
          <MenuContainer onClick={selectMenu}>
            <DropdownMenuActive>
              <Option onClick={logOut}>Logout</Option>
            </DropdownMenuActive>
          </MenuContainer>
        )}
      </HeaderMenu>
    </Container>
  );
}
