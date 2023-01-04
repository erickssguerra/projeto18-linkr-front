import {
  Container,
  HeaderText,
  HeaderMenu,
  MenuImage,
  MenuSelect,
  MenuContainer,
  DropdownMenuActive,
  Option,
} from "./style";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../providers";

export default function Header() {
  const navigate = useNavigate();
  const { setUserAuth } = useAuth();
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
      <HeaderText>linkr</HeaderText>
      <HeaderMenu>
        <MenuSelect onClick={selectMenu}>
          {openMenu ? <IoIosArrowUp /> : <IoIosArrowDown />}
        </MenuSelect>
        <MenuImage onClick={selectMenu} />
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
