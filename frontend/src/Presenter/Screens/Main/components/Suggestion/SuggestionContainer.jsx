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
        let ss = response.data.season;
        let ct = response.data.category;

        if (ss === "봄") {
          setRecommendation(` 꽃피는 봄이 왔어요 🌸\n ${ct}을(를) 입고 나들이를 가보는 건 어떨까요?`);
        } else if (ss === "여름") {
          setRecommendation(`푹푹찌는 여름이에요 💦\n ${ct}을(를) 입고 더위를 피해보세요!`);
        } else if (ss === "가을") {
          setRecommendation(`어느새 쌀쌀한 가을이네요 🍂\n 이번 가을에는 ${ct}을(를) 장만해보는건 어떨까요?`);
        } else if (ss === "겨울") {
          setRecommendation(`꽁꽁 얼어버릴거 같은 겨울이 왔어요 ☃️\n ${ct}와(과) 함께 이불 속을 탈출해봐요!`);
        }
        setLoading(false);
      });
    } else if (about === "category") {
      fetchCategoricalRecommnend().then((response) => {
        setRecommendation(
          `${response.data.category} 카테고리가 ${response.data.count}개 밖에 없네요.\n다음에 쇼핑 하실 때 하나 장만해보시는건 어때요? 😁`
        );
        setLoading(false);
      });
    }
  }, []);
  return <SuggestionPresenter open={open} closeHandle={closeHandle} loading={loading} recommendation={recommendation} />;
};

export default SuggestionContainer;
