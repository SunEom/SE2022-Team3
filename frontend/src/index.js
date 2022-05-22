import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Main from "./Presenter/Screens/Main";
import Login from "./Presenter/Screens/Login";
import Header from "./Presenter/Components/Header";
import Join from "./Presenter/Screens/Join";
import MyPage from "./Presenter/Screens/MyPage";
import Board from "./Presenter/Screens/Board";
import PostDetail from "./Presenter/Screens/PostDetail";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
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
  </React.StrictMode>
);
