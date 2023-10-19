import React, { useContext } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { appColor } from "../../themes";
import ContextScreenProduct from "./ContextScreenProduct";
import PrimaryButton from "../PrimaryButton";
const ProductContentFooter = () => {
  const { bottomSheetHandle } = useContext(ContextScreenProduct);
  return (
    <LinearGradient
      colors={[
        "transparent",
        "transparent",
        appColor.darkBackground,
        appColor.darkBackground,
        appColor.darkBackground,
      ]}
      style={styles.container}
    >
      <PrimaryButton text={`Directions`} onPress={bottomSheetHandle} />
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
