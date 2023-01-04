import styled from "styled-components";

export const SnippetContainer = styled.a`
display: flex;
flex-direction: row;
border-radius: 1rem;
border: 0.1rem solid #4D4D4D;
overflow: hidden;
overflow-wrap: break-word;
width: 28rem;
height: 10rem;
`;

export const SnippetText = styled.div`
  width: 50%;
`;

export const SnippetImg = styled.img`
height: 100%;
width: 10rem;
`;

export const SnippetTitle = styled.h2`
  font-size: 2rem;
`;

export const SnippetDescription = styled.p`
  font-size: 1rem;
`;

export const SnippetUrl = styled.p`
  font-size: 1rem;
`;