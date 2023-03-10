import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../services";
import * as Styles from "./style";
import { loadingTrending } from "../../assets/Spinners";
import { useTrending, useUpdate } from "../../providers";

export default function TrendingCard({ postPublished }) {
  /*   const [hashtagArray, setHashtagArray] = useState([]); */
  const [isLoading, setIsLoading] = useState(false);
  const { update } = useUpdate();
  const { hashtagArray, setHashtagArray } = useTrending();

  const navigate = useNavigate();

  useEffect(() => {
    setIsLoading(true);

    api
      .get("/hashtags")
      .then((res) => {
        setHashtagArray(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        alert(
          "Ocorreu um erro ao carregar os trendings, por favor recarregue a página"
        );
      });
  }, [postPublished, update]);

  return (
    <Styles.card>
      <h1>trending</h1>
      <Styles.lineDiv />
      <Styles.list isLoading={isLoading}>
        {isLoading
          ? loadingTrending
          : hashtagArray.map((hashtagInfo, index) => {
              return (
                <li
                  key={index}
                  onClick={() => navigate(`/hashtag/${hashtagInfo.name}`)}
                >
                  {hashtagInfo.hashtag}
                </li>
              );
            })}
      </Styles.list>
    </Styles.card>
  );
}
