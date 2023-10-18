import React from "react";
import { StyleSheet, View, Animated, ImageBackground } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { appConstants } from "../../themes";
import { IconButton } from "../../components";
import ProductScreenTitle from "./ProductScreenTitle";

const coverMaxHeight = appConstants.COVER_MAX_HEIGHT;
const coverMinHeight = appConstants.COVER_MIN_HEIGHT;
const scrollDistance = coverMaxHeight - coverMinHeight;

const ProductCover = ({ offset, showButton }) => {
  const animateCoverHeight = offset.interpolate({
    inputRange: [0, scrollDistance],
    outputRange: [coverMaxHeight, coverMinHeight],
    extrapolate: "clamp",
  });

  const animateButtonOpacity = offset.interpolate({
    inputRange: [0, scrollDistance / 2, scrollDistance],
    outputRange: [1, 0.8, 0],
    extrapolate: "clamp",
  });

  return (
    <Animated.View
      style={[styles.screenCoverContainer, { height: animateCoverHeight }]}
    >
      <ImageBackground
        source={require("../../../assets/hotel.jpg")}
        resizeMode="cover"
        style={styles.screenCoverWrapper}
      >
        {showButton ? (
          <Animated.View
            style={{
              flexDirection: "column",
              alignItems: "flex-end",
              opacity: animateButtonOpacity,
              paddingHorizontal: appSpacing.screenPaddingLeft,
            }}
          >
            <IconButton icon={"Share"} size={28} color={"lightText"} />
            <View style={{ height: 10 }} />
            <IconButton icon={"Place"} size={28} color={"lightText"} />
          </Animated.View>
        ) : null}
        <LinearGradient
          colors={[
            "transparent",
            "transparent",
            appColor.darkBackground,
            appColor.darkBackground,
            appColor.darkBackground,
          ]}
          style={styles.screenTitleContainer}
        >
          <View style={styles.screenTitleWrapper}>
            <ProductScreenTitle />
          </View>
        </LinearGradient>
      </ImageBackground>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  screenCoverContainer: {},
  screenCoverWrapper: {
    flex: 1,
    justifyContent: "flex-end",
  },
  screenTitleContainer: {
    minHeight: "40%",
    alignItems: "center",
  },
  screenTitleWrapper: {
    width: "100%",
    position: "absolute",
    bottom: 0,
  },
});

export default ProductCover;
