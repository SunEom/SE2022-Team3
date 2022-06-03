import React, { useEffect, useState } from "react";
import { fetchMyFavPosting, fetchMyPosting } from "../../../../../httpRequest";
import PostingPresenter from "./PostingPresenter";

const PostingContainer = () => {
  const [idx, setIdx] = useState(0); // 현재 선택한 탭의 인덱스 - 0: 내가 쓴 글보기, 1: 좋아요 누른 글 보기
  const [postings, setPostings] = useState([]);

  const handleTabChange = (event, newValue) => {
    setIdx(newValue);
  };

  useEffect(() => {
    if (idx === 0) {
      fetchMyPosting().then((result) => setPostings(result));
    } else if (idx === 1) {
      fetchMyFavPosting().then((result) => setPostings(result));
    }
  }, [idx]);

  return <PostingPresenter idx={idx} handleTabChange={handleTabChange} postings={postings} />;
};

export default PostingContainer;
