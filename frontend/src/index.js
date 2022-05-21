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
import NewCloth from "./Presenter/Screens/NewCloth";

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
        <Route path="/board" element={<Board />}></Route>
        <Route path="/newCloth" element={<NewCloth />}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
