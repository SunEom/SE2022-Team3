import React, { useState } from "react";
import SuggestionPresenter from "./SuggestionPresenter";

const SuggestionContainer = () => {
  const [open, setOpen] = useState(true);

  const closeHandle = () => {
    setOpen(false);
  };
  return <SuggestionPresenter open={open} closeHandle={closeHandle} />;
};

export default SuggestionContainer;
