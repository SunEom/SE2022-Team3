import React, { useEffect, useState } from "react";
import { fetchPostDetail } from "../../../httpRequest";
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

  const onModeToggleButtonClick = () => {
    if (mode === "show") {
      setMode("edit");
    } else if (mode === "edit") {
      setMode("show");
    }
  };

  useEffect(() => {
    accessControl(true);

    fetchPostDetail({ post_id: params.post_id }).then((result) => {
      setPostId(result.post_id);
      setTitle(result.title);
      setGenre(result.genre);
      setPostBody(result.post_body);
      setFileName(result.file_name);
      setId(result.id);
      setCreatedDate(result.created_date);
      setUpdatedDate(result.updated_date);
      setNickname(result.nickname);
      setCloth(result);

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
    />
  );
};

export default PostDetailContainer;
