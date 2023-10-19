import React, { useCallback, useState } from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import { appColors, appSizes, appSpacing, appStyles } from "../../themes";
import { Icon } from "../../ui";
import { FlatList } from "react-native-gesture-handler";
import ReviewCard from "./ReviewCard";
import ReviewsContentHeader from "./ReviewsContentHeader";
const REVIEWS = [
  {
    id: 1,
    name: "Soliver Mazo",
    rating: 4,
    review: "Great",
    dtime: "September 28, 2023",
  },
  {
    id: 2,
    name: "Emma Johnson",
    rating: 5,
    review: "Excellent service! I would highly recommend.",
    dtime: "October 2, 2023",
  },
  {
    id: 3,
    name: "John Smith",
    rating: 3,
    review: "Good experience. Room for improvement.",
    dtime: "October 5, 2023",
  },
  {
    id: 4,
    name: "Alice Williams",
    rating: 5,
    review:
      "Absolutely fantastic! Top-notch service and amenities. Absolutely fantastic! Top-notch service and amenities.Absolutely fantastic! Top-notch service and amenities.Absolutely fantastic! Top-notch service and amenities.Absolutely fantastic! Top-notch service and amenities.Absolutely fantastic! Top-notch service and amenities.Absolutely fantastic! Top-notch service and amenities.Absolutely fantastic! Top-notch service and amenities.Absolutely fantastic! Top-notch service and amenities.Absolutely fantastic! Top-notch service and amenities.Absolutely fantastic! Top-notch service and amenities.Absolutely fantastic! Top-notch service and amenities.Absolutely fantastic! Top-notch service and amenities.Absolutely fantastic! Top-notch service and amenities.Absolutely fantastic! Top-notch service and amenities.Absolutely fantastic! Top-notch service and amenities.Absolutely fantastic! Top-notch service and amenities.Absolutely fantastic! Top-notch service and amenities.Absolutely fantastic! Top-notch service and amenities.Absolutely fantastic! Top-notch service and amenities.Absolutely fantastic! Top-notch service and amenities.Absolutely fantastic! Top-notch service and amenities.Absolutely fantastic! Top-notch service and amenities.Absolutely fantastic! Top-notch service and amenities.Absolutely fantastic! Top-notch service and amenities.",
    dtime: "October 10, 2023",
  },
  {
    id: 5,
    name: "Michael Davis",
    rating: 2,
    review: "Disappointing experience. Needs significant improvements.",
    dtime: "October 12, 2023",
  },
  {
    id: 6,
    name: "Sophia Brown",
    rating: 4,
    review: "Pleasant stay. Staff was courteous and helpful.",
    dtime: "October 15, 2023",
  },
  {
    id: 7,
    name: "Daniel Lee",
    rating: 5,
    review: "Exceptional service. Will definitely come back!",
    dtime: "October 18, 2023",
  },
  {
    id: 8,
    name: "Olivia Miller",
    rating: 3,
    review: "Average experience. Nothing extraordinary.",
    dtime: "October 20, 2023",
  },
  {
    id: 9,
    name: "Ethan Wilson",
    rating: 4,
    review: "Enjoyed my stay. Clean rooms and friendly staff.",
    dtime: "October 22, 2023",
  },
  {
    id: 10,
    name: "Ava Anderson",
    rating: 5,
    review: "Outstanding service! The best hotel experience ever.",
    dtime: "October 25, 2023",
  },
];

const ReviewsFeed = () => {
  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      data={REVIEWS}
      keyExtractor={(item) => item.id}
      renderItem={({ item: item }) => <ReviewCard data={item} />}
    />
  );
};

const ReviewsContent = () => {
  return (
    <View
      style={{
        paddingHorizontal: appSpacing.screenPaddingLeft,
        height: "100%",
      }}
    >
      <ReviewsContentHeader />
      <ReviewsFeed />
    </View>
  );
};

const styles = StyleSheet.create({});
export default ReviewsContent;

export { ReviewCard };
