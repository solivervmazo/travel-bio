import React from "react";
import { IconButton } from "../../ui";
import { appColors, appSizes } from "../../themes";

const SearchButton = ({ onPress = () => {} }) => {
  return (
    <IconButton
      icon={"Search"}
      size={appSizes.IconButton.medium}
      color={appColors.lightText}
      onPress={onPress}
    />
  );
};

export default SearchButton;
