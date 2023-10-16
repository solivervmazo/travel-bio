import React from "react";
import { StyleSheet, Text, View } from "react-native";
import appColor from "../themes/appColor";
import Icon from "../ui/Icon";

const HeaderTitle = () => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.locationWrapper}>
        <Icon.Location size={18} color={appColor.lightText} />
        <Text style={[styles.locationText, styles.shadow]}>Davao City, PH</Text>
      </View>
      <Text style={[styles.messageText, styles.shadow]}>Explore</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: { flex: 1, paddingTop: 20 },
  locationWrapper: { flexDirection: "row", alignItems: "center" },
  locationText: {
    fontSize: 15,
    fontFamily: "Quicksand-Regular",
    color: appColor.lightText,
    paddingStart: 3,
  },
  messageText: {
    fontSize: 25,
    color: appColor.lightText,
    fontFamily: "Quicksand-Bold",
  },
  shadow: {
    textShadowColor: "rgba(0, 0, 0, 0.75)",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 20,
  },
});

export default HeaderTitle;
