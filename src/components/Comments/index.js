import * as Styles from "./style";
import { SlPaperPlane } from "react-icons/sl";
import { useAuth } from "../../providers";
import { useState } from "react";
import { api } from "../../services";
import CommentElement from "../CommentElement";

export default function Comments({ data, commentsOpen }) {
  const { post_id, comments } = data;
  const { userAuth } = useAuth();
  const { token, userId, picture_url } = userAuth;
  const [comment, setComment] = useState("");

  function submitComment(e) {
    e.preventDefault();

    api
      .post(
        "/comments",
        {
          user_id: userId,
          post_id,
          comment,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => {
        setComment("");
      })
      .catch((err) => {
        alert("There was an error posting the comment, please try again");
      });
  }

  return (
    <Styles.CommentContainer commentsOpen={commentsOpen}>
      <ul>
        {comments?.map((commentData, index) => {
          return <CommentElement key={index} commentData={commentData} authorId={data.user_id}/>;
        })}
      </ul>
      <Styles.InputContainer>
        <Styles.CommentProfilePicture src={picture_url} />
        <form onSubmit={submitComment}>
          <Styles.CommentInput
            placeholder="Write a comment..."
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            required
          />
          <Styles.IconButton>
            <SlPaperPlane size={15} />
          </Styles.IconButton>
        </form>
      </Styles.InputContainer>
    </Styles.CommentContainer>
  );
}
