import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Main from "../Screens/Main";
import Login from "../Screens/Login";
import Header from "../Components/Header";
import Join from "../Screens/Join";
import MyPage from "../Screens/MyPage";
import Board from "../Screens/Board";
import PostDetail from "../Screens/PostDetail";

const RouterPresenter = ({ loading }) => {
  return (
    <>
      {!loading && (
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Main />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/join" element={<Join />}></Route>
            <Route path="/mypage" element={<MyPage />}></Route>
            <Route path="/board/:category" element={<Board />}></Route>
            <Route path="/postdetail/:post_id" element={<PostDetail />}></Route>
          </Routes>
        </BrowserRouter>
      )}
    </>
  );
};

export default RouterPresenter;
