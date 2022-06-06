import React, { useEffect, useState } from "react";
import { fetchCategoricalRecommnend, fetchSeasonalRecommnend } from "../../../../../httpRequest";
import SuggestionPresenter from "./SuggestionPresenter";

const SuggestionContainer = ({ about }) => {
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState(true);
  const [recommendation, setRecommendation] = useState();
  const closeHandle = () => {
    setOpen(false);
  };

  useEffect(() => {
    if (about === "season") {
      fetchSeasonalRecommnend().then((response) => {
        console.log("season", response.data);

        let ss = response.data.season;
        let ct = response.data.category;

        if (ss === "봄") {
          setRecommendation(` 꽃피는 봄이 왔어요 🌸 ${ct}을(를) 입고 나들이를 가보는 건 어떨까요?`);
        } else if (ss === "여름") {
          setRecommendation(`푹푹찌는 여름이에요 💦 ${ct}을(를) 입고 더위를 피해보세요!`);
        } else if (ss === "가을") {
          setRecommendation(`어느새 쌀쌀한 가을이네요 🍂 이번 가을에는 ${ct}을(를) 장만해보는건 어떨까요?`);
        } else if (ss === "겨울") {
          setRecommendation(`꽁꽁 얼어버릴거 같은 겨울이 왔어요 ☃️ ${ct}와(과) 함께 이불 속을 탈출해봐요!`);
        }
        setLoading(false);
      });
    } else if (about === "category") {
      fetchCategoricalRecommnend().then((response) => {
        console.log("category", response);
        setLoading(false);
      });
    }
  }, []);
  return <SuggestionPresenter open={open} closeHandle={closeHandle} loading={loading} recommendation={recommendation} />;
};

export default SuggestionContainer;
