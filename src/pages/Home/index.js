import { Suspense } from "react";
import { Await, useAsyncValue, defer, useLoaderData } from "react-router-dom";

import Header from "../../components/Header";
import Post from "../../components/Post";
import PostsSkeleton from "../../components/PostsSkeleton";
import PublishCard from "../../components/PublishCard";
import { api } from "../../services";
import {
  Title,
  Container,
  MainContent,
  PublishDialog,
  PostsContainer
} from './style';

export async function loader() {
  const res = await api.get("http://localhost:4000/timeline");
  
  return defer({
    postsData: res.data
  });
};

function Posts() {
  const resolvedData = useAsyncValue();

  return (
    <>
      <PublishCard />
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
    </>
    
  );
};

export default function HomePage() {
  const { postsData } = useLoaderData();

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
            resolve={postsData}
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
