import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { appColor, appStyles } from "../../themes";
import { Divider } from "../../ui";
import ProductLocationText from "./ProductLocationText";
import ProductPriceText from "./ProductPriceText";
import ProductRatingText from "./ProductRatingText";
const ProductScreenTitle = () => {
  return (
    <View style={styles.productIntroWrapper}>
      <Text
        style={[
          appStyles.textShadow,
          {
            fontSize: 20,
            color: appColor.lightText,
            //fontFamily: "Quicksand-Bold"Medium",
          },
        ]}
      >
        Hotel Postinio Berry
      </Text>
      <View
        style={{
          width: "100%",
          flexDirection: "row",
          alignItems: "flex-end",
          justifyContent: "space-between",
        }}
      >
        <View
          style={{
            flexDirection: "column",
            justifyContent: "flex-end",
          }}
        >
          <ProductLocationText
            text={"Paris, France"}
            color={appColor.lightText}
            size={16}
            textSize={14}
            shadowed={true}
            containerStyle={{ marginTop: 2 }}
          />
          <ProductRatingText
            text={`4.9 (74 reviews)`}
            size={11}
            iconSize={16}
            containerStyle={{ paddingLeft: 2, marginTop: 2 }}
          />
        </View>
        <ProductPriceText
          color={appColor.lightText}
          priceSize={18}
          priceText={`$480`}
          unitText={`night`}
          unitSize={12}
          shadowed={true}
          unitStyle={{ paddingBottom: 2 }}
        />
      </View>
      <Divider
        horizontal
        style={{ marginVertical: 8, backgroundColor: appColor.lightText }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  productIntroWrapper: {
    flex: 1,
    paddingHorizontal: appSpacing.screenPaddingLeft,
    paddingVertical: 10,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
});

export default ProductScreenTitle;
