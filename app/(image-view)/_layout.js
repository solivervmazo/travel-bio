import React, { useState } from "react";
import { ImageViewScreen } from "../../src/screens";
import { ContextImageView } from "../../src/components/image-view";
const DATA = {
  id: 1,
  category: "hotel",
  productName: "The Marco Polo",
};
const ScreenLayout = () => {
  const [product, setProduct] = useState(DATA);
  return (
    <ContextImageView.Provider value={{ product }}>
      <ImageViewScreen />
    </ContextImageView.Provider>
  );
};

export default ScreenLayout;
