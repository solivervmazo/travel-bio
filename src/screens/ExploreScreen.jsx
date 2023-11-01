import { useHeaderHeight } from "@react-navigation/elements";
import React from "react";
import { SafeAreaView, ScrollView, StyleSheet, View } from "react-native";
import { ExploreHeader } from "../components/explore";
import { appColors, appConstants, appStyles } from "../themes";
import { Slot } from "expo-router";

const ExploreScreen = () => {
  const headerHeight = useHeaderHeight();
  return (
    <SafeAreaView style={appStyles.screenContainer}>
      <ExploreHeader />
      <View
        style={[styles.screenContentContainer, { paddingTop: headerHeight }]}
      >
        <Slot />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screenCoverWrapper: {
    flex: 1,
    justifyContent: "flex-end",
    height: appConstants.COVER_MAX_HEIGHT,
  },
  screenContentContainer: {
    // paddingBottom: appSpacing.screenPaddingBottom,
  },
  screenContentWrapper: {
    flexGrow: 1,
    backgroundColor: appColors.black,
  },
});

export default ExploreScreen;
