import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { appColors, appSizes } from "../../themes";
import { Link } from "expo-router";
import ProductLocationText from "./ProductLocationText";
import ProductRatingText from "./ProductRatingText";
import ProductPriceText from "./ProductPriceText";
import ProductNameText from "./ProductNameText";
import { useRoutes } from "../../routes";
const ProductCard = ({ src, onPress = () => {} }) => {
  const routes = useRoutes();
  return (
    <View style={styles.container}>
      <Image
        source={src}
        style={{
          width: 200,
          height: 150,
        }}
        resizeMode="cover"
      />
      <View style={styles.productNameWrapper}>
        <ProductNameText
          text={`Hotel Dark Diamon`}
          numLines={1}
          style={styles.productName}
          onLink={() => routes.detail().go()}
        />
        <ProductLocationText
          size={appSizes.Text.small}
          color={appColors.lightText}
          text={"Davao City, PH"}
        />

        <View style={styles.footerContainer}>
          <ProductPriceText
            size={appSizes.Text.small}
            color={appColors.lightText}
            priceText={`$280`}
            unitText={`night`}
          />

          <ProductRatingText text={`4.9`} size={appSizes.Text.small} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // width: 200,
    backgroundColor: appColors.darkBgSecondary,
  },
  productNameWrapper: {
    padding: 10,
  },
  productName: {
    color: appColors.lightText,
    fontFamily: appFonts.bold,
    fontSize: appSizes.Text.semiRegular,
    textDecorationColor: appColors.lightText,
    textDecorationLine: "underline",
  },
  footerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 20,
  },
});

export default ProductCard;
