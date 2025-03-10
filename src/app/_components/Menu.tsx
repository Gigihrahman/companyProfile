import Image from "next/image";
import type { FC } from "react";
interface CardMenuProps {
  link: string;
  title: string;
}
const Menu = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mx-4 gap-6 my-16">
      <CardMenu link="/banner/aboutbanner.png" title="tentang kami" />
      <CardMenu link="/teams.webp" title="team kami" />
      <CardMenu link="/banner/productbanner.png" title="produk kami" />
    </div>
  );
};

export default Menu;

const CardMenu: FC<CardMenuProps> = ({ link, title }) => {
  return (
    <div className="relative group">
      {/* Centered Image with Zoom effect */}
      <div className="flex justify-center items-center overflow-hidden">
        <Image
          src={link}
          alt={`${title}-image`}
          width={347}
          height={212}
          className="rounded-lg transform group-hover:scale-110 transition-transform duration-300"
        />
      </div>

      {/* Title and Button Section */}
      <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-40 text-white text-xl font-bold rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <p>{title}</p>

        {/* Button */}
        <button className="mt-4 py-2 px-4 bg-pink-500 text-white rounded-lg hover:bg-pink-600 transition-colors duration-300">
          Learn More
        </button>
      </div>
    </div>
  );
};
