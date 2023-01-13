import { useNavigate } from "react-router-dom";
import { useAuth } from "../../providers";
import * as Styles from "./style";

export default function CommentElement({ commentData, PostAuthorId }) {
  const navigate = useNavigate();
  const { userAuth } = useAuth();

  return (
    <Styles.CommentContainer>
      <Styles.Picture src={commentData.picture_url} />
      <Styles.NameAndCommentContainer>
        <p onClick={() => navigate(`/user/${commentData.comment_author_id}`)}>
          {commentData.name}
          {commentData.comment_author_id === PostAuthorId ? <span>• post's author</span> : null}
          {commentData.followers.includes(userAuth.userId) && commentData.comment_author_id !== userAuth.userId ? (
            <span>• following</span>
          ) : null}
          {commentData.comment_author_id === userAuth.userId ? <span>• you</span> : null}
        </p>
        {commentData.comment}
      </Styles.NameAndCommentContainer>
    </Styles.CommentContainer>
  );
}
