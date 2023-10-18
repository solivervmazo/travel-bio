import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

const SectionHeader = (props) => {
  const {
    title,
    size = 20,
    titleSize,
    btnText,
    onPress = () => {},
    containerStyle = {},
  } = props;
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "flex-end",
        justifyContent: "space-between",
        ...containerStyle,
      }}
    >
      <Text
        style={{
          fontSize: titleSize || size,
          color: appColor.lightText,
          fontFamily: "Quicksand-Bold",
        }}
      >
        {title}
      </Text>
      <TouchableOpacity onPress={onPress} activeOpacity={0.8}>
        <Text
          style={{
            fontSize: 12,
            color: appColor.themeColor,
            fontFamily: "Quicksand-Regular",
          }}
        >
          {btnText}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({});
export default SectionHeader;
