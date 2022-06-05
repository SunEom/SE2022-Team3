import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import BoardTablePresenter from "./BoardTablePresenter";

const BoardTableContainer = ({ category, postings }) => {
  const navigate = useNavigate();

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const columns = [
    { id: "id", label: "번호", width: 50, align: "center" },
    { id: "title", label: "제목", width: 600 },
    { id: "comments", label: "댓글 수", width: 100, align: "center" },
    {
      id: "nickname",
      label: "작성자",
      width: 100,
      align: "right",
    },
  ];

  const onPostItemClick = (post) => (e) => {
    navigate(`/postDetail/${post.id}`);
  };

  // 카테고리 변경시 첫 번째 페이지로 이동
  useEffect(() => {
    setPage(0);
  }, [category]);

  return (
    <BoardTablePresenter
      page={page}
      rowsPerPage={rowsPerPage}
      onPostItemClick={onPostItemClick}
      columns={columns}
      rows={postings}
      handleChangePage={handleChangePage}
      handleChangeRowsPerPage={handleChangeRowsPerPage}
    />
  );
};

export default BoardTableContainer;
