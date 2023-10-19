import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { appColors, appSizes, appStyles } from "../../themes";
import { Divider } from "../../ui";
import ProductLocationText from "./ProductLocationText";
import ProductPriceText from "./ProductPriceText";
import ProductRatingText from "./ProductRatingText";
import ProductNameText from "./ProductNameText";
const ProductScreenTitle = () => {
  return (
    <View style={styles.container}>
      <ProductNameText
        size={appSizes.Text.medium}
        text={`Hotel Postinio Berry`}
      />
      <View style={styles.detailWrapper}>
        <View style={styles.locationReviewWrapper}>
          <ProductLocationText
            text={"Paris, France"}
            color={appColors.lightText}
            shadowed={true}
            containerStyle={{ marginTop: 2 }}
          />
          <ProductRatingText
            text={`4.9 (74 reviews)`}
            size={appSizes.Text.small}
            iconSize={appSizes.Icon.regular}
            containerStyle={{ paddingLeft: 2, marginTop: 2 }}
          />
        </View>
        <ProductPriceText
          color={appColors.lightText}
          priceSize={appSizes.Text.medium}
          priceText={`$480`}
          unitText={`night`}
          unitSize={appSizes.Text.semiRegular}
          shadowed={true}
          unitStyle={{ paddingBottom: 2 }}
        />
      </View>
      <Divider horizontal style={styles.titleDivider} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: appSpacing.screenPaddingLeft,
    paddingVertical: 10,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  detailWrapper: {
    width: "100%",
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-between",
  },
  locationReviewWrapper: {
    flexDirection: "column",
    justifyContent: "flex-end",
  },
  titleDivider: { marginVertical: 8, backgroundColor: appColors.lightText },
});

export default ProductScreenTitle;
