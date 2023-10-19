import React, { useCallback, useState } from "react";
import { StyleSheet, View } from "react-native";
import { appColor, appSpacing, appStyles } from "../../themes";
import { Divider } from "../../ui";
import SectionHeader from "../SectionHeader";
import ProductDescription from "./ProductDescription";
import ProductGallery from "./ProductGallery";
import ProductContentBar from "./ProductContentBar";
import { useRoutes } from "../../routes";
const OFFERS = [
  {
    id: 1,
    title: "Beds",
    icon: "Bed",
  },
  {
    id: 2,
    title: "Wifi",
    icon: "Wifi",
  },
  {
    id: 3,
    title: "Pool",
    icon: "Pool",
  },
  {
    id: 4,
    title: "Eats",
    icon: "Restaurant",
  },
  {
    id: 5,
    title: "Car",
    icon: "Car",
  },
  {
    id: 6,
    title: "Pets",
    icon: "Pet",
  },
];
const LONGTEXT = `Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.

The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.`;

const PHOTOS = [
  {
    id: "1",
    src: require("../../../assets/hotel-1.jpg"),
  },
  {
    id: "2",
    src: require("../../../assets/hotel-2.jpg"),
  },
  {
    id: "3",
    src: require("../../../assets/hotel-3.jpg"),
  },
  {
    id: "4",
    src: require("../../../assets/hotel-1.jpg"),
  },
  {
    id: "5",
    src: require("../../../assets/hotel-2.jpg"),
  },
];

const ProductContent = () => {
  const routes = useRoutes();
  const [description, setDescription] = useState(LONGTEXT.slice(0, 300));
  const [truncated, setTruncated] = useState(true);
  const toggleDescription = useCallback(() => {
    if (!truncated) {
      setDescription(LONGTEXT.slice(0, 300));
      setTruncated(!truncated);
    } else {
      setDescription(LONGTEXT);
      setTruncated(!truncated);
    }
  }, [description, truncated]);
  return (
    <View
      style={[
        appStyles.screenContainer,
        { paddingBottom: 70, paddingHorizontal: appSpacing.screenPaddingLeft },
      ]}
    >
      <ProductContentBar data={OFFERS} />
      <Divider
        horizontal
        style={{
          backgroundColor: appColor.lightTextSecondary,
          marginVertical: 15,
        }}
      />
      <ProductDescription
        description={description}
        truncated={truncated}
        onToggle={toggleDescription}
      />
      <Divider
        horizontal
        style={{
          backgroundColor: appColor.lightTextSecondary,
          marginVertical: 15,
        }}
      />
      <SectionHeader
        title={`Photos`}
        titleSize={18}
        btnText={`See all`}
        containerStyle={{ marginBottom: 10 }}
      />
      <ProductGallery data={PHOTOS} />
      <SectionHeader
        title={`Reviews(74)`}
        titleSize={18}
        btnText={`See all`}
        containerStyle={{ marginVertical: 10 }}
        onLink={() => routes.reviews({ category: `hotel`, id: 1 })}
      />
      <View style={{ height: 100, backgroundColor: "red", width: "100%" }} />
    </View>
  );
};

const styles = StyleSheet.create({});

export default ProductContent;
