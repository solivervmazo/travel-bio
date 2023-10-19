import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import { appStyles } from "../themes";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import {
  ProductBottomSheet,
  ProductContentFooter,
  ProductCover,
  ProductHeader,
} from "../components/product";
import { ScrollView } from "react-native-gesture-handler";
import { Slot } from "expo-router";

const ProductDetailScreen = ({
  scrollOffsetY,
  scrollStartHide,
  scrollListener,
}) => {
  return (
    <SafeAreaView style={appStyles.screenContainer}>
      <BottomSheetModalProvider>
        <ProductHeader />
        <ProductCover
          offset={scrollOffsetY}
          scrollStartHide={scrollStartHide}
        />
        <ScrollView scrollEventThrottle={20} onScroll={scrollListener}>
          <Slot />
        </ScrollView>
        <ProductContentFooter />
        <ProductBottomSheet />
      </BottomSheetModalProvider>
    </SafeAreaView>
  );
};

export default ProductDetailScreen;

const styles = StyleSheet.create({});
