import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { appColor } from "../../themes";
import { Link } from "expo-router";
import ProductLocationText from "./ProductLocationText";
import ProductRatingText from "./ProductRatingText";
import ProductPriceText from "./ProductPriceText";
const ProductCard = ({ src, onPress = () => {} }) => {
  return (
    <View
      style={{
        width: 200,
        backgroundColor: appColor.darkBgSecondary,
      }}
    >
      <Image
        source={src}
        style={{
          width: 200,
          height: 150,
        }}
        resizeMode="cover"
      />
      <View style={{ padding: 10 }}>
        <Link href={"/detail"} asChild>
          <Text
            style={{
              color: appColor.lightText,
              fontFamily: "Quicksand-Bold",
              fontSize: 13,
              textDecorationColor: appColor.lightText,
              textDecorationLine: "underline",
            }}
          >
            Hotel Dark Diamon
          </Text>
        </Link>
        <ProductLocationText
          size={12}
          color={appColor.lightText}
          text={"Davao City, PH"}
        />

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: 20,
          }}
        >
          <ProductPriceText
            size={10}
            color={appColor.lightText}
            priceText={`$280`}
            unitText={`night`}
          />

          <ProductRatingText text={`4.9 (74 reviews)`} size={10} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default ProductCard;
