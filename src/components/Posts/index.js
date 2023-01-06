import { ReactTagify } from "react-tagify";
import { useNavigate } from "react-router-dom";

import {
  PostContainer,
  PostsContainer,
  Message,
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
import { AlertModalComponent } from "../AlertModal";

function Post({ data }) {
  const navigate = useNavigate();
  const snippetData = {
    title: data.metadata.title,
    description: data.metadata.description,
    url: data.url,
    icon: data.metadata.icon,
  };
  const [modalIsOpen, setIsOpen] = useState(false);
  const [alertModalIsOpen, setAlertIsOpen] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
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
        <UserName>{data.user}</UserName>
        <ReactTagify
          colors="white"
          tagClicked={(tag) => {
            navigate(`/hashtag/${tag.replace("#", "")}`);
          }}
        >
          <Description>{data.description}</Description>
        </ReactTagify>
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

export default function Posts({ data, isLoading }) {
  const resolvedData = data;

  if (isLoading) {
    return <Message>Loading...</Message>;
  }

  if (!data) {
    return (
      <Message>
        An error ocurred while trying to fetch the posts, please refresh the
        page
      </Message>
    );
  }
  if (data.length === 0) {
    return <Message>There are no posts yet :(</Message>;
  }

  return (
    <PostsContainer>
      {resolvedData.map((data, index) => {
        return <Post data={data} key={index} />;
      })}
    </PostsContainer>
  );
}
