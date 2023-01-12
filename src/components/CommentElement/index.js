import { useNavigate } from "react-router-dom";
import * as Styles from "./style";

export default function CommentElement({ commentData, authorId }) {
  const navigate = useNavigate();

  return (
    <Styles.CommentContainer>
      <Styles.Picture src={commentData.picture_url} />
      <Styles.NameAndCommentContainer>
        <p onClick={() => navigate(`/user/${commentData.user_id}`)}>
          {commentData.name}
          {commentData.user_id === authorId ? <span>• post's author</span> : null}
        </p>
        {commentData.comment}
      </Styles.NameAndCommentContainer>
    </Styles.CommentContainer>
  );
}
