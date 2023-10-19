import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { appColor } from "../../themes";

const ProductDescription = ({
  description,
  truncated = false,
  onToggle = () => {},
}) => {
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={onToggle}>
      <View
        style={{
          padding: 10,
          backgroundColor: appColors.darkBgSecondary,
          borderRadius: 8,
        }}
      >
        <Text
          style={{
            color: appColors.lightText,
            fontFamily: "Quicksand-Regular",
            fontSize: 13,
          }}
        >
          {description}
          <Text
            style={{
              paddingHorizontal: 1,
              color: appColors.themeColor,
              fontFamily: "Quicksand-Bold",
              fontSize: 13,
            }}
          >{`  Read ${truncated ? "more" : "less"}`}</Text>
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({});

export default ProductDescription;
