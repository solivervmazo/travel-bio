import React from "react";
import { StyleSheet, View } from "react-native";
import { BlurView } from "expo-blur";
import Icon from "../ui/Icon";
import { TouchableOpacity } from "react-native";
import appColor from "../themes/appColor";
const IconButton = ({
  icon,
  size = 24,
  color = "black",
  onPress = () => {},
}) => {
  return (
    <BlurView
      style={[
        styles.wrapper,
        {
          width: size,
          height: size,
          borderRadius: parseInt(size / 2),
          borderColor: appColor[color],
          overflow: "hidden",
        },
      ]}
    >
      <TouchableOpacity onPress={onPress} activeOpacity={0.8}>
        {Icon.Icons(icon, { size: size * 0.6, color: appColor[color] })}
      </TouchableOpacity>
    </BlurView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
  },
});
export default IconButton;
