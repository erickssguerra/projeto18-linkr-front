import { BiError } from "react-icons/bi";
import { Link } from "react-router-dom";
import * as Style from "./style";

export default function NotFoundPage() {
  return (
    <Style.Container>
      <Style.IconContainer>
        <BiError />
      </Style.IconContainer>
      <Style.Title>404</Style.Title>
      <Style.Title>Page Not Found</Style.Title>
      <Style.Link>
        <Link to="/timeline">Go back</Link>
      </Style.Link>
    </Style.Container>
  );
}
