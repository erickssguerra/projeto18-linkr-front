import { useEffect, useState } from "react";
import {
  useNavigate
} from "react-router-dom";

import Header from "../../components/Header";
import PostsList from "../../components/PostsList";
import PublishCard from "../../components/PublishCard";
import { api } from "../../services";
import {
  Title,
  Container,
  MainContent
} from './style';
import { useAuth } from "../../providers";

export default function HomePage() {
  const [postsData, setPostsData] = useState(undefined);
  const [isLoading, setLoading] = useState(0);
  const { userAuth, setUserAuth } = useAuth();
  const [postPublished, setPostPublished] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (!userAuth)
      return navigate('/');

    async function fetchData() {
      setLoading(1);

      try {
        const res = await api.get('/timeline', {
          headers: { Authorization: `Bearer ${userAuth.token}` }
        });

        setPostsData(res.data);
        setLoading(0);
      } catch (e) {
        setUserAuth(undefined);
        setLoading(0);

        return navigate('/');
      };
    };

    fetchData();
  }, [userAuth, navigate, setUserAuth, setLoading, postPublished]);

  if (!userAuth)
    return;

  return (
    <Container>
      <Header />
      <Title>
        timeline
      </Title>
      <PublishCard postPublished={postPublished} setPostPublished={setPostPublished}/>
      <MainContent>
        <PostsList
          data={postsData}
          isLoading={isLoading}
        />
      </MainContent>
    </Container>
  );
}
