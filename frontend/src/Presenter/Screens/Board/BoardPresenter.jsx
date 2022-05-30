import { faPenToSquare } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Fab } from "@mui/material";
import React from "react";
import styled from "styled-components";
import BoardTable from "../../Components/BoardTable";

const BoardTopContainer = styled.div`
  min-width: 1200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 60px;
  font-family: "Noto Sans KR", sans-serif;
  position: relative;
`;

const BoardContentContainer = styled.div`
  margin-top: 100px;
`;

const BoardTitle = styled.div`
  margin-bottom: 30px;
  font-size: 25px;
  font-weight: 500;
`;

const AddNewPostingButton = styled(Fab)`
  position: fixed;
  right: 30px;
  bottom: 30px;
`;

const BoardPresenter = ({ rows, category, onAddNewPostingButtonClick }) => {
  return (
    <BoardTopContainer>
      <BoardContentContainer>
        <BoardTitle>{category === "fashion" ? "나만의 패션 코디" : "의상 관리 꿀팁"}</BoardTitle>
        <AddNewPostingButton color="success" sx={{ position: "fixed" }} onClick={onAddNewPostingButtonClick}>
          <FontAwesomeIcon icon={faPenToSquare} size="xl" />
        </AddNewPostingButton>
        <BoardTable postings={rows} />
      </BoardContentContainer>
    </BoardTopContainer>
  );
};

export default BoardPresenter;
