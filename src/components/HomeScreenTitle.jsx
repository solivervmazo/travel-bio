import React from "react";
import { StyleSheet, View } from "react-native";
import BlurButton from "./BlurButton";

const HomeScreenTitle = () => {
  return (
    <View style={styles.categoryWrapper}>
      <BlurButton icon={"Place"} text={"Places"} isActive={true} />
      <BlurButton icon={"Bed"} text={"Hotels"} />
      <BlurButton icon={"Restaurant"} text={"Eats"} />
    </View>
  );
};

const styles = StyleSheet.create({
  categoryWrapper: {
    paddingHorizontal: appSpacing.screenPaddingLeft,
    paddingVertical: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});

export default HomeScreenTitle;
