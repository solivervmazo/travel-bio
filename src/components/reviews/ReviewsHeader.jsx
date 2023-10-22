import React, { useContext } from "react";
import { Text, View } from "react-native";
import { Stack } from "expo-router";
import { IconButton } from "../../ui";
import ContextReviewsScreen from "./ContextReviewsScreen";
import { ProductNameText } from "../product";
import { appColors } from "../../themes";
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
            <IconButton icon={"Share"} size={32} color={appColors.lightText} />
          </View>
        ),
        headerBackVisible: false,
      }}
    />
  );
};

export default ReviewsHeader;
