import React, { useContext, useEffect, useState } from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Dimensions,
  Animated,
} from "react-native";
import { appStyles, appSpacing } from "../../themes/";
import { SectionHeader, Spacer } from "../../ui";
import { FlatList, ScrollView } from "react-native-gesture-handler";
import ContextGallery from "./ContextGallery";
import { useRoutes } from "../../routes";
import GalleryThumbnail from "./GalleryThumbnail";

const featuredMaxHeight = 120;
const featuredMinHeight = 80;

const FeaturedContainer = ({ featured }) => {
  const routes = useRoutes();
  const { scrollOffsetY } = useContext(ContextGallery);

  const animateFeaturedHeight = scrollOffsetY.interpolate({
    inputRange: [0, 500],
    outputRange: [featuredMaxHeight, featuredMinHeight],
    extrapolate: "clamp",
  });
  return (
    <Animated.View
      style={{ height: animateFeaturedHeight, marginVertical: 20 }}
    >
      <FlatList
        horizontal
        ItemSeparatorComponent={() => <Spacer horizontal size={20} />}
        data={featured}
        renderItem={({ item }) => (
          <GalleryThumbnail
            source={item.source}
            size={animateFeaturedHeight}
            onLink={() => routes.imageView({ source: item.source }).go()}
          />
        )}
        keyExtractor={(item) => item.id}
      />
    </Animated.View>
  );
};

const PhotosContainer = ({ photos }) => {
  const { dimensions, scrollListener } = useContext(ContextGallery);
  const photoGap = 10;
  const gridItemRow = 3;
  const photoCalcualtedWidth =
    (dimensions.width -
      appSpacing.screenPaddingLeft * 2 -
      photoGap * (gridItemRow - 1)) /
    3;
  return (
    <ScrollView
      contentContainerStyle={{
        flexGrow: 1,
        paddingBottom: 20,
      }}
      onScroll={scrollListener}
    >
      <View
        style={{
          gap: 10,
          flexDirection: "row",
          flexWrap: "wrap",
        }}
      >
        {photos.map((photo) => (
          <GalleryThumbnail
            size={photoCalcualtedWidth}
            aspectRatio={"1/1"}
            source={photo.source}
            key={photo.id}
            unLink={true}
          />
        ))}
      </View>
    </ScrollView>
  );
};

const GalleryContent = () => {
  const {
    product: {
      gallery: { featured, photos },
    },
  } = useContext(ContextGallery);
  return (
    <View style={[appStyles.contentMainContainer, styles.contentContainer]}>
      <SectionHeader title={`Featured`} />
      <FeaturedContainer featured={featured} />
      <SectionHeader title={`Photos`} containerStyle={{ marginBottom: 20 }} />
      <PhotosContainer photos={photos} />
    </View>
  );
};
const styles = StyleSheet.create({
  contentContainer: {
    paddingBottom: appSpacing.screenPaddingBottom,
  },
});

export default GalleryContent;
