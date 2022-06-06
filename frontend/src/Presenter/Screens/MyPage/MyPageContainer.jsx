import React, { useEffect } from "react";
import { accessControl } from "../../../util";
import MyPagePresenter from "./MyPagePresenter";

const MyPageContainer = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  function a11yProps(index) {
    return {
      id: `vertical-tab-${index}`,
      "aria-controls": `vertical-tabpanel-${index}`,
    };
  }

  useEffect(() => {
    accessControl(true);
  });

  return <MyPagePresenter value={value} handleChange={handleChange} a11yProps={a11yProps} />;
};

export default MyPageContainer;
