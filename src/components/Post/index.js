import { BsPencil } from 'react-icons/bs';
import { useState } from 'react';

import {
  PostContainer,
  PostIcons,
  UpperContent,
  RightContainer,
  UserImg,
  LeftContainer,
  LikesContainer,
  UserName,
} from "./style";
import Snippet from "../Snippet";
import Like from "../Like";
import PostDescription from '../PostDescription';

export default function Post({ data }) {
  console.log(data);
  const [isEditing, setEditing] = useState(0);
  const snippetData = {
    title: data.metadata.title,
    description: data.metadata.description,
    url: data.url,
    icon: data.metadata.icon
  };
  
  const toggleEditing = () => {
    setEditing(!isEditing);
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
        <UpperContent>
          <UserName>
            {data.user}
          </UserName>
          <PostIcons>
            <BsPencil
             onClick={toggleEditing}
            />
          </PostIcons>
        </UpperContent>
        <PostDescription
          data={data}
          state={{
            isEditing: isEditing,
            setEditing: setEditing
          }}
         />
        <Snippet snippetData={snippetData} />
      </RightContainer>
    </PostContainer>
  );
};