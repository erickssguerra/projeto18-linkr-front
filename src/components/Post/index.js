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
  LikesContainer,
  UserName,
  PostIcon,
} from "./style";
import Snippet from "../Snippet";
import Like from "../Like";
import PostDescription from "../PostDescription";
import { ModalComponent } from "../Modal";
import { api } from "../../services";
import { AlertModalComponent } from "../AlertModal";
import { useNavigate } from "react-router-dom";

export default function Post({ data }) {
  const [isEditing, setEditing] = useState(0);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [alertModalIsOpen, setAlertIsOpen] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [loading, setLoading] = useState(false);
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
    <PostContainer>
      <ModalComponent
        title="Are you sure you want to delete this post?"
        close="No, go back"
        confirm="Yes, delete it"
        modalIsOpen={modalIsOpen}
        setIsOpen={setIsOpen}
        deletePost={deletePost}
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
        <LikesContainer>
          <Like likes={data.likes} postId={data.post_id} />
        </LikesContainer>
      </LeftContainer>
      <RightContainer>
        <UpperContent>
          <UserName onClick={() => navigate(`/user/${data.user_id}`)}>{data.user}</UserName>
          {userAuth.userId === data.user_id && (
            <PostIcons>
              <PostIcon onClick={toggleEditing}>
                <BsPencil />
              </PostIcon>
              <PostIcon onClick={openModal}>
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
  );
}
