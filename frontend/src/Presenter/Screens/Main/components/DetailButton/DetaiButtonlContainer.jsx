import React from "react";
import DetailButtonPresenter from "./DetailButtonPresenter";

const DetailButtonContainer = ({ cloth }) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return <DetailButtonPresenter open={open} handleOpen={handleOpen} handleClose={handleClose} cloth={cloth} />;
};

export default DetailButtonContainer;
