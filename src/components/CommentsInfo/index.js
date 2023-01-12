import { IoChatbubblesOutline } from "react-icons/io5";
import * as Styles from "./style";

export default function CommentsInfo({commentsNumber}) {
  return (
    <Styles.Icon>
      <IoChatbubblesOutline size={20}/>
      <Styles.CommentCount>{commentsNumber} comments</Styles.CommentCount>
    </Styles.Icon>
  );
}
