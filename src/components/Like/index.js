import * as Icons from "../../assets/Icons/"
import * as S from "./style";

export default function Like({ likes }) {
  return (
    <>
      <S.Icon>
       <Icons.OutlineHeart/>
      </S.Icon>
      <S.LikesCount>{likes} likes</S.LikesCount>
    </>
  );
}
