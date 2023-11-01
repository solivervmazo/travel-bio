import React, { useContext } from "react";
import { Text, TextInput, View } from "react-native";
import { Stack } from "expo-router";
import ContextScreenExplore from "./ContextScreenExplore";
import { ProductNameText } from "../product";
import { Icon } from "../../ui";
import { appColors, appSizes, appSpacing } from "../../themes";
import { BackButton } from "../app";
const ExploreHeader = () => {
  const {
    products: {
      geo: { city, country },
    },
  } = useContext(ContextScreenExplore);
  return (
    <Stack.Screen
      options={{
        headerBackVisible: false,
        headerTitle: () => (
          <View
            style={{
              flex: 1,
              paddingEnd: appSpacing.screenPaddingLeft,
              flexDirection: "row",
              justifyContent: "space-around",
              alignItems: "center",
              backgroundColor: appColors.darkBackground,
            }}
          >
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                paddingHorizontal: 10,
              }}
            >
              <View
                style={{
                  flex: 1,
                  justifyContent: "flex-start",
                  alignItems: "center",
                  flexDirection: "row",
                }}
              >
                <ProductNameText
                  text={`${city}, ${country}`}
                  numLines={2}
                  size={appSizes.Text.semiRegular}
                />
                <Icon.Location
                  color={appColors.lightText}
                  size={appSizes.Icon.semiRegular}
                  style={{ paddingHorizontal: 5 }}
                />
              </View>
              <TextInput
                placeholder="Search in Hotels"
                cursorColor={appColors.lightText}
                style={{
                  backgroundColor: appColors.darkBgSecondary,
                  fontSize: appSizes.Text.semiRegular,
                  paddingHorizontal: 20,
                  paddingVertical: 8,
                  marginTop: 8,
                  borderRadius: 12,
                  color: appColors.lightText,
                }}
              />
            </View>
          </View>
        ),
        headerRight: () => null,
        headerLeft: () => <BackButton />,
        headerTransparent: true,
      }}
    />
  );
};

export default ExploreHeader;
