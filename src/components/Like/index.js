import * as Icons from "../../assets/Icons/";
import * as S from "./style";
import { useAuth } from "../../providers";
import { useState, useEffect } from "react";

export default function Like({ likes }) {
  const { userAuth } = useAuth();
  const [iconLike, setIconLike] = useState(<Icons.OutlineHeart />);

  function postLike() {
    alert("clicou");
  }

  useEffect(() => {
    likes.forEach((like) => {
      if (like.user_id == userAuth.userId) {
        setIconLike(<Icons.FillHeart />);
      }
    });
  }, []);

  return (
    <>
      <S.Icon onClick={postLike}>{iconLike}</S.Icon>
      <S.LikesCount>{likes.length} likes</S.LikesCount>
    </>
  );
}
