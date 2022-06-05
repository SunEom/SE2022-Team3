import React, { useEffect, useState } from "react";
import CommentsListPresenter from "./CommentsListPresenter";

const CommentsListContainer = (comment) => {
  const [commentList, setCommentList] = useState([]);

  const fetchComments = async () => {
    //임시 댓글 정보
    let tempCommentList = [
      {
        user: "User2",
        body: "저 이거 구매했는데 착화감 정말 좋습니다. 앤티크골드 색상으로 가세요!",
        uploadDate: "2022.05.21",
        uploadTime: "13:11",
      },
      {
        user: "User3",
        body: "와 정말 예쁘네요!",
        uploadDate: "2022.05.21",
        uploadTime: "13:11",
      },
      {
        user: "User4",
        body: "저는 파랑색 구매했는데 진짜 매일 신습니다",
        uploadDate: "2022.05.21",
        uploadTime: "13:11",
      },
      {
        user: "User5",
        body: "이번에 세일할 때 사려고 봤는데 세일 품목에서 제외되었더라구요ㅠㅠ",
        uploadDate: "2022.05.21",
        uploadTime: "13:11",
      },
      {
        user: "User6",
        body: "오 정말 예쁘네요!",
        uploadDate: "2022.05.21",
        uploadTime: "13:11",
      },
      {
        user: "User7",
        body: "색 조합이 진짜 굿..!",
        uploadDate: "2022.05.21",
        uploadTime: "13:11",
      },
      {
        user: "User8",
        body: "ㅋㅋㅋ 착샷도 올려주세요!",
        uploadDate: "2022.05.21",
        uploadTime: "13:11",
      },
    ];
    setCommentList(tempCommentList);
  };

  useEffect(() => {
    fetchComments();
  }, []);

  return <CommentsListPresenter commentList={commentList} comment={comment} />;
};

export default CommentsListContainer;
