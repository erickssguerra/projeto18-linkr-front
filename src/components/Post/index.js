import {
  PostContainer,
  RightContainer,
  UserImg,
  LeftContainer,
  LikesContainer,
  UserName,
  Description
} from "./style";
import Snippet from "../Snippet";
import Like from "../Like";

export default function Post({ data }) {
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