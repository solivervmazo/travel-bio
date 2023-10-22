import React from "react";
import { StyleSheet, Text, View } from "react-native";

const GridBox = () => {
  const { dimensions } = useContext(ContextGallery);
  const photoGap = 10;
  const gridItemRow = 3;
  const photoCalcualtedWidth =
    (dimensions.width -
      appSpacing.screenPaddingLeft * 2 -
      photoGap * (gridItemRow - 1)) /
    3;
  const [photoDimension, setPhotoDimension] = useState({
    width: photoCalcualtedWidth,
    height: photoCalcualtedWidth,
  });
  return (
    <View>
      <Text>GridBox</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default GridBox;
