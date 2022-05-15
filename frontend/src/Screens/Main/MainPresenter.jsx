import React from "react";

const MainPresenter = ({ user }) => {
  return <div className="App">Hello {user?.nickname}</div>;
};

export default MainPresenter;
