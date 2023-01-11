import * as Icon from "../../assets/Icons";
import * as S from "./style";

export default function Repost({ postId }) {
  return (
    <S.Container>
      <Icon.Repost /> 
      <S.RepostCount>2 re-posts</S.RepostCount>
    </S.Container>
  );
}
