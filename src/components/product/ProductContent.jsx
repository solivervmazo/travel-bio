import React, { useCallback, useState } from "react";
import { StyleSheet, View } from "react-native";
import { appColors, appSizes, appSpacing, appStyles } from "../../themes";
import { Divider } from "../../ui";
import { SectionHeader } from "../../ui";
import ProductDescription from "./ProductDescription";
import ProductGallery from "./ProductGallery";
import ProductContentBar from "./ProductContentBar";
import { useRoutes } from "../../routes";
import { ReviewCard } from "../reviews/ReviewsContent";
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
    <View style={[appStyles.screenContainer, styles.container]}>
      <ProductContentBar data={OFFERS} />
      <Divider horizontal style={styles.contentDivider} />
      <ProductDescription
        description={description}
        truncated={truncated}
        onToggle={toggleDescription}
      />
      <Divider horizontal style={styles.contentDivider} />
      <SectionHeader
        title={`Photos`}
        titleSize={appSizes.Text.medium}
        btnText={`See all`}
        containerStyle={{ marginBottom: 10 }}
        onLink={() => routes.gallery().go()}
      />
      <ProductGallery data={PHOTOS} />
      <SectionHeader
        title={`Reviews(74)`}
        titleSize={appSizes.Text.medium}
        btnText={`See all`}
        containerStyle={{ marginVertical: 10 }}
        onLink={() => routes.reviews({ category: `hotel`, id: 1 })}
      />
      <View style={styles.reviewsContainer}>
        {REVIEWS.map((data) => (
          <ReviewCard data={data} key={data.id} />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingBottom: appSpacing.screenPaddingBottom,
    paddingHorizontal: appSpacing.screenPaddingLeft,
  },
  contentDivider: {
    backgroundColor: appColors.lightTextSecondary,
    marginVertical: 15,
  },
  reviewsContainer: { width: "100%" },
});

export default ProductContent;
