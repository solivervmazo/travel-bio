import React, { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";
import { appStyles, appSpacing, appConstants, appColors } from "../../themes";
import ContextImageView from "./ContextImageView";
import { Image, ImageBackground } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { useDimensions } from "../../hooks";
import { useHeaderHeight } from "@react-navigation/elements";
import Constants from "expo-constants";
const ImageViewContent = () => {
  const headerHeight = useHeaderHeight();
  const statusBarHeight = Constants.statusBarHeight;
  const [dimensions] = useDimensions();
  const params = useLocalSearchParams();
  const { uri } = params;
  const imgContainerHeight =
    (dimensions.height - headerHeight - statusBarHeight) * 0.8;
  console.log(imgContainerHeight, headerHeight, statusBarHeight);

  return (
    <View style={[styles.contentContainer]}>
      <ImageBackground
        source={{ uri: uri }}
        style={{
          height: imgContainerHeight,
          width: "100%",
          backgroundColor: appColors.darkBgSecondary,
        }}
        resizeMethod="resize"
        resizeMode="center"
      ></ImageBackground>
    </View>
  );
};
const styles = StyleSheet.create({
  contentContainer: {
    paddingBottom: appSpacing.screenPaddingBottom,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    height: "100%",
  },
});

export default ImageViewContent;
