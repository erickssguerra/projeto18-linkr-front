import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useInterval from 'use-interval';
import { BiRefresh } from 'react-icons/bi';

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
  NewPostsAlert,
  NewPostsText,
  NewPostsIcon
} from "./style";
import { useAuth, useUpdate } from "../../providers";
import TrendingCard from "../../components/TrendingCard";
import { getNewPosts, loadNewPosts } from "../../utils/getNewPosts";

export default function HomePage() {
  const [postsData, setPostsData] = useState([]);
  const [newPosts, setNewPosts] = useState([]);
  const [usersFollowedData, setUsersFollowedData] = useState(undefined);
  const [isLoading, setLoading] = useState(0);
  const [postPublished, setPostPublished] = useState(false);
  const { userAuth, setUserAuth } = useAuth();
  const { update } = useUpdate();
  const navigate = useNavigate();

  const getNewPostsDependencies = {
    setUserAuth: setUserAuth,
    postsData: postsData,
    setNewPosts: setNewPosts,
    userAuth: userAuth
  };
  const getNewPostsFunctions = {
    navigate: navigate,
    usersFollowed: usersFollowed
  };
  const loadNewPostsDependencies = {
    setNewPosts: setNewPosts,
    setPostsData: setPostsData,
    newPosts: newPosts,
    postsData: postsData
  };

  useEffect(() => {
    if (!userAuth) return navigate("/");
    setNewPosts([]);

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

  useInterval(() => {
    getNewPosts(getNewPostsDependencies, getNewPostsFunctions);
  }, 15000);

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
            <NewPostsAlert
              active={newPosts.length > 0}
              onClick={() => { loadNewPosts(loadNewPostsDependencies) }}
            >
              <NewPostsText>
                {newPosts.length} new posts, load more!
              </NewPostsText>
              <NewPostsIcon>
                <BiRefresh />
              </NewPostsIcon>
            </NewPostsAlert>
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
