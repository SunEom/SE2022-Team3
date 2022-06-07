import React from "react";
import { Button, TextField, MenuItem } from "@mui/material";
import styled from "styled-components";

const PostingBox = styled.div`
  min-widht: 1200px;
  height: 800px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  //background-color: yellow;
  font-family: "Noto Sans KR", sans-serif;
  padding: 70px;
`;

const TitleBox = styled.div`
  display: flex;
  flex-direction: column;
`;

const Contents = styled.textarea`
  width: 79.5ch;
  height: 50ch;
  font-family: "Noto Sans KR", sans-serif;
  font-size: 16px;
  border-color: lightgrey;
`;

const ImageContainer = styled.div`
  align-items: center;
  display: flex;
`;

const ImageFileName = styled.div`
  margin-left: 10px;
`;

const Input = styled("input")({
  display: "none",
});

const PostingPresenter = ({ title, genre, postBody, onCancelBntClick, onChange, Genres, mode, cloth, imgfile, onSaveButtonClick }) => {
  return (
    <>
      <PostingBox>
        <TitleBox>
          <div style={{ fontSize: "21px" }}>제목</div>
          <TextField
            hiddenLabel
            sx={{ width: "80ch", margin: "1.2ch 0 1.5ch 0" }}
            color="success"
            size="small"
            onChange={onChange}
            value={title}
            name="title"
          ></TextField>
          <div style={{ fontSize: "20px" }}>게시판 선택</div>
          <TextField
            select
            hiddenLabel
            sx={{ width: "80ch", margin: "1.2ch 0 1ch 0" }}
            color="success"
            size="small"
            onChange={onChange}
            value={genre}
            name="genre"
          >
            {Genres.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          <div style={{ fontSize: "20px", margin: "1.2ch 0" }}>내용</div>
          <label htmlFor="contained-button-file">
            <ImageContainer>
              <Input accept="image/*" id="contained-button-file" multiple type="file" onChange={onChange} name="img" />
              <Button variant="contained" component="span" color="success" size="small">
                이미지 업로드
              </Button>
              <ImageFileName>{imgfile?.name}</ImageFileName>
            </ImageContainer>
          </label>
          <Contents style={{ margin: "1ch 0" }} onChange={onChange} value={postBody} name="postBody"></Contents>
        </TitleBox>
        <div>
          <Button
            variant="contained"
            color="success"
            //size="small"
            sx={{ left: "35ch", margin: "1.5ch 0" }}
            onClick={onCancelBntClick}
          >
            취소
          </Button>
          <Button
            variant="contained"
            color="success"
            //size="small"
            sx={{ left: "37.5ch", margin: "1.5ch 0" }}
            onClick={onSaveButtonClick}
          >
            작성
          </Button>
        </div>
      </PostingBox>
    </>
  );
};

export default PostingPresenter;
