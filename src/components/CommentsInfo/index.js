import { IoChatbubblesOutline } from "react-icons/io5";
import * as Styles from "./style";

export default function CommentsInfo() {
  return (
    <Styles.Icon>
      <IoChatbubblesOutline size={20}/>
      <Styles.CommentCount>0 comments</Styles.CommentCount>
    </Styles.Icon>
  );
}
