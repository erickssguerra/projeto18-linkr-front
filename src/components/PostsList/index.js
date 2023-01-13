import Post from "../Post";
import {
  PostsContainer,
  Message,
  MessageContainer,
  LoadingSpinner,
} from "./style";
import { loadingPosts } from "../../assets/Spinners";

export default function PostsList({
  data,
  isLoading,
  updateData,
  usersFollowedData,
}) {
  const resolvedData = data;

  if (isLoading) {
    return (
      <MessageContainer>
        <Message>Loading</Message>
        <LoadingSpinner>{loadingPosts}</LoadingSpinner>
      </MessageContainer>
    );
  }

  if (!data) {
    return (
      <MessageContainer>
        An error ocurred while trying to fetch the posts, please refresh the
        page
      </MessageContainer>
    );
  }

  if (data.length === 0 && !usersFollowedData) {
    return <MessageContainer>There are no posts yet :(</MessageContainer>;
  }

  if (data.length === 0 && usersFollowedData.length === 0) {
    return <MessageContainer>You don't follow anyone yet. Search for new friends!</MessageContainer>;
  }

  if (data.length === 0 && usersFollowedData.length > 0) {
    return <MessageContainer>No posts found from your friends</MessageContainer>;
  }

  return (
    <PostsContainer>
      {resolvedData.map((data) => {
        return <Post data={data} key={data.created_at} updateData={updateData} />;
      })}
    </PostsContainer>

  );
}
