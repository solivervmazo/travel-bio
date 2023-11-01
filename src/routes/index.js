import React from "react";
import { useRouter } from "expo-router";
export const useRoutes = () => {
  const router = useRouter();

  return {
    reviews: (params) => {
      router.push("/reviews");
    },
    explore: (params) => {
      const routeUrl = "/explore";
      return {
        go: (strat = "push") => router.push(routeUrl),
      };
    },
    detail: (params) => {
      const routeUrl = "/detail";
      return {
        go: (strat = "push") => router.push(routeUrl),
      };
    },
    gallery: (params) => {
      const routeUrl = "/gallery";
      return {
        go: (strat = "push") => router.push(routeUrl),
      };
    },
    imageView: (params) => {
      const routeUrl = "/image-view";
      // router.setParams(params);
      return {
        go: (strat = "push") =>
          router.push({
            pathname: routeUrl,
            params: { ...params.source },
          }),
      };
    },
  };
};
