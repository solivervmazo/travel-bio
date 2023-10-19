import React from "react";
import { FlatList, ImageBackground, StyleSheet, View } from "react-native";
import { Spacer } from "../../ui";
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
        <ImageBackground
          source={item.src}
          style={styles.image}
          key={item.id}
        ></ImageBackground>
      )}
    />
  );
};

const styles = StyleSheet.create({
  image: {
    height: 120,
    backgroundColor: "red",
    aspectRatio: "1/1",
  },
});

export default ProductGallery;
