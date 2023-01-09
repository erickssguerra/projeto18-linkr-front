import * as Icons from "../../assets/Icons/";
import * as S from "./style";
import { useAuth, useUpdate } from "../../providers";
import { useState, useEffect } from "react";
import { api, config } from "../../services";

export default function Like({ likes, postId }) {
  const { userAuth } = useAuth();
  const { update, setUpdate } = useUpdate();
  const [iconLike, setIconLike] = useState(<Icons.OutlineHeart />);

  function postLike() {
    api
      .post(`/like/${postId}`, {}, config(userAuth.token))
      .then((res) => {
        setUpdate(!update);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    likes.forEach((like) => {
      if (like.user_id === userAuth.userId) {
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
