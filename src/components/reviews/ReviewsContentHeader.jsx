import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Icon } from "../../ui";
import { appColors, appFonts, appSizes } from "../../themes";
import { PrimaryButton } from "../../ui";

const ReviewsContentHeader = () => {
  return (
    <View style={styles.container}>
      <View style={styles.mainReviewContainer}>
        <Text style={styles.mainRatingValue}>4.5</Text>
        <View style={styles.mainStarsContainer}>
          <View style={styles.mainStarsWrapper}>
            <Icon.Star
              size={appSizes.Icon.large}
              color={appColors.themeColor}
              fill={true}
            />
            <Icon.Star
              size={appSizes.Icon.large}
              color={appColors.themeColor}
              fill={true}
            />
            <Icon.Star
              size={appSizes.Icon.large}
              color={appColors.themeColor}
              fill={true}
            />
            <Icon.Star
              size={appSizes.Icon.large}
              color={appColors.themeColor}
              fill={true}
            />
            <Icon.Star
              size={appSizes.Icon.large}
              color={appColors.themeColor}
              fill={false}
            />
          </View>
          <Text style={styles.mainTotalReviews}>74 Reviews</Text>
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

const styles = StyleSheet.create({
  container: {
    backgroundColor: appColors.darkBgSecondary,
    flexShrink: 1,
    borderRadius: 8,
    overflow: "hidden",
    elevation: 1,
    flexDirection: "row",
    paddingHorizontal: 15,
    paddingTop: 15,
    paddingBottom: 12,
    marginBottom: 15,
  },
  mainReviewContainer: {
    flexShrink: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  mainRatingValue: {
    fontSize: appSizes.Text.xxLarge,
    fontFamily: appFonts.bold,
    color: appColors.lightText,
    lineHeight: appSizes.Text.xxLarge,
  },
  mainStarsContainer: {
    paddingHorizontal: 10,
  },
  mainStarsWrapper: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  mainTotalReviews: {
    fontSize: appSizes.Text.semiRegular,
    fontFamily: "Quicksand-Medium",
    color: appColors.lightText,
  },
});

export default ReviewsContentHeader;
