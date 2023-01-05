import { Suspense } from "react";
import { Await, useAsyncValue, defer, useLoaderData } from "react-router-dom";

import { useParams } from "react-router-dom";
import Header from "../../components/Header";
import Post from "../../components/Post";
import PostsSkeleton from "../../components/PostsSkeleton";
import PublishCard from "../../components/PublishCard";
import { api } from "../../services";
import { PostsContainer } from "../Home/style";
import * as Style from "./style";

export async function loader(hashtag) {
  const res = await api.get(`/hashtag/${hashtag.params.hashtag}`);
  
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

export default function HashPage() {
  const { hashtag } = useParams();

  const { postsData } = useLoaderData(hashtag);

  return (
    <>
      <Header />
      <Style.Container>
        <Style.Title># {hashtag}</Style.Title>
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
      </Style.Container>
    </>
  );
}
