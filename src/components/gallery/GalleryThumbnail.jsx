import React from "react";
import { ImageBackground, Animated, TouchableOpacity } from "react-native";
import { appConstants } from "../../themes/";
import { useRoutes } from "../../routes";

const GalleryThumbnail = ({
  source,
  size = 120,
  aspectRatio = "1/1",
  onLink,
  unLink,
  imageStyle = {},
  containerStyle = {},
}) => {
  const routes = useRoutes();
  const _onLink = onLink || routes.imageView({ source: source }).go;
  return (
    <Animated.View
      style={{
        width: size,
        height: size,
        aspectRatio: aspectRatio,
        ...containerStyle,
      }}
    >
      <TouchableOpacity
        activeOpacity={!unLink ? appConstants.ACTIVE_OPACITY : 1}
        style={{ flex: 1 }}
        onPress={!unLink ? _onLink : null}
      >
        <ImageBackground
          defaultSource={require("../../../assets/placeholder612x612.jpg")}
          resizeMode="cover"
          source={source}
          style={{ flex: 1, ...imageStyle }}
        ></ImageBackground>
      </TouchableOpacity>
    </Animated.View>
  );
};

export default GalleryThumbnail;
