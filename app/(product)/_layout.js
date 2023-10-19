import React, { useCallback, useRef, useState } from "react";
import { Animated } from "react-native";
import { ContextScreenProduct } from "../../src/components/product";
import { ProductDetailScreen } from "../../src/screens";

const ScreenLayout = () => {
  const bottomSheetRef = useRef();
  const scrollOffsetY = useRef(new Animated.Value(0)).current;
  const [scrollStartHide, setScrollStartHide] = useState(true);

  const bottomSheetHandle = useCallback(() => {
    bottomSheetRef.current?.present();
  }, [bottomSheetRef]);

  const scrollListener = useCallback(
    Animated.event([{ nativeEvent: { contentOffset: { y: scrollOffsetY } } }], {
      useNativeDriver: false,
      listener: (event) => {
        if (event.nativeEvent.contentOffset.y > 90) {
          setScrollStartHide(false);
        } else {
          setScrollStartHide(true);
        }
      },
    }),
    [scrollStartHide]
  );

  return (
    <ContextScreenProduct.Provider
      value={{
        bottomSheetRef,
        bottomSheetHandle,
      }}
    >
      <ProductDetailScreen
        scrollOffsetY={scrollOffsetY}
        scrollStartHide={scrollStartHide}
        scrollListener={scrollListener}
      />
    </ContextScreenProduct.Provider>
  );
};

export default ScreenLayout;
