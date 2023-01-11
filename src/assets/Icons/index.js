import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { FaRetweet } from "react-icons/fa";

export function OutlineHeart() {
  return <AiOutlineHeart />;
}

export function FillHeart() {
  return <AiFillHeart color="red" />;
}

export function Repost() {
  return <FaRetweet size={20} />;
}
