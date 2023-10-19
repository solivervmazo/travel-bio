import React from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import { appColor, appSpacing, appStyles } from "../../themes";
import { Icon } from "../../ui";
import PrimaryButton from "../PrimaryButton";
import { FlatList, ScrollView } from "react-native-gesture-handler";

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
    review: "Absolutely fantastic! Top-notch service and amenities.",
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

const ReviewsContentHeader = () => {
  return (
    <View
      style={{
        backgroundColor: appColor.darkBgSecondary,
        flexShrink: 1,
        borderRadius: 8,
        overflow: "hidden",
        elevation: 1,
        flexDirection: "row",
        paddingHorizontal: 15,
        paddingTop: 15,
        paddingBottom: 12,
        marginBottom: 15,
      }}
    >
      <View
        style={{
          flexShrink: 1,
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            fontSize: 42,
            fontFamily: "Quicksand-Bold",
            color: appColor.lightText,
            lineHeight: 50,
          }}
        >
          4.5
        </Text>
        <View
          style={{
            paddingHorizontal: 10,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Icon.Star color={appColor.themeColor} fill={true} />
            <Icon.Star color={appColor.themeColor} fill={true} />
            <Icon.Star color={appColor.themeColor} fill={true} />
            <Icon.Star color={appColor.themeColor} fill={true} />
            <Icon.Star color={appColor.themeColor} fill={false} />
          </View>
          <Text
            style={{
              fontSize: 13,
              fontFamily: "Quicksand-Medium",
              color: appColor.lightText,
            }}
          >
            74 Reviews
          </Text>
        </View>
      </View>
      <View
        style={{ flexGrow: 1, justifyContent: "center", alignItems: "center" }}
      >
        <PrimaryButton text={"Review"} containerStyle={{ width: "100%" }} />
      </View>
    </View>
  );
};

const ReviewCard = ({ data }) => {
  return (
    <View style={{ flexDirection: "row", marginVertical: 4 }}>
      <ImageBackground
        source={{ uri: `https://i.pravatar.cc/150?u=fake@${data.id}` }}
        style={{
          marginTop: 5,
          width: 40,
          backgroundColor: "grey",
          borderRadius: 20,
          aspectRatio: "1/1",
          overflow: "hidden",
        }}
      ></ImageBackground>
      <View
        style={{
          flex: 1,
          marginStart: 10,
          borderRadius: 8,
          overflow: "hidden",
          padding: 10,
          backgroundColor: appColor.darkBgSecondary,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View style={{ flexDirection: "row" }}>
          <View style={{ width: "70%" }}>
            <Text
              ellipsizeMode={"tail"}
              numberOfLines={1}
              style={{
                fontFamily: "Quicksand-Bold",
                color: appColor.lightText,
                fontSize: 13,
              }}
            >
              {data.name}
            </Text>
            <Text
              style={{
                fontFamily: "Quicksand-Medium",
                color: appColor.lightText,
                fontSize: 11,
              }}
            >
              {data.dtime}
            </Text>
          </View>
          <View
            style={{
              flexGrow: 1,
              flexDirection: "row",
              justifyContent: "flex-end",
              alignItems: "flex-start",
            }}
          >
            {Array.from({ length: 5 }, (_, i) => {
              return { id: `${data.id}-${i}`, fill: i < data.rating };
            }).map((rev) => (
              <Icon.Star
                size={13}
                color={appColor.themeColor}
                fill={rev.fill}
                key={rev.id}
              />
            ))}
            <Text
              style={{
                color: appColor.lightText,
                fontSize: 11,
                paddingStart: 3,
              }}
            >{`(${data.rating})`}</Text>
          </View>
        </View>
        <View style={{ width: "100%", marginTop: 10 }}>
          <Text
            numberOfLines={5}
            style={{
              fontFamily: "Quicksand-Medium",
              fontSize: 13,
              color: appColor.lightText,
              ...appStyles.textShadow,
            }}
          >
            {data.review}
          </Text>
        </View>
      </View>
    </View>
  );
};

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
