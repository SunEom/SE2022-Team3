import React, { useEffect, useState } from "react";
import PostingPresenter from "./PostingPresenter";

const PostingContainer = () => {
  const [idx, setIdx] = useState(0); // 현재 선택한 탭의 인덱스 - 0: 내가 쓴 글보기, 1: 좋아요 누른 글 보기
  const [postings, setPostings] = useState([]);

  const handleTabChange = (event, newValue) => {
    setIdx(newValue);
  };

  const rows = [
    { id: 1, title: "나만 알고 있는 옷 보관 꿀팁1", comments: 10, nickname: "suneom" },
    { id: 2, title: "나만 알고 있는 옷 보관 꿀팁2", comments: 7, nickname: "qkrco" },
    { id: 3, title: "나만 알고 있는 옷 보관 꿀팁3", comments: 15, nickname: "mihee" },
    { id: 4, title: "나만 알고 있는 옷 보관 꿀팁4", comments: 20, nickname: "ashrain" },
    { id: 5, title: "나만 알고 있는 옷 보관 꿀팁5", comments: 11, nickname: "kimcw" },
    { id: 6, title: "나만 알고 있는 옷 보관 꿀팁6", comments: 10, nickname: "suneom" },
    { id: 7, title: "나만 알고 있는 옷 보관 꿀팁7", comments: 7, nickname: "qkrco" },
    { id: 8, title: "나만 알고 있는 옷 보관 꿀팁8", comments: 15, nickname: "mihee" },
    { id: 9, title: "나만 알고 있는 옷 보관 꿀팁9", comments: 20, nickname: "ashrain" },
    { id: 10, title: "나만 알고 있는 옷 보관 꿀팁10", comments: 11, nickname: "kimcw" },
    { id: 11, title: "나만 알고 있는 옷 보관 꿀팁11", comments: 10, nickname: "suneom" },
    { id: 12, title: "나만 알고 있는 옷 보관 꿀팁12", comments: 7, nickname: "qkrco" },
    { id: 13, title: "나만 알고 있는 옷 보관 꿀팁13", comments: 15, nickname: "mihee" },
    { id: 14, title: "나만 알고 있는 옷 보관 꿀팁14", comments: 20, nickname: "ashrain" },
    { id: 15, title: "나만 알고 있는 옷 보관 꿀팁15", comments: 11, nickname: "kimcw" },
    { id: 16, title: "나만 알고 있는 옷 보관 꿀팁16", comments: 10, nickname: "suneom" },
    { id: 17, title: "나만 알고 있는 옷 보관 꿀팁17", comments: 7, nickname: "qkrco" },
    { id: 18, title: "나만 알고 있는 옷 보관 꿀팁18", comments: 15, nickname: "mihee" },
    { id: 19, title: "나만 알고 있는 옷 보관 꿀팁19", comments: 20, nickname: "ashrain" },
    { id: 20, title: "나만 알고 있는 옷 보관 꿀팁20", comments: 11, nickname: "kimcw" },
    { id: 21, title: "나만 알고 있는 옷 보관 꿀팁21", comments: 10, nickname: "suneom" },
    { id: 22, title: "나만 알고 있는 옷 보관 꿀팁22", comments: 7, nickname: "qkrco" },
    { id: 23, title: "나만 알고 있는 옷 보관 꿀팁23", comments: 15, nickname: "mihee" },
    { id: 24, title: "나만 알고 있는 옷 보관 꿀팁24", comments: 20, nickname: "ashrain" },
    { id: 25, title: "나만 알고 있는 옷 보관 꿀팁25", comments: 11, nickname: "kimcw" },
    { id: 26, title: "나만 알고 있는 옷 보관 꿀팁26", comments: 10, nickname: "suneom" },
    { id: 27, title: "나만 알고 있는 옷 보관 꿀팁27", comments: 7, nickname: "qkrco" },
    { id: 28, title: "나만 알고 있는 옷 보관 꿀팁28", comments: 15, nickname: "mihee" },
    { id: 29, title: "나만 알고 있는 옷 보관 꿀팁29", comments: 20, nickname: "ashrain" },
    { id: 30, title: "나만 알고 있는 옷 보관 꿀팁30", comments: 11, nickname: "kimcw" },
    { id: 31, title: "나만 알고 있는 옷 보관 꿀팁31", comments: 10, nickname: "suneom" },
    { id: 32, title: "나만 알고 있는 옷 보관 꿀팁32", comments: 7, nickname: "qkrco" },
    { id: 33, title: "나만 알고 있는 옷 보관 꿀팁33", comments: 15, nickname: "mihee" },
    { id: 34, title: "나만 알고 있는 옷 보관 꿀팁34", comments: 20, nickname: "ashrain" },
    { id: 35, title: "나만 알고 있는 옷 보관 꿀팁35", comments: 11, nickname: "kimcw" },
    { id: 36, title: "나만 알고 있는 옷 보관 꿀팁36", comments: 10, nickname: "suneom" },
    { id: 37, title: "나만 알고 있는 옷 보관 꿀팁37", comments: 7, nickname: "qkrco" },
    { id: 38, title: "나만 알고 있는 옷 보관 꿀팁38", comments: 15, nickname: "mihee" },
    { id: 39, title: "나만 알고 있는 옷 보관 꿀팁39", comments: 20, nickname: "ashrain" },
    { id: 40, title: "나만 알고 있는 옷 보관 꿀팁40", comments: 11, nickname: "kimcw" },
  ];

  const rows2 = [
    { id: 1, title: "이렇게 입어보면 어떨까요1", comments: 10, nickname: "suneom" },
    { id: 2, title: "이렇게 입어보면 어떨까요2", comments: 7, nickname: "qkrco" },
    { id: 3, title: "이렇게 입어보면 어떨까요3", comments: 15, nickname: "mihee" },
    { id: 4, title: "이렇게 입어보면 어떨까요4", comments: 20, nickname: "ashrain" },
    { id: 5, title: "이렇게 입어보면 어떨까요5", comments: 11, nickname: "kimcw" },
    { id: 6, title: "이렇게 입어보면 어떨까요6", comments: 10, nickname: "suneom" },
    { id: 7, title: "이렇게 입어보면 어떨까요7", comments: 7, nickname: "qkrco" },
    { id: 8, title: "이렇게 입어보면 어떨까요8", comments: 15, nickname: "mihee" },
    { id: 9, title: "이렇게 입어보면 어떨까요9", comments: 20, nickname: "ashrain" },
    { id: 10, title: "이렇게 입어보면 어떨까요10", comments: 11, nickname: "kimcw" },
    { id: 11, title: "이렇게 입어보면 어떨까요11", comments: 10, nickname: "suneom" },
    { id: 12, title: "이렇게 입어보면 어떨까요12", comments: 7, nickname: "qkrco" },
    { id: 13, title: "이렇게 입어보면 어떨까요13", comments: 15, nickname: "mihee" },
    { id: 14, title: "이렇게 입어보면 어떨까요14", comments: 20, nickname: "ashrain" },
    { id: 15, title: "이렇게 입어보면 어떨까요15", comments: 11, nickname: "kimcw" },
    { id: 16, title: "이렇게 입어보면 어떨까요16", comments: 10, nickname: "suneom" },
    { id: 17, title: "이렇게 입어보면 어떨까요17", comments: 7, nickname: "qkrco" },
    { id: 18, title: "이렇게 입어보면 어떨까요18", comments: 15, nickname: "mihee" },
    { id: 19, title: "이렇게 입어보면 어떨까요19", comments: 20, nickname: "ashrain" },
    { id: 20, title: "이렇게 입어보면 어떨까요20", comments: 11, nickname: "kimcw" },
    { id: 21, title: "이렇게 입어보면 어떨까요21", comments: 10, nickname: "suneom" },
    { id: 22, title: "이렇게 입어보면 어떨까요22", comments: 7, nickname: "qkrco" },
    { id: 23, title: "이렇게 입어보면 어떨까요23", comments: 15, nickname: "mihee" },
    { id: 24, title: "이렇게 입어보면 어떨까요24", comments: 20, nickname: "ashrain" },
    { id: 25, title: "이렇게 입어보면 어떨까요25", comments: 11, nickname: "kimcw" },
    { id: 26, title: "이렇게 입어보면 어떨까요26", comments: 10, nickname: "suneom" },
    { id: 27, title: "이렇게 입어보면 어떨까요27", comments: 7, nickname: "qkrco" },
    { id: 28, title: "이렇게 입어보면 어떨까요28", comments: 15, nickname: "mihee" },
    { id: 29, title: "이렇게 입어보면 어떨까요29", comments: 20, nickname: "ashrain" },
    { id: 30, title: "이렇게 입어보면 어떨까요30", comments: 11, nickname: "kimcw" },
    { id: 31, title: "이렇게 입어보면 어떨까요31", comments: 10, nickname: "suneom" },
    { id: 32, title: "이렇게 입어보면 어떨까요32", comments: 7, nickname: "qkrco" },
    { id: 33, title: "이렇게 입어보면 어떨까요33", comments: 15, nickname: "mihee" },
    { id: 34, title: "이렇게 입어보면 어떨까요34", comments: 20, nickname: "ashrain" },
    { id: 35, title: "이렇게 입어보면 어떨까요35", comments: 11, nickname: "kimcw" },
    { id: 36, title: "이렇게 입어보면 어떨까요36", comments: 10, nickname: "suneom" },
    { id: 37, title: "이렇게 입어보면 어떨까요37", comments: 7, nickname: "qkrco" },
    { id: 38, title: "이렇게 입어보면 어떨까요38", comments: 15, nickname: "mihee" },
    { id: 39, title: "이렇게 입어보면 어떨까요39", comments: 20, nickname: "ashrain" },
    { id: 40, title: "이렇게 입어보면 어떨까요40", comments: 11, nickname: "kimcw" },
  ];

  const fetchPostings = async () => {
    if (idx === 0) {
      setPostings([...rows, ...rows2].filter((r) => r.nickname === "suneom"));
    } else {
      setPostings([...rows, ...rows2].filter((r) => r.nickname === "ashrain"));
    }
  };

  useEffect(() => {
    fetchPostings();
  }, [idx]);

  return <PostingPresenter idx={idx} handleTabChange={handleTabChange} postings={postings} />;
};

export default PostingContainer;
