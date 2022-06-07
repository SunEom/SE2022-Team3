import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchComments, requestNewComment } from "../../../../../httpRequest";
import CommentsListPresenter from "./CommentsListPresenter";

const CommentsListContainer = (comment) => {
  const params = useParams();
  const [commentList, setCommentList] = useState([]);
  const [page, setPage] = useState(1);
  const [maxPage, setMaxPage] = useState(1);
  const [nowCommentList, setNowCommentList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [commentBody, setCommentBody] = useState("");

  // 댓글 작성 onChange 함수
  const onChange = (e) => {
    setCommentBody(e.target.value);
  };

  const onPageChange = (e, page) => {
    setPage(+page);
  };

  const refreshCommentList = () => {
    fetchComments({ post_id: params.post_id }).then((response) => {
      setCommentList(response.data);
      setNowCommentList(response.data.slice((page - 1) * 5, page * 5));
      setMaxPage(Math.ceil(response.data.length / 5));
      setLoading(false);
    });
  };

  const onNewCommentButtonClick = () => {
    if (!commentBody) {
      return window.alert("댓글의 내용을 입력해주세요!");
    }
    requestNewComment({ post_id: params.post_id, comment_body: commentBody }).then((response) => {
      setCommentList(response.data);
      setNowCommentList(response.data.slice((page - 1) * 5, page * 5));
      setMaxPage(Math.ceil(response.data.length / 5));
    });
    setCommentBody("");
  };

  useEffect(() => {
    refreshCommentList();
  }, [page]);

  return (
    <CommentsListPresenter
      commentList={nowCommentList}
      comment={comment}
      loading={loading}
      commentBody={commentBody}
      onChange={onChange}
      page={page}
      setMaxPage={setMaxPage}
      maxPage={maxPage}
      onPageChage={onPageChange}
      onNewCommentButtonClick={onNewCommentButtonClick}
      refreshCommentList={refreshCommentList}
    />
  );
};

export default CommentsListContainer;
