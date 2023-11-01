import { useRouter } from "expo-router";
import React from "react";
import { StyleSheet } from "react-native";
import { appColors, appSizes } from "../../themes";
import { IconButton } from "../../ui";

const BackButton = ({ onPress }) => {
  const router = useRouter();
  return router.canGoBack() ? (
    <IconButton
      icon={"Back"}
      size={appSizes.IconButton.medium}
      color={appColors.lightText}
      onPress={onPress || router.back}
    />
  ) : null;
};

const styles = StyleSheet.create({});

export default BackButton;
