import React, { useContext } from "react";
import { StyleSheet, View } from "react-native";
import { SectionHeader } from "../../ui";
import { FlatList } from "react-native-gesture-handler";
import { ProductCard } from "../product/";
import ContextScreenHome from "./ContextScreenHome";

const data = [
  {
    id: 1,
    src: require("../../../assets/hotel-1.jpg"),
  },
  {
    id: 2,
    src: require("../../../assets/hotel-2.jpg"),
  },
  {
    id: 3,
    src: require("../../../assets/hotel-3.jpg"),
  },
];

const HomeContentSection = ({ title, products, btnText = "See all" }) => {
  const { handleSearchClick } = useContext(ContextScreenHome);
  return (
    <View style={styles.sectionContainer}>
      <View style={styles.sectionWrapper}>
        <SectionHeader
          size={appSizes.Text.medium}
          title={title}
          btnText={btnText}
          onLink={handleSearchClick}
        />
      </View>
      <View
        style={{
          paddingBottom: 10,
        }}
      >
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={products}
          renderItem={(item) => <ProductCard src={item.item.src} />}
          keyExtractor={(item) => item.id}
          ItemSeparatorComponent={() => <View style={{ width: 10 }} />}
        />
      </View>
    </View>
  );
};

const HomeContent = () => {
  return (
    <>
      <HomeContentSection title={"Most Popular"} products={data} />

      <HomeContentSection title={"Nearby"} products={data} />
    </>
  );
};
const styles = StyleSheet.create({
  sectionContainer: {
    flex: 1,
    paddingHorizontal: appSpacing.screenPaddingLeft,
  },
  sectionWrapper: {
    flexShrink: 1,
    paddingVertical: 10,
  },
});

export default HomeContent;
