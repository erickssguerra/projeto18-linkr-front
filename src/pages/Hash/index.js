import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  useNavigate
} from "react-router-dom";

import Header from "../../components/Header";
import { api } from "../../services";
import * as Style from "./style";
import { useAuth } from "../../providers";
import PostsList from "../../components/PostsList";

export default function HashPage() {
  const [postsData, setPostsData] = useState(undefined);
  const [isLoading, setLoading] = useState(0);
  const { userAuth, setUserAuth } = useAuth();
  const navigate = useNavigate();
  const { hashtag } = useParams();

  useEffect(() => {
    if (!userAuth)
      fetchData();

    async function fetchData() {
      setLoading(1);

      try {

        const res = await api.get(`/hashtag/${hashtag}`);

        setPostsData(res.data);
        setLoading(0);
      } catch (e) {
        setUserAuth(undefined);
        setLoading(0);

        return navigate('/timeline');
      };
    };

    fetchData();
  }, [userAuth, navigate, setUserAuth, setLoading]);

  if (!userAuth)
    return;

  return (
    <Style.Container>
      <Header />
      <Style.Title>
        # {hashtag}
      </Style.Title>
      <Style.MainContent>
        <PostsList
          data={postsData}
          isLoading={isLoading}
        />
      </Style.MainContent>
    </Style.Container>
  );
}

