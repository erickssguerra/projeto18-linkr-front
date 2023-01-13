import { BsPencil } from "react-icons/bs";
import { FaTrash } from "react-icons/fa";
import { useState } from "react";
import { useAuth, useUpdate } from "../../providers";

import {
  PostContainer,
  PostIcons,
  UpperContent,
  RightContainer,
  UserImg,
  LeftContainer,
  IconContainer,
  UserName,
  PostIcon,
  Container,
} from "./style";
import Snippet from "../Snippet";
import Like from "../Like";
import PostDescription from "../PostDescription";
import CommentsInfo from "../CommentsInfo";
import Comments from "../Comments";
import { ModalComponent } from "../Modal";
import { api } from "../../services";
import { AlertModalComponent } from "../AlertModal";
import { useNavigate } from "react-router-dom";
import Repost from "../Repost";
import RepostBar from "../RepostBar";

export default function Post({ data, updateData }) {
  const [isEditing, setEditing] = useState(0);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [alertModalIsOpen, setAlertIsOpen] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [commentsOpen, setCommentsOpen] = useState(false);
  const [commentsNumber, setCommentsNumber] = useState(data.comments.length);
  const navigate = useNavigate();
  const { userAuth } = useAuth();
  const { update, setUpdate } = useUpdate();
  const snippetData = {
    title: data.metadata.title,
    description: data.metadata.description,
    url: data.url,
    icon: data.metadata.icon,
  };

  function openModal() {
    setIsOpen(true);
  }

  const toggleEditing = () => {
    setEditing(!isEditing);
  };

  function deletePost() {
    setLoading(true);
    api
      .delete(`/timeline/${data.post_id}`, {
        headers: {
          Authorization: `Bearer ${userAuth.token}`,
        },
      })
      .then((response) => {
        setLoading(false);
        setIsOpen(false);
        setUpdate(!update);
      })
      .catch((error) => {
        setLoading(false);
        setIsOpen(false);
        setAlertMessage(error.response.data);
        setAlertIsOpen(true);
      });
  }

  return (
    <Container>
      <RepostBar data={data} />
      <PostContainer>
        <ModalComponent
          title="Are you sure you want to delete this post?"
          close="No, go back"
          confirm="Yes, delete it"
          modalIsOpen={modalIsOpen}
          setIsOpen={setIsOpen}
          propsFunction={deletePost}
          loading={loading}
        />
        <AlertModalComponent
          title="Action could not be completed!"
          subtitle={alertMessage}
          alertModalIsOpen={alertModalIsOpen}
          setAlertIsOpen={setAlertIsOpen}
        />
        <LeftContainer>
          <UserImg src={data.userImage} />
          <IconContainer>
            <Like postId={data.post_id} />
          </IconContainer>
          <IconContainer onClick={() => setCommentsOpen(!commentsOpen)}>
     <CommentsInfo commentsNumber={commentsNumber} /> 
          </IconContainer>
          <IconContainer>
            <Repost postId={data.post_id} />
          </IconContainer>
        </LeftContainer>

        <RightContainer>
          <UpperContent>
            <UserName onClick={() => navigate(`/user/${data.user_id}`)}>{data.user}</UserName>
            {userAuth.userId === data.user_id && (
              <PostIcons>
                <PostIcon onClick={toggleEditing}>
                  <BsPencil />
                </PostIcon>
                <PostIcon onClick={openModal} updateData={updateData}>
                  <FaTrash />
                </PostIcon>
              </PostIcons>
            )}
          </UpperContent>
          <PostDescription
            data={data}
            editState={{
              isEditing: isEditing,
              setEditing: setEditing,
            }}
          />
          <Snippet snippetData={snippetData} />
        </RightContainer>
      </PostContainer>

    <Comments data={data} commentsOpen={commentsOpen} setCommentsNumber={setCommentsNumber}/> 
    </Container>
  );
}
