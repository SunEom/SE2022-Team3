import React, { useEffect, useState } from "react";
import { fetchPostDetail, requestChangePostFavState, requestDeletePosting } from "../../../httpRequest";
import PostDetailPresenter from "./PostDetailPresenter";
import { useNavigate, useParams } from "react-router-dom";
import { accessControl } from "../../../util";

const PostDetailContainer = () => {
  let params = useParams();
  let navigate = useNavigate();

  const [mode, setMode] = useState("show"); // show : 조회 화면, edit : 수정 화면
  const [loading, setLoading] = useState(true);
  const [postId, setPostId] = useState(); // 게시글 인덱스
  const [title, setTitle] = useState();
  const [genre, setGenre] = useState();
  const [postBody, setPostBody] = useState();
  const [fileName, setFileName] = useState();
  const [id, setId] = useState(); // 작성자 인덱스
  const [createdDate, setCreatedDate] = useState();
  const [updatedDate, setUpdatedDate] = useState();
  const [nickname, setNickname] = useState();
  const [post, setPost] = useState(); // 게시글 전체 정보
  const [favorite, setFavorite] = useState();
  const [favCount, setFavCount] = useState();

  const onModeToggleButtonClick = () => {
    if (mode === "show") {
      setMode("edit");
    } else if (mode === "edit") {
      setMode("show");
    }
  };

  const onFavButtonClick = () => {
    requestChangePostFavState({ post_id: postId, favorite }).then((response) => {
      setFavorite(response.data.favorite);
      setFavCount(response.data.favorite_count);
    });
  };

  const onDeleteButtonClick = () => {
    let answer = window.confirm("정말로 삭제하시겠습니까?");

    if (answer) {
      requestDeletePosting({ post_id: post.post_id }).then((response) => {
        window.alert("정상적으로 삭제되었습니다!");
        navigate(`/board/${post.genre}`);
      });
    }
  };

  useEffect(() => {
    accessControl(true);

    fetchPostDetail({ post_id: params.post_id }).then((response) => {
      setPostId(response.data.postDto.post_id);
      setTitle(response.data.postDto.title);
      setGenre(response.data.postDto.genre);
      setPostBody(response.data.postDto.post_body);
      setFileName(response.data.postDto.file_name);
      setId(response.data.postDto.id);
      setCreatedDate(response.data.postDto.created_date);
      setUpdatedDate(response.data.postDto.updated_date);
      setNickname(response.data.postDto.nickname);
      setFavCount(response.data.favorite_count);
      setFavorite(response.data.favorite);
      setPost(response.data.postDto);

      setLoading(false);
    });
  }, [mode]);

  return (
    <PostDetailPresenter
      loading={loading}
      postId={postId}
      title={title}
      genre={genre}
      postBody={postBody}
      fileName={fileName}
      id={id}
      createdDate={createdDate}
      updatedDate={updatedDate}
      nickname={nickname}
      post={post}
      mode={mode}
      onModeToggleButtonClick={onModeToggleButtonClick}
      favorite={favorite}
      favCount={favCount}
      onFavButtonClick={onFavButtonClick}
      onDeleteButtonClick={onDeleteButtonClick}
    />
  );
};

export default PostDetailContainer;
