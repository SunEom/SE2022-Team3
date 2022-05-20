import React, { useState } from "react";
import DetailModalPresenter from "./DetailModalPresenter";

const DetailModalContainer = ({ open, handleClose, cloth }) => {
  const [name, setName] = useState(cloth.name);
  const [season, setSeason] = useState(cloth.season);
  const [size, setSize] = useState(cloth.size);
  const [brand, setBrand] = useState(cloth.brand);
  const [fileName, setFileName] = useState(cloth.file_name);
  const [type, setType] = useState(cloth.type);
  const [place, setPlace] = useState(cloth.place);
  const [clothBody, setClothBody] = useState(cloth.cloth_body);
  const [favorite, setFavorite] = useState(cloth.favorite);

  return (
    <DetailModalPresenter
      open={open}
      handleClose={handleClose}
      cloth={cloth}
      name={name}
      season={season}
      brand={brand}
      fileName={fileName}
      type={type}
      place={place}
      clothBody={clothBody}
      favorite={favorite}
      size={size}
    />
  );
};

export default DetailModalContainer;
