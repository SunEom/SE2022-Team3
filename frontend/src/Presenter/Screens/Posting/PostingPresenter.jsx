import React from "react";
import { Button, Card, CardActions, CardContent, CardMedia, Typography, TextField, Autocomplete, MenuItem } from "@mui/material";
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
    width: 80ch;
    height: 50ch;
    font-family: "Noto Sans KR", sans-serif;
    font-size: 16px;
    border-color: lightgrey;
`;

const Category = [
    {
      value: 'tip',
      label: '의상 관리 꿀팁',
    },
    {
      value: 'fashion',
      label: '나만의 패션 코디',
    },
];

const Input = styled('input')({
    display: 'none',
  });

const PostingPresenter = () => {
    
    return(
        <PostingBox>
            <div style={{fontSize:"32px", margin: "50px", fontWeight: "600"}}>게시글 작성</div>
            <TitleBox>
                <div style={{fontSize:"21px",}}>제목</div>
                <TextField
                    hiddenLabel
                    sx={{ width: '80ch', margin: '1.2ch 0 1.5ch 0' }}
                    color="success"
                    size= "small"
                    >
                </TextField>
            <div style={{fontSize:"20px",}}>게시판 선택</div>
            <TextField
                select
                hiddenLabel
                sx={{ width: '80ch', margin: '1.2ch 0 1ch 0' }}
                color="success"
                size= "small"
                >
                {Category.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
                ))}
            </TextField>
            <div style={{fontSize:"20px", margin:"1.2ch 0"}}>내용</div>
            <label htmlFor="contained-button-file">
                <Input accept="image/*" id="contained-button-file" multiple type="file" />
                <Button variant="contained" component="span" color="success" size= "small">
                    이미지 업로드
                </Button>
            </label>
            <Contents style={{margin:"1ch 0"}}></Contents>
        </TitleBox>
        <Button 
            variant="contained" 
            color="success" 
            //size="small" 
            sx={{ left:'42ch', margin:'1.5ch 0'}}
            >
            작성
        </Button>
        </PostingBox>
        
    );
};

export default PostingPresenter;