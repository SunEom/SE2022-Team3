import React, { useEffect, useState } from "react";
import { fetchUserData } from "../../httpRequest";
import { loginDispatch } from "../../reduxAccess";
import RouterPresenter from "./RouterPresenter";

const RouterContainer = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchUserData().then((r) => {
      loginDispatch(r);
      setLoading(false);
    });
  }, []);

  return <RouterPresenter loading={loading} />;
};

export default RouterContainer;
