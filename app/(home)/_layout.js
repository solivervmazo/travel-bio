import React, { useCallback, useRef, useState } from "react";
import { Animated } from "react-native";
import { ContextScreenHome } from "../../src/components/home";
import { HomeScreen } from "../../src/screens";

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
        if (event.nativeEvent.contentOffset.y > 120) {
          setScrollStartHide(false);
        } else {
          setScrollStartHide(true);
        }
      },
    }),
    [scrollStartHide]
  );

  return (
    <ContextScreenHome.Provider
      value={{
        bottomSheetRef,
        bottomSheetHandle,
      }}
    >
      <HomeScreen
        scrollOffsetY={scrollOffsetY}
        scrollStartHide={scrollStartHide}
        scrollListener={scrollListener}
      />
    </ContextScreenHome.Provider>
  );
};

export default ScreenLayout;
