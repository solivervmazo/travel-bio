import React, { useContext } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import ExploreCard from "./ExploreCard";
import ContextScreenExplore from "./ContextScreenExplore";
import { appSpacing } from "../../themes";
import { Spacer } from "../../ui";
const featured = [
  {
    id: 1,
    src: require("../../../assets/hotel-1.jpg"),
    offers: [
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
        id: 5,
        title: "Car",
        icon: "Car",
      },
      {
        id: 6,
        title: "Pets",
        icon: "Pet",
      },
    ],
  },
  {
    id: 2,
    src: require("../../../assets/hotel-2.jpg"),
    offers: [
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
    ],
  },
  {
    id: 3,
    src: require("../../../assets/hotel-3.jpg"),
    offers: [
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
    ],
  },
  {
    id: 4,
    src: require("../../../assets/hotel-2.jpg"),
    offers: [
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
    ],
  },
  {
    id: 5,
    src: require("../../../assets/hotel-1.jpg"),
    offers: [
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
    ],
  },
  {
    id: 6,
    src: require("../../../assets/hotel-3.jpg"),
    offers: [
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
    ],
  },
];
const ExploreFeatured = () => {
  return (
    <View style={styles.sectionContainer}>
      <FlatList
        vertical
        showsVerticalScrollIndicator={false}
        data={featured}
        renderItem={(item) => (
          <ExploreCard src={item.item.src} offers={item.item.offers} />
        )}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={() => <Spacer horizontal={false} size={15} />}
      />
    </View>
  );
};

const ExploreContent = () => {
  const { headerHeight } = useContext(ContextScreenExplore);
  return (
    <View style={[styles.contentContainer]}>
      <ExploreFeatured />
    </View>
  );
};
const styles = StyleSheet.create({
  contentContainer: {
    paddingBottom: 15,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    height: "100%",
    paddingTop: 25,
  },
  sectionContainer: {
    flexGrow: 1,
    // paddingHorizontal: appSpacing.screenPaddingLeft,
    width: "100%",
  },
  sectionWrapper: {
    flexShrink: 1,
    paddingVertical: 10,
  },
});

export default ExploreContent;
