import { ImageBackground, SafeAreaView, StyleSheet, View } from "react-native";
import React from "react";
import { appColor, appConstants, appStyles } from "../themes";
import { ScrollView } from "react-native-gesture-handler";
import { Slot } from "expo-router";
import { ReviewsHeader } from "../components/reviews";
import { LinearGradient } from "expo-linear-gradient";
import { useHeaderHeight } from "@react-navigation/elements";

const ReviewFeedScreen = () => {
  const headerHeight = useHeaderHeight();
  return (
    <SafeAreaView style={appStyles.screenContainer}>
      <ReviewsHeader />
      <ImageBackground
        source={require("../../assets/hotel.jpg")}
        resizeMode="cover"
        style={styles.screenCoverWrapper}
      />
      <View style={styles.screenContentContainer}>
        <LinearGradient
          colors={["transparent", appColor.darkBackground]}
          style={{ height: headerHeight }}
        />
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
    position: "absolute",
    width: "100%",
    height: "100%",
    bottom: 0,
    paddingBottom: 100,
  },
  screenContentWrapper: {
    flexGrow: 1,
    backgroundColor: appColor.darkBackground,
  },
});

export default ReviewFeedScreen;
