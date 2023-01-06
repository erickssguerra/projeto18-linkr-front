import { useState } from "react";
import { useAuth } from "../../providers";
import { api } from "../../services";
import * as Styles from "./style";

export default function PublishCard({postPublished, setPostPublished}) {
  const { userAuth } = useAuth();

  const [post, setPost] = useState({
    url: "",
    description: "",
  });

  const [isPublishing, setIsPublishing] = useState(false);

  function getDescriptionHashtags(description) {
    const splittedText = description.split(/\s+/);
    const hashtags = splittedText.filter((word) => word[0] === "#");
    return hashtags;
  }

  function handleSubmit(e) {
    e.preventDefault();

    setIsPublishing(true);

    const hashtags = getDescriptionHashtags(post.description);

    api
      .post("/timeline", {
        url: post.url,
        description: post.description,
        hashtagsArray: hashtags,
      }, {
        headers: {
          Authorization: `Bearer ${userAuth.token}`,
        }
      })
      .then((res) => {
        setPostPublished(!postPublished);
        setIsPublishing(false);
      })
      .catch((err) => {
        alert("Houve um erro ao publicar seu link");
        setIsPublishing(false);
      });

    setPost({
      url: "",
      description: "",
    });
  }

  return (
    <>
      {userAuth && (
        <Styles.card>
          <Styles.pictureDiv>
            <Styles.picture src={userAuth.picture_url} alt="Profile Picture" />
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
                disabled={isPublishing}
              />
              <Styles.descriptionTextarea
                placeholder="Awesome article about #javascript"
                onChange={(e) => setPost({ ...post, description: e.target.value })}
                value={post.description}
                disabled={isPublishing}
              />
              <Styles.publishButton type="submit" disabled={isPublishing}>
                {isPublishing ? "Publishing..." : "Publish"}
              </Styles.publishButton>
            </form>
          </Styles.textDiv>
        </Styles.card>
      )}
    </>
  );
}
