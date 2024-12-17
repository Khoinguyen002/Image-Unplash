import { API_URL } from "@/configs/env";
import Image from "next/image";
import React from "react";

function Card({
  title,
  imgUrl,
  description,
  id,
}: {
  id?: number | string;
  title?: string;
  description?: string;
  imgUrl?: string;
}) {
  return (
    <div>
      <Image alt="thumbnail" src={imgUrl || ""} width={"300"} height={300} />
      <p>{title}</p>
      <p>{description}</p>
    </div>
  );
}

export default Card;
