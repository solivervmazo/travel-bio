import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { BlurView } from "expo-blur";
import Icon from "../ui/Icon";
import { appColors, appConstants, appSizes } from "../themes";
import appFonts from "../themes/appFonts";

const BlurButton = (props) => {
  const { text, icon, isActive = false, onPress = () => {} } = props;
  const btnStateBgColor = isActive
    ? appColors.transparent
    : appColors.transparent3;
  const btnStateTextColor = isActive
    ? appColors.themeColor
    : appColors.lightText;
  const btnStateTextWeight = isActive ? 800 : 400;
  return (
    <BlurView
      style={[
        styles.container,
        {
          borderColor: btnStateTextColor,
        },
      ]}
    >
      <TouchableOpacity
        onPress={onPress}
        activeOpacity={appConstants.ACTIVE_OPACITY}
      >
        <View
          style={[
            styles.wrapper,
            {
              backgroundColor: btnStateBgColor,
            },
          ]}
        >
          <Text
            style={[
              styles.text,
              {
                color: btnStateTextColor,
              },
            ]}
          >
            {text}
          </Text>
          {Icon.Icons(icon, {
            size: appSizes.Icon.small,
            color: btnStateTextColor,
          })}
        </View>
      </TouchableOpacity>
    </BlurView>
  );
};

export default BlurButton;

const styles = StyleSheet.create({
  container: { borderWidth: 1.5 },
  wrapper: {
    flex: 1,
    paddingHorizontal: 25,
    paddingVertical: 10,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
  },
  text: {
    fontFamily: appFonts.semiBold,
    fontSize: appSizes.Text.semiRegular,
    marginEnd: 5,
    lineHeight: 15,
  },
});
