import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { BlurView } from "expo-blur";
import Icon from "../ui/Icon";
import appColor from "../themes/appColor";

const BlurButton = (props) => {
  const { text, icon, isActive = false, onPress = () => {} } = props;
  const btnStateBgColor = isActive ? "rgba(0,0,0,0.0)" : "rgba(0,0,0,0.3)";
  const btnStateTextColor = isActive ? appColor.themeColor : appColor.lightText;
  const btnStateTextWeight = isActive ? 800 : 400;
  return (
    <BlurView
      style={{
        borderWidth: 1.5,
        borderColor: btnStateTextColor,
      }}
    >
      <TouchableOpacity onPress={onPress} activeOpacity={0.8}>
        <View
          style={{
            flex: 1,
            paddingHorizontal: 25,
            paddingVertical: 10,
            backgroundColor: btnStateBgColor,
            alignItems: "center",
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              color: btnStateTextColor,
              fontFamily: "Quicksand-Regular",
              fontWeight: btnStateTextWeight,
              fontSize: 13,
              marginEnd: 5,
            }}
          >
            {text}
          </Text>
          {Icon.Icons(icon, { size: 14, color: btnStateTextColor })}
        </View>
      </TouchableOpacity>
    </BlurView>
  );
};

export default BlurButton;

const styles = StyleSheet.create({});
