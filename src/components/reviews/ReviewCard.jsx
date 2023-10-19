import React, { useCallback, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { appFonts, appSizes, appStyles, appColors } from "../../themes";
import UserAvatar from "../UserAvatar";
import { Icon } from "../../ui";

const ReviewCard = ({ data, onToggle }) => {
  const [numLines, setNumLines] = useState({ numberOfLines: 5 });

  const textToggle =
    onToggle ||
    useCallback(() => {
      numLines?.numberOfLines
        ? setNumLines({})
        : setNumLines({ numberOfLines: 5 });
    }, [numLines]);

  return (
    <View style={styles.container}>
      <UserAvatar
        size={appSizes.Avatar.regular}
        source={{ uri: `https://i.pravatar.cc/150?u=fake@${data.id}` }}
      />

      <View style={styles.contentContainer}>
        <View style={styles.contentWrapper}>
          <View style={styles.nameDateWrapper}>
            <Text
              ellipsizeMode={"tail"}
              numberOfLines={1}
              style={styles.reviewerName}
            >
              {data.name}
            </Text>
            <Text style={styles.reviewedDate}>{data.dtime}</Text>
          </View>
          <View style={styles.starsContainer}>
            <View style={styles.starsWrapper}>
              {Array.from({ length: 5 }, (_, i) => {
                return { id: `${data.id}-${i}`, fill: i < data.rating };
              }).map((rev) => (
                <Icon.Star
                  size={appSizes.Icon.semiRegular}
                  color={appColors.themeColor}
                  fill={rev.fill}
                  key={rev.id}
                />
              ))}
              <Text style={styles.ratingValue}>{`(${data.rating})`}</Text>
            </View>
          </View>
        </View>
        <View style={styles.reviewMessageContainer}>
          <Text {...numLines} style={styles.reviewMessage} onPress={textToggle}>
            {data.review}
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flexDirection: "row", marginVertical: 4 },
  contentContainer: {
    flex: 1,
    marginStart: 10,
    borderRadius: 8,
    overflow: "hidden",
    padding: 10,
    backgroundColor: appColors.darkBgSecondary,
    justifyContent: "center",
    alignItems: "center",
  },
  contentWrapper: { flexDirection: "row" },
  nameDateWrapper: { width: "70%" },
  reviewerName: {
    fontFamily: appFonts.semiBold,
    color: appColors.lightText,
    fontSize: appSizes.Text.regular,
  },
  reviewedDate: {
    fontFamily: appFonts.regular,
    color: appColors.lightTextSecondary,
    fontSize: appSizes.Text.small,
  },
  starsContainer: {
    flexGrow: 1,
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  starsWrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  ratingValue: {
    color: appColors.lightText,
    fontSize: appSizes.Text.semiRegular,
    paddingStart: 3,
  },
  reviewMessageContainer: { width: "100%", marginTop: 10 },
  reviewMessage: {
    fontFamily: appFonts.semiBold,
    fontSize: appSizes.Text.semiRegular,
    color: appColors.lightText,
    ...appStyles.textShadow,
  },
});

export default ReviewCard;
