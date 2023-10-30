import React, { useContext } from "react";
import { StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import ContextScreenProduct from "./ContextScreenProduct";
import { PrimaryButton } from "../../ui/";
const ProductContentFooter = () => {
  const { bottomSheetHandle } = useContext(ContextScreenProduct);
  return (
    <LinearGradient
      colors={[
        "transparent",
        "transparent",
        appColors.darkBackground,
        appColors.darkBackground,
        appColors.darkBackground,
      ]}
      style={styles.container}
    >
      <PrimaryButton text={`Inquire Now`} onPress={bottomSheetHandle} />
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 90,
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
    bottom: 0,
    paddingTop: 20,
  },
  wrapper: {},
});

export default ProductContentFooter;
