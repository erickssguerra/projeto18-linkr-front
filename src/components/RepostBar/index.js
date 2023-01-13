import * as S from "./style";
import { useAuth } from "../../providers";
import * as Icons from "../../assets/Icons";

export default function RepostBar({ data }) {
  const { userAuth } = useAuth();

  return (
    <S.Container isReposted={data.repost}>
      <Icons.Repost /> Re-posted by{" "}
      {data.repost_user_id === userAuth.userId ? "you" : data.repost_user_name}
    </S.Container>
  );
}
