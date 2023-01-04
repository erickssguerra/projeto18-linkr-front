import { useState } from "react";
import * as Styles from "./style";

export default function PublishCard() {
  const [post, setPost] = useState({
    url: "",
    description: "",
  });

  function getDescriptionHashtags(description) {
    const splittedText = description.split(/\s+/);
    console.log(splittedText);
    const hashtags = splittedText.filter((word) => word[0] === "#");
    console.log(hashtags);
    return hashtags;
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(post);

    const hashtags = getDescriptionHashtags(post.description);
    console.log(hashtags);

    setPost({
      url: "",
      description: "",
    });
  }

  return (
    <Styles.card>
      <Styles.pictureDiv>
        <Styles.picture
          src="https://a.pinatafarm.com/312x296/ae7f8ccd22/sad-thumbs-up-cat.jpg/m/522x0"
          alt="Profile Picture"
        />
      </Styles.pictureDiv>
      <Styles.textDiv>
        <Styles.cardTitle>What are you going to share today?</Styles.cardTitle>
        <form onSubmit={handleSubmit}>
          <Styles.urlInput
            placeholder="http://..."
            type="url"
            onChange={(e) => setPost({ ...post, url: e.target.value })}
            value={post.url}
            required
          />
          <Styles.descriptionTextarea
            placeholder="Awesome article about #javascript"
            onChange={(e) => setPost({ ...post, description: e.target.value })}
            value={post.description}
          />
          <Styles.publishButton type="submit">Publish</Styles.publishButton>
        </form>
      </Styles.textDiv>
    </Styles.card>
  );
}
