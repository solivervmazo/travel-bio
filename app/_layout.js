import React, { useCallback, useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";
import { useRouter } from "expo-router";
import IconButton from "../src/components/IconButton";
import HeaderTitle from "../src/components/app/HeaderTitle";
import { appColors, appSizes } from "../src/themes";

// SplashScreen.preventAutoHideAsync();

const AppLayout = () => {
  const [fontsLoaded, fontError] = useFonts({
    "Quicksand-Light": require("../assets/fonts/Quicksand-Light.ttf"),
    "Quicksand-Regular": require("../assets/fonts/Quicksand-Regular.ttf"),
    "Quicksand-Bold": require("../assets/fonts/Quicksand-Bold.ttf"),
    "Quicksand-Medium": require("../assets/fonts/Quicksand-Medium.ttf"),
    "Quicksand-SemiBold": require("../assets/fonts/Quicksand-SemiBold.ttf"),
  });
  const router = useRouter();

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, []);
  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <Stack
      onLayout={onLayoutRootView}
      screenOptions={{
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
        headerTitle: () => <HeaderTitle />,
        headerRight: () => (
          <IconButton
            icon={"Search"}
            size={appSizes.IconButton.medium}
            color={appColors.lightText}
          />
        ),
        headerLeft: () =>
          router.canGoBack() ? (
            <IconButton
              icon={"Back"}
              size={appSizes.IconButton.medium}
              color={appColors.lightText}
              onPress={router.back}
            />
          ) : null,
        headerTransparent: true,
      }}
    />
  );
};

const styles = StyleSheet.create({});
export default AppLayout;
