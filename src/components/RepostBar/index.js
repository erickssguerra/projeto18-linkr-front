import * as S from "./style";
import { useAuth } from "../../providers";
import { useEffect, useState } from "react";
import { api, config } from "../../services";
import * as Icons from "../../assets/Icons";

export default function RepostBar({ authorId, postId }) {
  const { userAuth } = useAuth();
  const [isFollower, setIsFollower] = useState(true);

  useEffect(() => {
    api
      .get(`/followers/${authorId}`, config(userAuth.token))
      .then((res) => {
        setIsFollower(res.data);
        if (userAuth.userId == authorId) {
          setIsFollower(true);
        }
      })
      .catch((err) => console.log(err.response.data));
  }, []);
console.log(`isFollower? ${isFollower}`)
console.log(`authorId = ${authorId}`)
console.log(`postId = ${postId}`)
console.log(`userId = ${userAuth.userId}`)
  return (
    <S.Container isFollower={isFollower}>
      <Icons.Repost /> Re-posted by you
    </S.Container>
  );
}
