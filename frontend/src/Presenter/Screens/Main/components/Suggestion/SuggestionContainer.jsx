import React, { useEffect, useState } from "react";
import { fetchCategoricalRecommnend, fetchSeasonalRecommnend } from "../../../../../httpRequest";
import SuggestionPresenter from "./SuggestionPresenter";

const SuggestionContainer = ({ about }) => {
  const [open, setOpen] = useState(true);

  const closeHandle = () => {
    setOpen(false);
  };

  useEffect(() => {
    if (about === "season") {
      fetchSeasonalRecommnend().then((response) => {
        console.log("season", response.data);
      });
    } else if (about === "category") {
      fetchCategoricalRecommnend().then((response) => {
        console.log("category", response.data);
      });
    }
  }, []);
  return <SuggestionPresenter open={open} closeHandle={closeHandle} />;
};

export default SuggestionContainer;
