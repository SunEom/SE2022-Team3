import React from "react";
import styled from "styled-components";

const NotFoundBox = styled.div`
  margin-top: 50px;
  min-width: 1000px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: "Noto Sans KR", sans-serif;
  gap: 15px;
`;

const NotFoundPresenter = () => {
  return (
    <NotFoundBox>
      <div style={{ fontSize: 20, fontWeight: 600 }}>404 Not Found</div>
      <div styled={{ fontSize: 18, fontWeight: 500 }}>요청하신 페이지를 찾을 수 없습니다.</div>
    </NotFoundBox>
  );
};

export default NotFoundPresenter;
