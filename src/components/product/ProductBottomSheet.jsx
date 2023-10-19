import React, { useContext } from "react";
import { BottomSheetModal, BottomSheetView } from "@gorhom/bottom-sheet";
import { StyleSheet, Text, View } from "react-native";
import ContextScreenProduct from "./ContextScreenProduct";
import { appColors, appStyles } from "../../themes";
import SectionHeader from "../SectionHeader";
import Icon from "../../ui/Icon";
const INQUIRES = [
  {
    id: "a1",
    contacts: {
      mbl: [
        {
          id: "contacts_a1-1",
          category: "mbl",
          app: "telephone",
          value: "+639 169 9989",
        },
        {
          id: "contacts_a1-2",
          category: "mbl",
          app: "telephone",
          value: "+639 889 7777",
        },
      ],
      msr: [
        {
          id: "contacts_a1-3",
          category: "msr",
          app: "whatsapp",
          value: "+639 889 7777",
        },
        {
          id: "contacts_a1-4",
          category: "msr",
          app: "telegram",
          value: "+639 889 7777",
        },
        {
          id: "contacts_a1-5",
          category: "msr",
          app: "messenger",
          value: "/solivervmazo",
        },
      ],
      scl: [
        {
          id: "contacts_a1-6",
          category: "scl",
          app: "facebook",
          value: "/solivervmazo",
        },
        {
          id: "contacts_a1-7",
          category: "tiktok",
          app: "facebook",
          value: "/solivervmazo",
        },
      ],
    },
  },
];
const ProductBottomSheet = (props) => {
  const { bottomSheetRef } = useContext(ContextScreenProduct);
  const snapPoints = ["85%"];
  return (
    <BottomSheetModal
      ref={bottomSheetRef}
      index={0}
      // detached={true}
      snapPoints={snapPoints}
      backgroundStyle={{
        paddingBottom: 80,
        marginBottom: 20,
        borderRadius: 0,
        backgroundColor: appColors.lightBgSecondary,
      }}
    >
      <View
        style={{
          flex: 1,
          marginHorizontal: 20,
        }}
      >
        <SectionHeader
          title={`Mobile`}
          size={14}
          color={appColors.darkTextSecondary}
        />
        {INQUIRES[0].contacts.mbl.map((item) => (
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
            key={item.id}
          >
            <Text
              style={{
                color: appColors.darkText,
                fontSize: 16,
                fontFamily: "Quicksand-SemiBold",
              }}
            >
              {item.value}
            </Text>
            {Icon.Icons("Dial", {
              size: 24,
              color: "#0288d1",
              style: { ...appStyles.textShadow },
            })}
          </View>
        ))}
      </View>
    </BottomSheetModal>
  );
};

const styles = StyleSheet.create({});

export default ProductBottomSheet;
