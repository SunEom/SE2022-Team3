import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { fetchPostings } from "../../../httpRequest";
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
    fetchPostings(params.category).then((r) => {
      setPostings(r);
      setLoading(false);
    });
  }, [params.category]);

  useEffect(() => {
    fetchPostings(params.category).then((r) => {
      setPostings(r);
      setLoading(false);
    });
  }, []);

  return <BoardPresenter loading={loading} rows={postings} category={category} onAddNewPostingButtonClick={onAddNewPostingButtonClick} />;
};

export default BoardContainer;
