import {
  PostContainer,
  PostsContainer,
  Message,
  RightContainer,
  UserImg,
  LeftContainer,
  LikesContainer,
  UserName,
  Description
} from "./style";
import PublishCard from "../../components/PublishCard";
import Snippet from "../Snippet";
import Like from "../Like";

function Post({ data }) {
  const snippetData = {
    title: data.metadata.title,
    description: data.metadata.description,
    url: data.url,
    icon: data.metadata.icon
  };

  return (
    <PostContainer>
      <LeftContainer>
        <UserImg src={data.userImage} />
        <LikesContainer>
          <Like likes={data.likes} />
        </LikesContainer>
      </LeftContainer>
      <RightContainer>
      <UserName>
          {data.user}
        </UserName>
        <Description>
          {data.description}
        </Description>
        <Snippet snippetData={snippetData} />
      </RightContainer>
    </PostContainer>
  );
};


export default function Posts({ data, isLoading }) {
  const resolvedData = data;

  if (isLoading) {
    return (
      <Message>
        Loading...
      </Message>
    )
  }

  if (!data) {
    return (
      <Message>
        An error ocurred while trying to fetch the posts, please refresh the page
      </Message>
    );
  }
  if (data.length === 0) {
    return (
      <Message>
        There are no posts yet :(
      </Message>
    );
  }
    
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