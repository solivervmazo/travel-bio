import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { Dimensions, Platform } from "react-native";

const windowDimensions = Dimensions.get("window");
const useDimensions = () => {
  const [dimensions, setDimensions] = useState({
    height: windowDimensions.height,
    width: windowDimensions.width,
  });
  useEffect(() => {
    const subscription = Dimensions.addEventListener(
      "change",
      ({ window, _ }) => {
        const { height, width } = window;
        const _dimensions = {
          height:
            Platform.OS === "android" && Platform.Version >= 29
              ? height
              : StatusBar.currentHeight + height,
        };
        setDimensions(_dimensions);
      }
    );
    return () => subscription?.remove();
  }, [dimensions]);
  return [dimensions];
};

export default useDimensions;
