import React, { useCallback, useRef, useState } from "react";
import { Animated } from "react-native";
import { ContextScreenHome } from "../../src/components/home";
import { HomeScreen } from "../../src/screens";
import { useRouter } from "expo-router";
import { useRoutes } from "../../src/routes";

const ScreenLayout = () => {
  const routes = useRoutes();
  const bottomSheetRef = useRef();
  const router = useRouter();
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

  const handleSearchClick = () => {
    routes.explore().go();
  };

  return (
    <ContextScreenHome.Provider
      value={{
        bottomSheetRef,
        bottomSheetHandle,
        handleSearchClick,
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
