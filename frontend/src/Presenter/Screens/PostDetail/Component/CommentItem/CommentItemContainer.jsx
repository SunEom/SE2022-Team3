import React, { useState } from "react";
import { requestDeleteComment, requestUpdateComment } from "../../../../../httpRequest";
import CommentItemPresenter from "./CommentItemPresenter";

const CommentItemContainer = ({ comment, refreshCommentList }) => {
  const [mode, setMode] = useState("show"); // show : 댓글 조회, edit : 댓글 수정
  const [contents, setContents] = useState(comment.comment_body);

  const onChange = (e) => {
    e.preventDefault();
    setContents(e.target.value);
  };

  const onModeToggleButtonClick = () => {
    if (mode === "show") {
      setMode("edit");
    } else if (mode === "edit") {
      setMode("show");
      setContents(comment.comment_body);
    }
  };

  const onDeleteButtonClick = () => {
    let answer = window.confirm("정말로 삭제하시겠습니까?");

    if (answer) {
      requestDeleteComment({ comment_id: comment.comment_id }).then(() => {
        refreshCommentList();
      });
    }
  };

  const onEditButtonClick = () => {
    if (!contents.trim()) {
      return window.alert("댓글의 내용을 입력해주세요!");
    }
    requestUpdateComment({ comment_id: comment.comment_id, comment_body: contents }).then((response) => {
      setMode("show");
      refreshCommentList();
    });
  };

  return (
    <CommentItemPresenter
      comment={comment}
      mode={mode}
      onModeToggleButtonClick={onModeToggleButtonClick}
      onChange={onChange}
      contents={contents}
      onDeleteButtonClick={onDeleteButtonClick}
      onEditButtonClick={onEditButtonClick}
    />
  );
};

export default CommentItemContainer;
