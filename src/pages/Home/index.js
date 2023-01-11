import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import Header from "../../components/Header";
import PostsList from "../../components/PostsList";
import PublishCard from "../../components/PublishCard";
import { api } from "../../services";
import {
  Title,
  Container,
  MainContent,
  PageContent,
  PublishAndPostsDiv,
  TrendingDiv,
} from "./style";
import { useAuth, useUpdate } from "../../providers";
import TrendingCard from "../../components/TrendingCard";

export default function HomePage() {
  const [postsData, setPostsData] = useState(undefined);
  const [usersFollowedData, setUsersFollowedData] = useState(undefined);
  const [isLoading, setLoading] = useState(0);
  const { userAuth, setUserAuth } = useAuth();
  const { update } = useUpdate();
  const [postPublished, setPostPublished] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (!userAuth) return navigate("/");

    async function fetchData() {
      setLoading(1);

      try {
        await usersFollowed();

        const res = await api.get("/timeline", {
          headers: { Authorization: `Bearer ${userAuth.token}` },
        });

        setPostsData(res.data);
        setLoading(0);
      } catch (e) {
        setUserAuth(undefined);
        setLoading(0);

        return navigate("/");
      }
    }

    fetchData();
  }, [userAuth, navigate, setUserAuth, setLoading, postPublished, update]);

  async function usersFollowed() {
    try {
      const res = await api.get("/followers", {
        headers: { Authorization: `Bearer ${userAuth.token}` },
      });

      setUsersFollowedData(res.data);
    } catch (error) {
      alert(error);
      return navigate("/");
    }
  }

  async function updateData() {
    try {
      const res = await api.get("/timeline", {
        headers: { Authorization: `Bearer ${userAuth.token}` },
      });

      setPostsData(res.data);
    } catch (error) {
      alert(error);
      return navigate("/");
    }
  }

  if (!userAuth) return;

  return (
    <Container>
      <Header />
      <Title>timeline</Title>
      <PageContent>
        <PublishAndPostsDiv>
          <PublishCard
            postPublished={postPublished}
            setPostPublished={setPostPublished}
          />
          <MainContent>
            <PostsList
              data={postsData}
              isLoading={isLoading}
              updateData={updateData}
              usersFollowedData={usersFollowedData}
            />
          </MainContent>
        </PublishAndPostsDiv>

        <TrendingDiv>
          <TrendingCard postPublished={postPublished} />
        </TrendingDiv>
      </PageContent>
    </Container>
  );
}
