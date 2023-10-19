import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { appColors, appConstants, appFonts, appSizes } from "../../themes";

const ProductDescription = ({
  description,
  truncated = false,
  onToggle = () => {},
}) => {
  return (
    <TouchableOpacity
      activeOpacity={appConstants.ACTIVE_OPACITY}
      onPress={onToggle}
    >
      <View style={styles.container}>
        <Text style={styles.description}>
          {description}
          <Text style={styles.seeMoreLess}>{`  Read ${
            truncated ? "more" : "less"
          }`}</Text>
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: appColors.darkBgSecondary,
    borderRadius: 8,
  },
  description: {
    color: appColors.lightText,
    fontFamily: appFonts.regular,
    fontSize: appSizes.Text.regular,
  },
  seeMoreLess: {
    paddingHorizontal: 1,
    color: appColors.themeColor,
    fontFamily: appFonts.semiBold,
    fontSize: appSizes.Text.regular,
  },
});

export default ProductDescription;
