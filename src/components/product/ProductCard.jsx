import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { appColors, appSizes } from "../../themes";
import { Link } from "expo-router";
import ProductLocationText from "./ProductLocationText";
import ProductRatingText from "./ProductRatingText";
import ProductPriceText from "./ProductPriceText";
const ProductCard = ({ src, onPress = () => {} }) => {
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
        <Link href={"/detail"} asChild>
          <Text
            numberOfLines={1}
            ellipsizeMode="tail"
            style={styles.productName}
          >
            Hotel Dark Diamon
          </Text>
        </Link>
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
    width: 200,
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
