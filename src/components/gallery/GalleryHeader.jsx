import React, { useContext } from "react";
import { Text, View } from "react-native";
import { Stack } from "expo-router";
import ContextGallery from "./ContextGallery";
import { ProductNameText } from "../product";
const GalleryHeader = () => {
  const { product } = useContext(ContextGallery);
  return (
    <Stack.Screen
      options={{
        headerTitle: () => (
          <View style={{ flex: 1 }}>
            <View style={{ width: "85%", justifyContent: "center" }}>
              <ProductNameText
                text={`${product.productName}`}
                style={{ paddingHorizontal: 15 }}
                numLines={2}
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

export default GalleryHeader;
