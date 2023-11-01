import React from "react";
import { StyleSheet, Text, View, Image, ImageBackground } from "react-native";
import { appColors, appSizes, appStyles } from "../../themes";
import {
  ProductLocationText,
  ProductRatingText,
  ProductPriceText,
  ProductNameText,
} from "../product";
import { useRoutes } from "../../routes";
import { Icon, IconButton } from "../../ui";
const ExploreCard = ({ src, offers, onPress = () => {} }) => {
  const routes = useRoutes();
  return (
    <View style={styles.container}>
      <ImageBackground
        source={src}
        style={{
          width: 200,
          height: 150,
          padding: 10,
          flexDirection: "row",
        }}
        resizeMode="cover"
      >
        <IconButton
          icon={"Heart"}
          size={appSizes.IconButton.medium}
          color={appColors.lightText}
        />
      </ImageBackground>
      <View style={styles.productNameWrapper}>
        <View>
          <ProductNameText
            text={`Hotel Dark Diamon`}
            numLines={1}
            style={styles.productName}
            onLink={() => routes.detail().go()}
          />
          <ProductLocationText
            size={appSizes.Text.small}
            color={appColors.lightText}
            text={"Davao City, PH"}
          />
          <View
            style={{ flexDirection: "row", flexWrap: "wrap", marginTop: 10 }}
          >
            {offers.map((offer) => (
              <View
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  margin: 2,
                }}
                key={`offer-${offer.id}`}
              >
                {Icon.Icons(offer.icon, {
                  size: appSizes.Icon.small,
                  color: appColors.lightText,
                  style: { ...appStyles.textShadow },
                })}
                <Text
                  style={{
                    fontSize: appSizes.Text.small,
                    color: appColors.lightTextSecondary,
                    ...appStyles.textShadow,
                  }}
                >
                  {offer.title}
                </Text>
              </View>
            ))}
          </View>
        </View>

        <View style={styles.footerContainer}>
          <ProductRatingText text={`4.9`} size={appSizes.Text.semiRegular} />
          <ProductPriceText
            size={appSizes.Text.regular}
            color={appColors.lightText}
            priceText={`$280`}
            unitText={`night`}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // width: 200,
    backgroundColor: appColors.darkBgSecondary,
    flexDirection: "row",
    flex: 1,
  },
  productNameWrapper: {
    padding: 10,
    justifyContent: "space-between",
    flex: 1,
  },
  productName: {
    color: appColors.lightText,
    fontFamily: appFonts.bold,
    fontSize: appSizes.Text.regular,
    textDecorationColor: appColors.lightText,
    textDecorationLine: "underline",
  },
  footerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 20,
  },
});

export default ExploreCard;
