import Image from "next/image";
import React, { type FC } from "react";
interface CardProductProp {
  title: string;
  imageSrc: string;
  link?: string;
  description: string;
  price: number;
}
const CardProduct: FC<CardProductProp> = ({
  title,
  imageSrc,

  description,
  price,
}) => {
  return (
    <div className="text-center border border-gray-300 p-6 rounded-lg">
      <div className="relative w-full h-72 mb-4">
        <Image
          src={imageSrc}
          alt="Product 1"
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
      </div>
      <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
      <h3 className="font-bold text-xl mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <span className="text-lg font-semibold text-gray-900">
        {new Intl.NumberFormat("id-ID", {
          style: "currency",
          currency: "IDR",
        }).format(price)}
      </span>
    </div>
  );
};

export default CardProduct;
