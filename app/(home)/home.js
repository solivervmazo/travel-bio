import React from "react";
import { StyleSheet } from "react-native";
import { appSpacing } from "../../src/themes";
import { HomeContent } from "../../src/components/home";

const WelcomeIndex = () => {
  return <HomeContent />;
};

const styles = StyleSheet.create({
  sectionContainer: {
    flex: 1,
    paddingHorizontal: appSpacing.screenPaddingLeft,
  },
  sectionWrapper: {
    flexShrink: 1,
    paddingVertical: 10,
  },
});

export default WelcomeIndex;
