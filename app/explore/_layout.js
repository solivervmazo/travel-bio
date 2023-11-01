import React from "react";
import { ExploreScreen } from "../../src/screens";
import { ContextScreenExplore } from "../../src/components/explore";
import { useHeaderHeight } from "@react-navigation/elements";
const DATA = {
  id: 1,
  category: "hotel",
  productName: "The Marco Polo",
  geo: {
    city: "Davao City",
    country: "PH",
  },
  gallery: {
    featured: [
      {
        id: 2,
        title: "Sunset Serenity",
        source: { uri: "https://picsum.photos/seed/picsum1/1600/2400" },
      },
      {
        id: 3,
        title: "Ocean Oasis",
        source: { uri: "https://picsum.photos/seed/picsum2/200/200" },
      },
      {
        id: 4,
        title: "Tranquil Tropics",
        source: { uri: "https://picsum.photos/seed/picsum3/200/200" },
      },
      {
        id: 18,
        title: "Paradise Found",
        source: { uri: "https://picsum.photos/seed/picsum12/200/200" },
      },
      {
        id: 19,
        title: "Eternal Horizon",
        source: { uri: "https://picsum.photos/seed/picsum19/200/200" },
      },
      {
        id: 110,
        title: "Majestic Vista",
        source: { uri: "https://picsum.photos/seed/picsum110/200/200" },
      },
      {
        id: 111,
        title: "Nature's Retreat",
        source: { uri: "https://picsum.photos/seed/picsum111/200/200" },
      },
    ],
    photos: [
      {
        id: 1,
        title: "Enchanted Forest",
        source: { uri: "https://picsum.photos/seed/picsum1/200/200" },
      },
      {
        id: 2,
        title: "Aqua Paradise",
        source: { uri: "https://picsum.photos/seed/picsum3/200/200" },
      },
      {
        id: 3,
        title: "Mystic Mountains",
        source: { uri: "https://picsum.photos/seed/picsum4/200/200" },
      },
      {
        id: 4,
        title: "Sunrise Spectacle",
        source: { uri: "https://picsum.photos/seed/picsum5/200/200" },
      },
      {
        id: 5,
        title: "Sapphire Shores",
        source: { uri: "https://picsum.photos/seed/picsum6/200/200" },
      },
      {
        id: 6,
        title: "Ethereal Waters",
        source: { uri: "https://picsum.photos/seed/picsum7/200/200" },
      },
      {
        id: 7,
        title: "Lush Landscapes",
        source: { uri: "https://picsum.photos/seed/picsum8/200/200" },
      },
      {
        id: 8,
        title: "Golden Horizons",
        source: { uri: "https://picsum.photos/seed/picsum2/200/200" },
      },
      {
        id: 9,
        title: "Cascade Haven",
        source: { uri: "https://picsum.photos/seed/picsum9/200/200" },
      },
      {
        id: 10,
        title: "Astral Adventures",
        source: { uri: "https://picsum.photos/seed/picsum10/200/200" },
      },
      {
        id: 11,
        title: "Celestial Beauty",
        source: { uri: "https://picsum.photos/seed/picsum11/200/200" },
      },
      {
        id: 17,
        title: "Serenading Sands",
        source: { uri: "https://picsum.photos/seed/picsum18/200/200" },
      },
      {
        id: 18,
        title: "Epic Expeditions",
        source: { uri: "https://picsum.photos/seed/picsum12/200/200" },
      },
      {
        id: 19,
        title: "Vivid Vistas",
        source: { uri: "https://picsum.photos/seed/picsum19/200/200" },
      },
      {
        id: 110,
        title: "Radiant Rainforest",
        source: { uri: "https://picsum.photos/seed/picsum110/200/200" },
      },
      {
        id: 111,
        title: "Panoramic Peaks",
        source: { uri: "https://picsum.photos/seed/picsum111/200/200" },
      },
    ],
  },
};

const ScreenLayout = () => {
  const headerHeight = useHeaderHeight();
  return (
    <ContextScreenExplore.Provider value={{ products: DATA, headerHeight }}>
      <ExploreScreen />
    </ContextScreenExplore.Provider>
  );
};

export default ScreenLayout;
