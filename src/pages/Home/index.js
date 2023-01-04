import { Suspense, useEffect, useState } from "react";
import { Await, useAsyncValue } from "react-router-dom";

import Header from "../../components/Header";
import Post from "../../components/Post";
import PostsSkeleton from "../../components/PostsSkeleton";
import { api } from "../../services";
import {
  Title,
  Container,
  MainContent,
  PublishDialog,
  PostsContainer
} from './style';

function Posts() {
  const resolvedData = useAsyncValue();

  return (
    <PostsContainer>
      {
        resolvedData.map((data, index) => {
          return (
            <Post
              data={data}
              key={index}
            />
          )
        })
      }
    </PostsContainer>
  );
};

export default function HomePage() {
  const [postData, setPostData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await api.get("http://localhost:4001/timeline");
      setPostData(res.data);
    }

    fetchData();
  }, []);

  return (
    <Container>
      <Header />
      <Title>
        timeline
      </Title>
      <MainContent>
        <PublishDialog>

        </PublishDialog>
        <Suspense fallback={<PostsSkeleton />}>
          <Await
            resolve={postData}
            errorElement={
              <div>An error occurred while trying to fetch the posts, please refresh the page</div>
            }
          >
            <Posts />
          </Await>
        </Suspense>
      </MainContent>
    </Container>
  );
}
