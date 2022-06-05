import React, { useEffect, useState } from "react";
import PostingPresenter from "./PostingPresenter";

const PostingContainer = ({cloth}) => {
  const [title, setTitle] = useState();
  const [genre, setGenre] = React.useState('tip');
  const [postBody, setPostBody] = useState();
  const [mode, setMode] = useState("edit");

  const Genres = [
    {
      value: "tip",
      label: "의상 관리 꿀팁",
    },
    {
      value: "fashion",
      label: "나만의 패션 코디",
    },
  ];

  const onToggleButtonClick = () => {
    if (mode === "edit") {
      setMode("show");
    }
  };
  
  const onChange = (e) => {
    switch(e.target.name){
      case "title":
        setTitle(e.target.value);
        break;

      case "genre":
        setGenre(e.target.value);
        break;
      
      case "postBody":
        setPostBody(e.target.value);
        break;
    }
  };

  const onCancelBntClick = () => {
    if(cloth){
      const confirm = window.confirm("게시글 수정을 취소하시겠습니까?")
      if(confirm){
        onToggleButtonClick();
      }
    }
    else{
      const confirm = window.confirm("게시글 작성을 취소하시겠습니까?")
      if(confirm){
        window.history.back();
      }
    }
  }

  useEffect(()=>{
    if(cloth){ //edit
      setTitle(cloth.title);
      setGenre(cloth.genre);
      setPostBody(cloth.post_body);
    }
    else{ //new
    }
  },[])

  return <PostingPresenter
    title={title}
    genre={genre}
    postBody={postBody}
    onToggleButtonClick={onToggleButtonClick}
    onCancelBntClick={onCancelBntClick}
    onChange={onChange}
    Genres={Genres}
    mode={mode}
  />;
};

export default PostingContainer;
