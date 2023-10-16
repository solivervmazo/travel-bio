import React, { useCallback, useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";
import { useRouter } from "expo-router";
import IconButton from "../src/components/IconButton";
import HeaderTitle from "../src/components/HeaderTitle";

SplashScreen.preventAutoHideAsync();

const AppLayout = () => {
  const [fontsLoaded, fontError] = useFonts({
    "Quicksand-Light": require("../assets/fonts/Quicksand-Light.ttf"),
    "Quicksand-Regular": require("../assets/fonts/Quicksand-Regular.ttf"),
    "Quicksand-Bold": require("../assets/fonts/Quicksand-Bold.ttf"),
  });
  const router = useRouter();

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

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
          <IconButton icon={"Search"} size={32} color={"lightText"} />
        ),
        headerLeft: () =>
          router.canGoBack() ? (
            <IconButton icon={"Back"} size={32} color={"lightText"} />
          ) : null,
        headerTransparent: true,
      }}
    />
  );
};

const styles = StyleSheet.create({});
export default AppLayout;
