import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { appColor, appStyles } from "../../themes";

const ProductPriceText = ({
  size = 10,
  color = appColor.lightText,
  priceText = "0",
  unitText = "night",
  priceSize,
  priceColor,
  unitSize,
  unitColor,
  priceStyle,
  unitStyle,
  shadowed = false,
  shadow = appStyles.textShadow,
}) => {
  return (
    <View style={styles.container}>
      <Text
        style={[
          shadowed ? shadow : {},
          styles.price,
          {
            color: priceColor || color,
            fontSize: priceSize || size,
          },
          priceStyle,
        ]}
      >
        {`${priceText}/`}
      </Text>
      <Text
        style={[
          shadowed ? shadow : {},
          styles.unit,
          {
            color: unitColor || color,

            fontSize: unitSize || size,
          },
          unitStyle,
        ]}
      >
        {unitText}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "flex-end",
  },
  price: {
    fontFamily: "Quicksand-Bold",
  },
  unit: {
    fontFamily: "Quicksand-SemiBold",
    paddingBottom: 0.1,
  },
});

export default ProductPriceText;
