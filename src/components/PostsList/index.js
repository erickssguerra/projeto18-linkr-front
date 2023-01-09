import Post from "../Post";
import { PostsContainer, Message, MessageContainer, LoadingSpinner } from "./style";
import { loadingPosts } from "../../assets/Spinners";

export default function PostsList({ data, isLoading, updateData }) {
  const resolvedData = data;

  if (isLoading) {
    return (
      <MessageContainer>
        <Message>
          Loading
        </Message>
        <LoadingSpinner>{loadingPosts}</LoadingSpinner>
      </MessageContainer>
    );
  };

  if (!data) {
    return (
      <MessageContainer>
        An error ocurred while trying to fetch the posts, please refresh the
        page
      </MessageContainer>
    );
  }
  if (data.length === 0) {
    return <MessageContainer>There are no posts yet :(</MessageContainer>;
  }

  return (
    <>
      <PostsContainer>
        {resolvedData.map((data, index) => {
          return <Post data={data} key={index} updateData={updateData} />;
        })}
      </PostsContainer>
    </>
  );
}
