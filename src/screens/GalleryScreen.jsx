import { LinearGradient } from "expo-linear-gradient";
import { Slot } from "expo-router";
import React from "react";
import {
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { appColors, appConstants, appSpacing, appStyles } from "../themes";
import { useHeaderHeight } from "@react-navigation/elements";
import GalleryHeader from "../components/gallery/GalleryHeader";

const GalleryScreen = () => {
  const headerHeight = useHeaderHeight();
  return (
    <SafeAreaView style={appStyles.screenContainer}>
      <GalleryHeader />
      <ImageBackground
        source={require("../../assets/hotel.jpg")}
        resizeMode="cover"
        style={styles.screenCoverWrapper}
      />
      <View style={styles.screenContentContainer}>
        <LinearGradient
          colors={["transparent", appColors.darkBackground]}
          style={{ height: headerHeight }}
        />
        <View style={styles.screenContentWrapper}>{/* <Slot /> */}</View>
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
    paddingBottom:
      appSpacing.screenPaddingBottom + appConstants.FOOTER_AUX_PADDING,
  },
  screenContentWrapper: {
    flexGrow: 1,
    backgroundColor: "grey",
    backgroundColor: appColors.darkBackground,
  },
});

export default GalleryScreen;
