import React from "react";
import { StyleSheet, View, Animated, ImageBackground } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { appColors, appConstants } from "../../themes";
import { BlurButton } from "../../ui";

const coverMaxHeight = appConstants.COVER_MAX_HEIGHT;
const coverMinHeight =
  appConstants.COVER_MIN_HEIGHT - appConstants.COVER_MIN_HEIGHT;

const HomeTabs = () => {
  return (
    <View style={styles.tabsWrapper}>
      <BlurButton icon={"Place"} text={"Places"} isActive={true} />
      <BlurButton icon={"Bed"} text={"Hotels"} />
      <BlurButton icon={"Restaurant"} text={"Eats"} />
    </View>
  );
};

const HomeCover = ({ offset, scrollStartHide }) => {
  const animateCoverHeight = offset.interpolate({
    inputRange: [0, 1000],
    outputRange: [coverMaxHeight, coverMinHeight],
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
        <LinearGradient
          colors={["transparent", appColors.darkBackground]}
          style={styles.screenTitleContainer}
        >
          <View style={styles.screenTitleWrapper}>
            <HomeTabs />
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
    minHeight: "20%",
    alignItems: "center",
  },
  screenTitleWrapper: {
    width: "100%",
    position: "absolute",
    bottom: 0,
  },
  tabsWrapper: {
    paddingHorizontal: appSpacing.screenPaddingLeft,
    paddingVertical: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});

export default HomeCover;
