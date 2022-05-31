import React, { useState } from "react";
import PostDetailPresenter from "./PostDetailPresenter";

const PostDetailContainer = () => {
  const [isread, setIsread] = useState(true);
  const [title, setTitle] = useState();
  const [category, setCategory] = useState();
  const [body, setBody] = useState();

  const props = {title, category, body, isread};

  const onEditClick = () => {
    setIsread(!isread);
  };

  const onChange = (e) => {
    switch (e.target.name) {
      case "title":
        setTitle(e.target.value);
        break;

      case "category":
        setCategory(e.target.value);
        break;

      case "body":
        setBody(e.target.value);
        break;
    }
  };
  return <PostDetailPresenter onChange={onChange} onEditClick={onEditClick} {...props}/>;
};

export default PostDetailContainer;
