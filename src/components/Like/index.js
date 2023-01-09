import * as Icons from "../../assets/Icons/";
import * as S from "./style";
import { useAuth } from "../../providers";
import { useState, useEffect } from "react";
import { api, config } from "../../services";

export default function Like({ likes, postId, updateData }) {
  const { userAuth } = useAuth();
  const [iconLike, setIconLike] = useState(false);

  function postLike() {
    api
      .post(`/like/${postId}`, {}, config(userAuth.token))
      .then((res) => {
        setIconLike(!iconLike);
        updateData();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    likes.forEach((like) => {
      if (like.user_id === userAuth.userId) {
        setIconLike(true);
      }
    });
  }, []);

  return (
    <>
      <S.Icon onClick={postLike}>
        {iconLike ? <Icons.FillHeart /> : <Icons.OutlineHeart />}
      </S.Icon>
      <S.LikesCount>{likes.length} likes</S.LikesCount>
    </>
  );
}
