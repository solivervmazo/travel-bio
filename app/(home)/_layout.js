import React, { useRef } from "react";
import { StyleSheet, View, SafeAreaView, ImageBackground } from "react-native";
import { Slot, Stack } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";
import { appColor, appStyles } from "../../src/themes";
import HomeScreenTitle from "../../src/components/HomeScreenTitle";

const ScreenLayout = () => {
  return (
    <SafeAreaView style={appStyles.screenContainer}>
      <Stack.Screen />
      <View style={styles.screenCoverContainer}>
        <ImageBackground
          source={require("../../assets/hotel.jpg")}
          resizeMode="cover"
          style={styles.screenCoverWrapper}
        >
          <LinearGradient
            colors={["transparent", appColor.darkBackground]}
            style={styles.screenTitleContainer}
          >
            <View style={styles.screenTitleWrapper}>
              <HomeScreenTitle />
            </View>
          </LinearGradient>
        </ImageBackground>
      </View>
      <Slot />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screenCoverContainer: { height: "40%" },
  screenCoverWrapper: {
    flex: 1,
    justifyContent: "flex-end",
  },
  screenTitleContainer: {
    height: "30%",
    alignItems: "center",
  },
  screenTitleWrapper: {
    width: "100%",
    position: "absolute",
    bottom: 0,
  },
});

export default ScreenLayout;
