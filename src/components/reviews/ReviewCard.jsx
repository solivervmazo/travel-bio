import React, { useCallback, useState as useRef } from "react";
import { StyleSheet, Text, View } from "react-native";
import { appFonts, appSizes, appStyles, appColors } from "../../themes";
import UserAvatar from "../UserAvatar";
import { Icon } from "../../ui";
import { LinearGradient } from "expo-linear-gradient";

const REVIEW_MESSAGE_MAX_HEIGHT = 100;

const ReviewCard = ({ data, onToggle }) => {
  const [numLines, setNumLines] = useRef({});
  const [canToggle, setCanToggle] = useRef({ init: 0, can: false });
  const textToggle =
    onToggle ||
    useCallback(() => {
      numLines?.numberOfLines
        ? setNumLines({})
        : setNumLines({ numberOfLines: 5 });
    }, [numLines]);

  const onCanToggle = useCallback(
    (init, can) => {
      if (canToggle.init == 0) {
        setCanToggle({ init: init, can: can });
        if (can) setNumLines({ numberOfLines: 5 });
      }
    },
    [canToggle, numLines]
  );

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
          <Text
            onLayout={({ nativeEvent: { layout } }) => {
              if (
                canToggle.init == 0 &&
                layout.height > REVIEW_MESSAGE_MAX_HEIGHT
              ) {
                onCanToggle(1, true);
              } else {
                onCanToggle(1, false);
              }
            }}
            {...numLines}
            style={[
              styles.reviewMessage,
              {
                marginBottom: canToggle.can
                  ? numLines?.numberOfLines
                    ? 0
                    : 40
                  : 0,
              },
            ]}
          >
            {data.review}
          </Text>
          {canToggle.can ? (
            <LinearGradient
              colors={[
                appColors.transparent,
                appColors.darkBgSecondary,
                appColors.darkBgSecondary,
              ]}
              style={{
                width: "100%",
                height: 40,
                position: "absolute",
                bottom: 0,
                justifyContent: "flex-end",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  fontSize: appSizes.Text.semiRegular,
                  color: appColors.themeColor,
                  fontFamily: appFonts.bold,
                  ...appStyles.textDarkShadow,
                }}
                onPress={textToggle}
              >{`Read ${numLines?.numberOfLines ? "more" : "less"}`}</Text>
            </LinearGradient>
          ) : null}
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
