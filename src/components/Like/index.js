import * as Icons from "../../assets/Icons/";
import * as S from "./style";
import { useAuth } from "../../providers";
import { useState, useEffect } from "react";
import { api, config } from "../../services";

export default function Like({ postId }) {
  const { userAuth } = useAuth();
  const [iconLike, setIconLike] = useState(false);
  const [likes, setLikes] = useState([]);
  const [likesMessage, setLikesMessage] = useState("None liked yet");
  function postLike() {
    api
      .post(`/like/${postId}`, {}, config(userAuth.token))
      .then((res) => {
        setIconLike(!iconLike);
        setLikes(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  useEffect(() => {
    api
      .get(`/like/${postId}`, config(userAuth.token))
      .then((res) => {
        setLikes(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    const arrayUsersId = [];
    if (likes.length == 0) {
      setLikesMessage("None liked yet");
    }
    for (let i = 0; i < likes.length; i++) {
      if (likes[i].user_id === userAuth.userId) {
        setIconLike(true);
      }
      arrayUsersId.push(Number(likes[i].user_id));
    }
    if (arrayUsersId.length == 1) {
      setLikesMessage(`${likes[0].user_name?.split(" ")[0]}`);
    }

    if (arrayUsersId.includes(userAuth.userId) && arrayUsersId.length == 1) {
      setLikesMessage("You");
    }

    if (arrayUsersId.length == 2) {
      setLikesMessage(
        `${likes[0].user_name?.split(" ")[0]} and ${
          likes[1].user_name?.split(" ")[0]
        }`
      );
    }

    if (arrayUsersId.includes(userAuth.userId) && arrayUsersId.length == 2) {
      const arrayUsersName = [];
      for (let i = 0; i < 2; i++) {
        if (userAuth.userId !== likes[i].user_id) {
          arrayUsersName.push(likes[i].user_name?.split(" ")[0]);
        }
      }
      setLikesMessage(`You and ${arrayUsersName[0]}`);
    }

    if (arrayUsersId.length > 2) {
      const arrayUsersName = [];
      for (let i = 0; i < 2; i++) {
        arrayUsersName.push(likes[i].user_name?.split(" ")[0]);
      }
      setLikesMessage(
        `${arrayUsersName[0]}, ${arrayUsersName[1]} and ${
          arrayUsersId.length - 2
        }`
      );
    }

    if (arrayUsersId.length > 2 && arrayUsersId.includes(userAuth.userId)) {
      const arrayUsersName = [];
      for (let i = 0; i < arrayUsersId.length; i++) {
        if (userAuth.userId !== likes[i].user_id) {
          arrayUsersName.push(likes[i].user_name?.split(" ")[0]);
          break;
        }
      }
      setLikesMessage(
        `You, ${arrayUsersName[0]} and ${arrayUsersId.length - 2}`
      );
    }
  }, [likes]);

  return (
    <>
      <S.Icon onClick={postLike}>
        {iconLike ? <Icons.FillHeart /> : <Icons.OutlineHeart />}
        <S.LikesCount role="tooltip" aria-label={likesMessage}>
          {likes?.length} likes
        </S.LikesCount>
      </S.Icon>
    </>
  );
}
