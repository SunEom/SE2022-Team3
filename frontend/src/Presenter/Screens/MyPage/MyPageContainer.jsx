import React from "react";
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
  return <MyPagePresenter value={value} handleChange={handleChange} a11yProps={a11yProps} />;
};

export default MyPageContainer;
