import * as Styles from "./style";
import { SlPaperPlane } from "react-icons/sl";

export default function Comments({ pfp, commentsOpen }) {
  return (
    <Styles.CommentContainer commentsOpen={commentsOpen}>
      <Styles.InputContainer>
        <Styles.CommentProfilePicture src={pfp} />
        <Styles.CommentInput placeholder="Write a comment..." />
        <Styles.IconDiv onClick={() => console.log("sending comment...")}>
          <SlPaperPlane size={15}/>
        </Styles.IconDiv>
      </Styles.InputContainer>
    </Styles.CommentContainer>
  );
}
