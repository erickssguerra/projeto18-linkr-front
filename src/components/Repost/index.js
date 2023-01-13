import * as Icon from "../../assets/Icons";
import * as S from "./style";
import { useAuth } from "../../providers";
import { api, config } from "../../services";
import { useState, useEffect } from "react";
import { ModalComponent } from "../Modal";
import { AlertModalComponent } from "../AlertModal";

export default function Repost({ postId }) {
  const { userAuth } = useAuth();
  const [reposts, setReposts] = useState([]);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [alertModalIsOpen, setAlertIsOpen] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    api
      .get(`/repost/${postId}`, config(userAuth.token))
      .then((res) => {
        setReposts(res.data);
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  }, []);

  function openModal() {
    setIsOpen(true);
  }

  function repostPost() {
    setLoading(true);
    api
      .post(`/repost/${postId}`, {}, config(userAuth.token))
      .then((res) => {
        setLoading(false);
        setIsOpen(false);
        setReposts(res.data);
      })
      .catch((err) => {
        setLoading(false);
        setIsOpen(false);
        setAlertMessage(err.response.data);
        setAlertIsOpen(true);
      });
  }
  return (
    <S.Container>
      <ModalComponent
        title="Do you want to repost this link?"
        close="No, cancel"
        confirm="Yes, share!"
        modalIsOpen={modalIsOpen}
        setIsOpen={setIsOpen}
        propsFunction={repostPost}
        loading={loading}
      />
      <AlertModalComponent
        title="Action could not be completed!"
        subtitle={alertMessage}
        alertModalIsOpen={alertModalIsOpen}
        setAlertIsOpen={setAlertIsOpen}
      />
      <S.IconContainer onClick={openModal}>
        <Icon.Repost />
      </S.IconContainer>
      <S.RepostCount>{reposts.length} re-posts</S.RepostCount>
    </S.Container>
  );
}
