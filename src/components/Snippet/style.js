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
text-decoration: none;
justify-content: space-between;

:hover {
  background: rgba(50, 50, 50, 0.3);
}

&:visited {
  color: #FFF;
}
`;

export const SnippetText = styled.div`
  width: 50%;
  text-decoration: none;
`;

export const SnippetImg = styled.img`
height: 100%;
width: 10rem;
`;

export const SnippetTitle = styled.h2`
  font-size: 16px;
  font-family: 'Lato', sans-serif;
  color: #CECECE;
  font-weight: 400;
`;

export const SnippetDescription = styled.p`
  font-size: 11px;
  color: #9B9595;
  font-family: 'Lato', sans-serif;
`;

export const SnippetUrl = styled.p`
  font-size: 11px;
  color: #CECECE;
`;