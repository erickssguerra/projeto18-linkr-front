import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import Header from "../../components/Header";
import { api } from "../../services";
import * as Style from "./style";
import { useAuth, useUpdate } from "../../providers";
import PostsList from "../../components/PostsList";
import TrendingCard from "../../components/TrendingCard";

export default function UserPage() {
  const [postsData, setPostsData] = useState(undefined);
  const [isLoading, setLoading] = useState(0);
  const { userAuth, setUserAuth } = useAuth();
  const { update } = useUpdate();
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    if (!userAuth) setLoading(1);

    if (userAuth) {
      async function fetchData() {
        setLoading(1);

        try {
          const res = await api.get(`/user/${id}`, {
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
  }, [userAuth, navigate, setUserAuth, setLoading, update]);

  async function updateData() {
    try {
      const res = await api.get(`/user/${id}`, {
        headers: { Authorization: `Bearer ${userAuth.token}` },
      });

      setPostsData(res.data);
    } catch (error) {
      alert(error);
      return navigate(`/user/${id}`);
    }
  }

  if (!userAuth || !postsData) return;

  return (
    <Style.Container>
      <Header />
      <Style.UserInfos>
        <Style.UserImg src={postsData.user.picture_url} />
        <Style.Title>{postsData.user.name}'s posts</Style.Title>
      </Style.UserInfos>
      <Style.PageContent>
        <Style.MainContent>
          <PostsList
            data={postsData.formattedData}
            isLoading={isLoading}
            updateData={updateData}
          />
        </Style.MainContent>
        <Style.TrendingDiv>
          <TrendingCard />
        </Style.TrendingDiv>
      </Style.PageContent>
    </Style.Container>
  );
}
