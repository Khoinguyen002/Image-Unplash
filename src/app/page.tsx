import Container from "@/components/atoms/Container";
import Card from "@/components/molecules/Card";
import { API_URL } from "@/configs/env";
import { GetImagesResponse } from "@/types/apis";

const getImage = async (): Promise<GetImagesResponse> => {
  const response = await fetch(API_URL + "/api/images", {
    cache: "force-cache",
  });
  return response.json();
};

export default async function Home() {
  const { data } = await getImage();

  console.log(data);

  return (
    <Container>
      {data?.slice(2)?.map((img) => {
        return (
          <Card
            description={img.description || ""}
            id={img.id}
            title={img.created_at}
            key={img.id}
            imgUrl={img.urls.thumb}
          />
        );
      })}
    </Container>
  );
}
