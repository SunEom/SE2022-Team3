import React, { useEffect, useState } from "react";
import { fetchUserData } from "../../httpRequest";
import { getIdToken } from "../../localStorageAccess";
import { loginDispatch } from "../../reduxAccess";
import RouterPresenter from "./RouterPresenter";

const RouterContainer = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (getIdToken()) {
      fetchUserData().then((response) => {
        loginDispatch(response.data);
        setLoading(false);
      });
    } else {
      setLoading(false);
    }
    setLoading(false);
  }, []);

  return <RouterPresenter loading={loading} />;
};

export default RouterContainer;
