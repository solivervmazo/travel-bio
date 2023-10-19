import React from "react";
import {
  FlatList,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from "react-native";

const ProductGallery = (props) => {
  const { data } = props;
  return (
    <FlatList
      horizontal
      data={data}
      keyExtractor={(item) => item.id}
      showsHorizontalScrollIndicator={false}
      ItemSeparatorComponent={() => <View style={{ width: 10 }} />}
      renderItem={({ item: item }) => (
        <ImageBackground
          source={item.src}
          style={{
            height: 80,
            backgroundColor: "red",
            aspectRatio: "1/1",
          }}
          key={item.id}
        ></ImageBackground>
      )}
    />
  );
};

const styles = StyleSheet.create({});

export default ProductGallery;
