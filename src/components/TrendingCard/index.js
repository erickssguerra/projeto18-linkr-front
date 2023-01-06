import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../services";
import * as Styles from "./style";

export default function TrendingCard() {
  const [hashtagArray, setHashtagArray] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    api
      .get("/hashtags")
      .then((res) => {
        setHashtagArray(res.data);
      })
      .catch((err) => {
        alert("Ocorreu um erro ao carregar os trendings, por favor recarregue a página");
      });
  }, []);

  return (
    <Styles.card>
      <h1>trending</h1>
      <Styles.lineDiv />
      <Styles.list>
        {hashtagArray.map((hashtagInfo, index) => {
          return (
            <li key={index} onClick={() => navigate(`/hashtag/${hashtagInfo.name}`)}>
              {hashtagInfo.hashtag}
            </li>
          );
        })}
      </Styles.list>
    </Styles.card>
  );
}
