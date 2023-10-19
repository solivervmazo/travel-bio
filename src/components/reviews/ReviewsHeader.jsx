import React, { useContext } from "react";
import { Text, View } from "react-native";
import { Stack } from "expo-router";
import { IconButton } from "../../components";
import ContextReviewsScreen from "./ContextReviewsScreen";
import { ProductNameText } from "../product";
const ReviewsHeader = () => {
  const { data } = useContext(ContextReviewsScreen);
  return (
    <Stack.Screen
      options={{
        headerTitle: () => (
          <View style={{ flex: 1 }}>
            <View style={{ width: "70%", justifyContent: "center" }}>
              <ProductNameText
                text={`${data.productName}${data.productName}${data.productName}`}
                style={{ paddingHorizontal: 15 }}
              />
            </View>
          </View>
        ),
        headerRight: () => (
          <View>
            <IconButton icon={"Share"} size={32} color={"lightText"} />
          </View>
        ),
        headerBackVisible: false,
      }}
    />
  );
};

export default ReviewsHeader;
