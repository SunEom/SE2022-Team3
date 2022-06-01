import React from "react";
import CommentItemPresenter from "./CommentItemPresenter";

const CommentItemContainer = ({ comment }) => {
  return <CommentItemPresenter comment={comment} />;
};

export default CommentItemContainer;
