import Post from "../Post";
import { PostsContainer, Message } from "./style";

export default function PostsList({ data, isLoading }) {
  const resolvedData = data;

  if (isLoading) {
    return <Message>Loading...</Message>;
  }

  if (!data) {
    return (
      <Message>
        An error ocurred while trying to fetch the posts, please refresh the
        page
      </Message>
    );
  }
  if (data.length === 0) {
    return <Message>There are no posts yet :(</Message>;
  }

  return (
    <>
      <PostsContainer>
        {resolvedData.map((data, index) => {
          return <Post data={data} key={index} />;
        })}
      </PostsContainer>
    </>
  );
}
