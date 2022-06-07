import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { fetchPostings } from "../../../httpRequest";
import { accessControl } from "../../../util";
import BoardPresenter from "./BoardPresenter";

const BoardContainer = () => {
  const navigate = useNavigate();
  const params = useParams();
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState(params.category);
  const [postings, setPostings] = useState();

  const onAddNewPostingButtonClick = () => {
    navigate("/posting", { replace: false });
  };

  useEffect(() => {
    setCategory(params.category);
    fetchPostings({ genre: params.category }).then((response) => {
      setPostings(response.data);
      setLoading(false);
    });
  }, [params.category]);

  useEffect(() => {
    accessControl(true);
    fetchPostings({ genre: params.category }).then((response) => {
      setPostings(response.data);
      setLoading(false);
    });
  }, []);

  return <BoardPresenter loading={loading} rows={postings} category={category} onAddNewPostingButtonClick={onAddNewPostingButtonClick} />;
};

export default BoardContainer;
