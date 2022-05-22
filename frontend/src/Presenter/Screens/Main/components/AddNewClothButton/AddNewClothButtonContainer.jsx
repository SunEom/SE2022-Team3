import React, { useState } from "react";
import AddNewClothButtonPresenter from "./AddNewClothButtonPresenter";

const AddNewClothButtonContainer = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return <AddNewClothButtonPresenter open={open} handleOpen={handleOpen} handleClose={handleClose} />;
};

export default AddNewClothButtonContainer;
