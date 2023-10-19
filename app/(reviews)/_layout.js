import React, { useState } from "react";
import { ReviewFeedScreen } from "../../src/screens";
import { ContextReviewsScreen } from "../../src/components/reviews";

const DATA = {
  id: 1,
  category: "hotel",
  productName: "The Marco Polo",
};
const ScreenLayout = () => {
  const [data, setData] = useState(DATA);
  return (
    <ContextReviewsScreen.Provider value={{ data }}>
      <ReviewFeedScreen />
    </ContextReviewsScreen.Provider>
  );
};

export default ScreenLayout;
