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
import { useAuth } from "../../providers";
import TrendingCard from "../../components/TrendingCard";

export default function HomePage() {
  const [postsData, setPostsData] = useState(undefined);
  const [isLoading, setLoading] = useState(0);
  const { userAuth, setUserAuth, update } = useAuth();
  const [postPublished, setPostPublished] = useState(false);
  const [postDeleted, setPostDeleted] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (!userAuth) return navigate("/");

    async function fetchData() {
      setLoading(1);

      try {
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
  }, [userAuth, navigate, setUserAuth, setLoading, postPublished, postDeleted, update]);

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
              postDeleted={postDeleted}
              setPostDeleted={setPostDeleted}
            />
          </MainContent>
        </PublishAndPostsDiv>

        <TrendingDiv>
          <TrendingCard postPublished={postPublished}/>
        </TrendingDiv>
      </PageContent>
    </Container>
  );
}
