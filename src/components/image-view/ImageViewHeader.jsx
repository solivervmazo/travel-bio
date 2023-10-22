import React, { useContext } from "react";
import { Text, View } from "react-native";
import { Stack } from "expo-router";
import ContextImageView from "./ContextImageView";
import { ProductNameText } from "../product";
import { appColors, appFonts, appSizes } from "../../themes";
const ImageViewHeader = () => {
  const { product } = useContext(ContextImageView);
  return (
    <Stack.Screen
      options={{
        headerTitle: () => (
          <View style={{ flex: 1 }}>
            <View
              style={{
                width: "85%",
                justifyContent: "center",
                paddingHorizontal: 15,
              }}
            >
              <Text
                style={{
                  fontSize: appSizes.Text.regular,
                  fontFamily: appFonts.bold,
                  color: appColors.lightText,
                }}
              >
                Gallery
              </Text>
              <ProductNameText
                text={`${product.productName}`}
                style={{ fontFamily: appFonts.semiBold }}
                numLines={1}
                size={appSizes.Text.small}
              />
            </View>
          </View>
        ),
        headerRight: () => null,
        headerBackVisible: false,
      }}
    />
  );
};

export default ImageViewHeader;
