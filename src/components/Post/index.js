import {
  PostContainer,
  RightContainer,
  UserImg,
  LeftContainer,
  LikesContainer,
  UserName,
  Description,
  DeleteIcon,
} from "./style";
import Snippet from "../Snippet";
import Like from "../Like";
import { FaTrash } from "react-icons/fa";
import { ModalComponent } from "../Modal";
import { useState } from "react";
import { useAuth } from "../../providers";
import { api } from "../../services";

export default function Post({ data }) {
  const snippetData = {
    title: data.metadata.title,
    description: data.metadata.description,
    url: data.url,
    icon: data.metadata.icon,
  };
  const [modalIsOpen, setIsOpen] = useState(false);
  const { userAuth } = useAuth();

  function openModal() {
    setIsOpen(true);
  }

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
        alert(error.response.data);
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
      />
      <LeftContainer>
        <UserImg src={data.userImage} />
        <LikesContainer>
          <Like likes={data.likes} />
        </LikesContainer>
      </LeftContainer>
      <RightContainer>
        <UserName>{data.user}</UserName>
        <Description>{data.description}</Description>
        <Snippet snippetData={snippetData} />
      </RightContainer>
      {userAuth.name === data.user && (
        <DeleteIcon onClick={openModal}>
          <FaTrash />
        </DeleteIcon>
      )}
    </PostContainer>
  );
}
