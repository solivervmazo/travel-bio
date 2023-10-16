import React from "react";
import { StyleSheet } from "react-native";
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
      intensity={10}
      tint={"light"}
      blurReductionFactor={0}
      style={[
        styles.wrapper,
        {
          width: size,
          height: size,
          borderRadius: size / 2,
          borderColor: appColor[color],
        },
      ]}
    >
      <TouchableOpacity onPress={onPress} activeOpacity={0.8}>
        {Icon.Icons(icon, { size: size * 0.7, color: appColor[color] })}
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
