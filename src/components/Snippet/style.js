import styled from "styled-components";

export const SnippetContainer = styled.a`
display: flex;
flex-direction: row;
border-radius: 1rem;
border: 0.1rem solid #4D4D4D;
overflow: hidden;
width: 503px;
height: 155px;
text-decoration: none;
justify-content: space-between;

:hover {
  background: rgba(50, 50, 50, 0.3);
}

&:visited {
  color: #FFF;
}

@media (max-width: 768px) {
  height: 115px;
  width: 100%;
}
`;

export const SnippetText = styled.div`
  text-decoration: none;
  padding: 1rem;
  width: 80%;
`;

export const SnippetImg = styled.img`
  height: 100%;
  width: 153px;
  
  @media (max-width: 768px) {
    width: 95px;
  }
`;

export const SnippetTitle = styled.h2`
  font-size: 16px;
  font-family: 'Lato', sans-serif;
  color: #CECECE;
  font-weight: 400;
  margin-bottom: 0.5rem;

  @media (max-width: 768px) {
    font-size: 11px;
  }
`;

export const SnippetDescription = styled.p`
  font-size: 11px;
  color: #9B9595;
  font-family: 'Lato', sans-serif;
  margin-bottom: 0.5rem;

  @media (max-width: 768px) {
    font-size: 9px;
  }
`;

export const SnippetUrl = styled.p`
  font-size: 11px;
  color: #CECECE;

  @media (max-width: 768px) {
    font-size: 9px;
  }
`;