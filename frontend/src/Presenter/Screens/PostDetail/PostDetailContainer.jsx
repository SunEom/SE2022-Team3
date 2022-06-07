import React, { useEffect, useState } from "react";
import { fetchPostDetail, requestChangePostFavState } from "../../../httpRequest";
import PostDetailPresenter from "./PostDetailPresenter";
import { useParams } from "react-router-dom";
import { accessControl } from "../../../util";

const PostDetailContainer = () => {
  let params = useParams();

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
  const [cloth, setCloth] = useState(); // 의상 전체 정보
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
      setFavCount((current) => {
        return response.data.favorite === 1 ? current + 1 : current - 1;
      });
    });
  };

  useEffect(() => {
    accessControl(true);

    fetchPostDetail({ post_id: params.post_id }).then((response) => {
      setPostId(response.data.post_id);
      setTitle(response.data.title);
      setGenre(response.data.genre);
      setPostBody(response.data.post_body);
      setFileName(response.data.file_name);
      setId(response.data.id);
      setCreatedDate(response.data.created_date);
      setUpdatedDate(response.data.updated_date);
      setNickname(response.data.nickname);
      setFavCount(response.data.favorite_count);
      setFavorite(response.data.favorite);
      setCloth(response.data);

      setLoading(false);
    });
  }, []);

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
      cloth={cloth}
      mode={mode}
      onModeToggleButtonClick={onModeToggleButtonClick}
      favorite={favorite}
      favCount={favCount}
      onFavButtonClick={onFavButtonClick}
    />
  );
};

export default PostDetailContainer;
