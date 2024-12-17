import { API_URL } from "@/configs/env";
import { GetImagesResponse } from "@/types/apis";
import { useQuery } from "@tanstack/react-query";

// export const [useGetCoinAssets] = createService({
//   fetcher: async () => {
//     const response = await fetch(COIN_URL + "/v2/assets");
//     return response.json();
//   },
//   queryKey: ["coin-assets"],
// });

export const useGetImages = () => {
  return useQuery<GetImagesResponse>({
    queryKey: ["assets"],
    queryFn: async () => {
      const response = await fetch(API_URL + "/photos", {
        method: "get",
        headers: {
          Authorization: `Client-ID S3TVJVpBUDl7nZtUtk9ekTAaT_aPsLMsSYUTYLFpUOU`,
        },
      });
      return response.json();
    },
  });
};
