import { LinearGradient } from "expo-linear-gradient";
import { Slot } from "expo-router";
import React from "react";
import { ImageBackground, SafeAreaView, StyleSheet, View } from "react-native";
import { appColors, appConstants, appSpacing, appStyles } from "../themes";
import { useHeaderHeight } from "@react-navigation/elements";
import { ImageViewHeader } from "../components/image-view/";
const ImageViewScreen = () => {
  const headerHeight = useHeaderHeight();
  return (
    <SafeAreaView
      style={[appStyles.screenContainer, { backgroundColor: appColors.black }]}
    >
      <ImageViewHeader />
      <View
        style={[styles.screenContentContainer, { paddingTop: headerHeight }]}
      >
        <View style={styles.screenContentWrapper}>
          <Slot />
        </View>
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

export default ImageViewScreen;
