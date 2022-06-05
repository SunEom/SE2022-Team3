import React, { useState } from "react";
import CommentItemPresenter from "./CommentItemPresenter";

const CommentItemContainer = ({ comment }) => {
  const [mode, setMode] = useState("show"); // show : 댓글 조회, edit : 댓글 수정
  const [contents, setContents] = useState(comment?.body);
  const onChange = (e) => {
    e.preventDefault();
    setContents(e.target.value);
  };

  const onModeToggleButtonClick = () => {
    if (mode === "show") {
      setMode("edit");
    } else if (mode === "edit") {
      setMode("show");
      setContents(comment?.body);
    }
  };

  return (
    <CommentItemPresenter
      comment={comment}
      mode={mode}
      onModeToggleButtonClick={onModeToggleButtonClick}
      onChange={onChange}
      contents={contents}
    />
  );
};

export default CommentItemContainer;
