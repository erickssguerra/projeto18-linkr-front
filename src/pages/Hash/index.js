import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import Header from "../../components/Header";
import { api } from "../../services";
import * as Style from "./style";
import { useAuth } from "../../providers";
import PostsList from "../../components/PostsList";
import TrendingCard from "../../components/TrendingCard";

export default function HashPage() {
  const [postsData, setPostsData] = useState(undefined);
  const [isLoading, setLoading] = useState(0);
  const { userAuth, setUserAuth } = useAuth();
  const [postDeleted, setPostDeleted] = useState(false);
  const navigate = useNavigate();
  const { hashtag } = useParams();

  useEffect(() => {
    if (!userAuth) setLoading(1);

    if (userAuth) {
      async function fetchData() {
        setLoading(1);

        try {
          const res = await api.get(`/hashtag/${hashtag}`, {
            headers: { Authorization: `Bearer ${userAuth.token}` },
          });

          setPostsData(res.data);
          setLoading(0);
        } catch (e) {
          setLoading(0);
          return navigate("*");
        }
      }

      fetchData();
    }
  }, [userAuth, navigate, setUserAuth, setLoading, postDeleted]);

  if (!userAuth) return;

  return (
    <Style.Container>
      <Header />
      <Style.Title># {hashtag}</Style.Title>
      <Style.PageContent>
        <Style.MainContent>
          <PostsList
            data={postsData}
            isLoading={isLoading}
            postDeleted={postDeleted}
            setPostDeleted={setPostDeleted}
          />
        </Style.MainContent>
        <Style.TrendingDiv>
          <TrendingCard />
        </Style.TrendingDiv>
      </Style.PageContent>
    </Style.Container>
  );
}
