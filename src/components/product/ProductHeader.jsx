import React from "react";
import { View } from "react-native";
import { Stack } from "expo-router";
import { IconButton } from "../../ui";
import { appColors } from "../../themes";
const ProductHeader = () => {
  return (
    <Stack.Screen
      options={{
        headerTitle: () => null,
        headerRight: () => (
          <View>
            <IconButton icon={"Heart"} size={32} color={appColors.lightText} />
          </View>
        ),
        headerBackVisible: false,
      }}
    />
  );
};

export default ProductHeader;
