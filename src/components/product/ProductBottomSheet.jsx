import React, { useContext } from "react";
import { BottomSheetModal } from "@gorhom/bottom-sheet";
import { StyleSheet, Text, View } from "react-native";
import ContextScreenProduct from "./ContextScreenProduct";
import { appColor } from "../../themes";
const ProductBottomSheet = (props) => {
  const { bottomSheetRef } = useContext(ContextScreenProduct);
  const snapPoints = ["85%"];
  return (
    <BottomSheetModal
      ref={bottomSheetRef}
      index={0}
      snapPoints={snapPoints}
      backgroundComponent={(_props) => (
        <View
          style={{
            borderRadius: 0,
            backgroundColor: appColor.darkBackground,
            ..._props.style,
          }}
        ></View>
      )}
    >
      <Text>Modal</Text>
    </BottomSheetModal>
  );
};

const styles = StyleSheet.create({});

export default ProductBottomSheet;
