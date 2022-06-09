import React, { useEffect, useState } from "react";
import ClothItemPresenter from "./ClothItemPresenter";

const ClothItemContainer = ({ cloth }) => {
  const [name, setName] = useState(cloth.name);
  const [brand, setBrand] = useState(cloth.brand);
  const [fileName, setFileName] = useState(cloth.file_name);
  const [favorite, setFavorite] = useState(cloth.favorite);
  const clothProps = { name, brand, fileName, favorite };

  const configurePresentData = (cloth) => {
    setName(cloth.name);
    setBrand(cloth.brand);
    setFileName(cloth.file_name);
    setFavorite(cloth.favorite);
  };

  useEffect(() => {
    configurePresentData(cloth);
  }, [cloth]);

  return <ClothItemPresenter cloth={cloth} presentedData={clothProps} configurePresentData={configurePresentData} />;
};

export default ClothItemContainer;
