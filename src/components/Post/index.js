import { BsPencil } from 'react-icons/bs';
import { FaTrash } from "react-icons/fa";
import { useState } from "react";
import { useAuth } from "../../providers";

import {
  PostContainer,
  PostIcons,
  UpperContent,
  RightContainer,
  UserImg,
  LeftContainer,
  LikesContainer,
  UserName,
  DeleteIcon
} from "./style";
import Snippet from "../Snippet";
import Like from "../Like";
import PostDescription from '../PostDescription';
import { ModalComponent } from "../Modal";
import { api } from "../../services";
import { AlertModalComponent } from "../AlertModal";


export default function Post({ data }) {
  console.log(data);
  const [isEditing, setEditing] = useState(0);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [alertModalIsOpen, setAlertIsOpen] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const { userAuth } = useAuth();
  const snippetData = {
    title: data.metadata.title,
    description: data.metadata.description,
    url: data.url,
    icon: data.metadata.icon
  };

  function openModal() {
    setIsOpen(true);
  };

  const toggleEditing = () => {
    setEditing(!isEditing);
  };

  function deletePost() {
    api
      .delete(`/timeline/${data.post_id}`, {
        headers: {
          Authorization: `Bearer ${userAuth.token}`,
        },
      })
      .then((response) => {
        setIsOpen(false);
      })
      .catch((error) => {
        setIsOpen(false);
        setAlertMessage(error.response.data);
        setAlertIsOpen(true);
      });
  };

  return (
    <PostContainer>
      <ModalComponent
        title="Are you sure you want to delete this post?"
        close="No, go back"
        confirm="Yes, delete it"
        modalIsOpen={modalIsOpen}
        setIsOpen={setIsOpen}
        deletePost={deletePost}
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
          <Like likes={data.likes} />
        </LikesContainer>
      </LeftContainer>
      <RightContainer>
        <UpperContent>
          <UserName>
            {data.user}
          </UserName>
          <PostIcons>
            <BsPencil
              onClick={toggleEditing}
            />
            {userAuth.userId === data.user_id && (
              <DeleteIcon onClick={openModal}>
                <FaTrash />
              </DeleteIcon>
            )}
          </PostIcons>
        </UpperContent>
        <PostDescription
          data={data}
          state={{
            isEditing: isEditing,
            setEditing: setEditing
          }}
        />
        <Snippet snippetData={snippetData} />
      </RightContainer>
    </PostContainer>
  );
};