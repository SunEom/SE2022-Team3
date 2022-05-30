import React, { useState, useEffect } from "react";
import PostingPresenter from "./PostingPresenter";
import store from "../../../store";
import { useNavigate } from "react-router-dom";

const PostingContainer = () => {

    return (
      <PostingPresenter />
    );
};

export default PostingContainer;
