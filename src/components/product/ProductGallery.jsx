import React from "react";
import { FlatList, ImageBackground, StyleSheet, View } from "react-native";
import { Spacer } from "../../ui";
import { GalleryThumbnail } from "../gallery";
const ProductGallery = (props) => {
  const { data } = props;
  return (
    <FlatList
      horizontal
      data={data}
      keyExtractor={(item) => item.id}
      showsHorizontalScrollIndicator={false}
      ItemSeparatorComponent={() => <Spacer size={10} />}
      renderItem={({ item: item }) => (
        <GalleryThumbnail source={item.src} size={120} aspectRatio={"1/1"} />
      )}
    />
  );
};

const styles = StyleSheet.create({
  image: {
    height: 120,
    aspectRatio: "1/1",
  },
});

export default ProductGallery;
