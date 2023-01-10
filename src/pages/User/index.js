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
  const [followData, setFollowData] = useState(undefined);
  const [loadingFollowButton, setLoadingFollowButton] = useState(false);
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

  useEffect(() => {
    if (userAuth) {
      async function fetchData() {
        try {
          const res = await api.get(`/followers/${id}`, {
            headers: { Authorization: `Bearer ${userAuth.token}` },
          });

          setFollowData(res.data);
        } catch (e) {
          alert(e.response.data);
        }
      }

      fetchData();
    }
  }, [userAuth, update]);

  function follow() {
    setLoadingFollowButton(true);

    api
      .post(
        `/followers/${id}`,
        {},
        {
          headers: { Authorization: `Bearer ${userAuth.token}` },
        }
      )
      .then((res) => {
        setFollowData(true);
        setLoadingFollowButton(false);
      })
      .catch((err) => {
        alert(err.response.data.message);
        setLoadingFollowButton(false);
      });
  }

  function unfollow() {
    setLoadingFollowButton(true);

    api
      .delete(`/followers/${id}`, {
        headers: { Authorization: `Bearer ${userAuth.token}` },
      })
      .then((res) => {
        setFollowData(false);
        setLoadingFollowButton(false);
      })
      .catch((err) => {
        alert(err.response.data.message);
        setLoadingFollowButton(false);
      });
  }

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
        <Style.UserInfosContainer>
          <Style.UserImg src={postsData.user.picture_url} />
          <Style.Title>{postsData.user.name}'s posts</Style.Title>
        </Style.UserInfosContainer>
        {userAuth.userId !== parseInt(id) && (
          <Style.FollowContainer>
            {followData === undefined ? (
              <Style.LoadingButton disabled={true}>
                Loading...
              </Style.LoadingButton>
            ) : followData ? (
              <Style.UnfollowButton
                onClick={unfollow}
                disabled={loadingFollowButton}
              >
                Unfollow
              </Style.UnfollowButton>
            ) : (
              <Style.FollowButton
                onClick={follow}
                disabled={loadingFollowButton}
              >
                Follow
              </Style.FollowButton>
            )}
          </Style.FollowContainer>
        )}
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
