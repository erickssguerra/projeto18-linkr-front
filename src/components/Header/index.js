import {
  Container,
  HeaderText,
  HeaderMenu,
  MenuImage,
  MenuSelect
} from './style';

export default function Header() {
  return (
    <Container>
      <HeaderText>linkr</HeaderText>
      <HeaderMenu>
        <MenuSelect />
        <MenuImage />
      </HeaderMenu>
    </Container>
  );
};
