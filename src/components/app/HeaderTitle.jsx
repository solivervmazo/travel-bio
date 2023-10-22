import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { appColors, appSizes, appSpacing, appStyles } from "../../themes/";
import { Icon } from "../../ui/";
import appFonts from "../../themes/appFonts";

const HeaderTitle = () => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.locationWrapper}>
        <Icon.Location
          size={appSizes.Icon.regular}
          color={appColors.lightText}
        />
        <Text style={[styles.locationText, appStyles.textDarkShadow]}>
          Davao City, PH
        </Text>
      </View>
      <Text style={[styles.messageText, appStyles.textDarkShadow]}>
        Explore
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: { flex: 1, paddingTop: appSpacing.screenPaddingTop },
  locationWrapper: { flexDirection: "row", alignItems: "center" },
  locationText: {
    fontSize: appSizes.Text.regular,
    fontFamily: appFonts.regular,
    color: appColors.lightText,
    paddingStart: 3,
  },
  messageText: {
    fontSize: appSizes.Text.large,
    color: appColors.lightText,
    fontFamily: appFonts.bold,
  },
});

export default HeaderTitle;
