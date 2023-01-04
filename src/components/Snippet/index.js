import {
  SnippetContainer,
  SnippetText,
  SnippetTitle,
  SnippetDescription,
  SnippetImg,
  SnippetUrl
} from './style';

export default function Snippet({ snippetData }) {

  return (
    <SnippetContainer href={snippetData.url} target='_blank'>
      <SnippetText>
        <SnippetTitle>
          {snippetData.title}
        </SnippetTitle>
        <SnippetDescription>
          {snippetData.description}
        </SnippetDescription>
        <SnippetUrl>
          {snippetData.url}
        </SnippetUrl>
      </SnippetText>
      <SnippetImg src={snippetData.icon} />
    </SnippetContainer>
  );
};