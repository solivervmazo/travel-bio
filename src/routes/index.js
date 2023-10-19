import React from "react";
import { useRouter } from "expo-router";
export const useRoutes = () => {
  const router = useRouter();
  return {
    reviews: (params) => {
      router.push("/reviews");
    },
  };
};
