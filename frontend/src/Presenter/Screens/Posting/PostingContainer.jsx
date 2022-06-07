import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { requestNewPosting, requestUpdatePosting } from "../../../httpRequest";
import { accessControl } from "../../../util";
import PostingPresenter from "./PostingPresenter";

const PostingContainer = ({ post, onModeToggleButtonClick }) => {
  const navigate = useNavigate();
  const [title, setTitle] = useState();
  const [genre, setGenre] = React.useState("tip");
  const [postBody, setPostBody] = useState();
  const [imgfile, setImgFile] = useState();

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

  const onChange = (e) => {
    switch (e.target.name) {
      case "title":
        setTitle(e.target.value);
        break;

      case "genre":
        setGenre(e.target.value);
        break;

      case "postBody":
        setPostBody(e.target.value);
        break;

      case "img":
        setImgFile(e.target.files[0]);
        break;

      default:
        break;
    }
  };

  const onCancelBntClick = () => {
    if (post) {
      const confirm = window.confirm("게시글 수정을 취소하시겠습니까?");
      if (confirm) {
        onModeToggleButtonClick();
      }
    } else {
      const confirm = window.confirm("게시글 작성을 취소하시겠습니까?");
      if (confirm) {
        window.history.back();
      }
    }
  };

  const onSaveButtonClick = () => {
    if (!title) {
      window.alert("제목을 입력해주세요");
    }
    if (!genre) {
      window.alert("게시판을 선택해주세요");
    }
    if (!postBody) {
      window.alert("내용을 입력해주세요");
    }

    const formdata = new FormData();
    formdata.append("img", imgfile);

    if (post) {
      formdata.append("updatePostReq", {
        post_id: post.post_id,
        title,
        genre,
        post_body: postBody,
      });

      requestUpdatePosting(formdata).then((response) => {
        console.log(response.data);
        window.alert("정상적으로 수정되었습니다!");
        onModeToggleButtonClick();
      });
    } else {
      formdata.append("createPostReq", {
        title,
        genre,
        post_body: postBody,
      });

      requestNewPosting(formdata).then((response) => {
        console.log(response.data);
        window.alert("정상적으로 추가되었습니다!");
        navigate(`/postDetail/${response.data.post_id}`, { replace: true });
      });
    }
  };

  useEffect(() => {
    accessControl(true);

    if (post) {
      //edit
      setTitle(post.title);
      setGenre(post.genre);
      setPostBody(post.post_body);
    } else {
      //new
    }
  }, []);

  return (
    <PostingPresenter
      title={title}
      genre={genre}
      postBody={postBody}
      onCancelBntClick={onCancelBntClick}
      onChange={onChange}
      Genres={Genres}
      imgfile={imgfile}
      onSaveButtonClick={onSaveButtonClick}
    />
  );
};

export default PostingContainer;
