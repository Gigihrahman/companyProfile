import Image from "next/image";
import Link from "next/link";
import type { FC } from "react";

interface Ijumbotron {
  center?: boolean;
  title: string;
  describtion: string;
  link: string;
  buttonName: string;
  goto: string;
}

const Jumbotron: FC<Ijumbotron> = ({
  title,
  describtion,
  link,
  buttonName,
  center,
  goto,
}) => {
  return (
    <div className="relative w-full h-screen bg-[#faf7ed]">
      {/* Mobile layout - flex column with image at top */}
      <div className="md:hidden flex flex-col h-full">
        {/* Image container on mobile - top 40% of screen */}
        <div className="relative w-full h-screen">
          <Image
            src={link}
            alt="Hero Image"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            priority
          />
          {/* Optional gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#faf7ed]/90"></div>
        </div>

        {/* Text container on mobile - bottom 60% of screen */}
        <div className="w-full h-3/5 flex flex-col justify-center px-8">
          <div className={`${center ? "text-center" : "text-left"}`}>
            <h1 className="text-4xl text-black font-bold mb-3 tracking-widest">
              {title}
            </h1>
            <p className="text-xl text-red-800 mb-6 font-medium italic">
              {describtion}
            </p>
            <Link href={goto}>
              <button className="bg-red-800 text-white py-2 px-6 rounded-full text-base hover:bg-red-700 transition shadow-md hover:shadow-lg">
                {buttonName}
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Desktop layout - flex row */}
      <div className="hidden md:flex flex-row h-full">
        {/* Left side - Text and Button */}
        <div className="w-1/2 h-full flex flex-col justify-center px-16 lg:px-24 z-10">
          <div className={`${center ? "text-center" : "text-left"}`}>
            <h1 className="text-5xl md:text-7xl text-black font-bold mb-4 tracking-widest">
              {title}
            </h1>
            <p className="text-2xl text-red-800 mb-8 font-medium italic">
              {describtion}
            </p>
            <Link href={goto}>
              <button className="bg-red-800 text-white py-3 px-8 rounded-full text-lg hover:bg-red-700 transition shadow-md hover:shadow-lg">
                {buttonName}
              </button>
            </Link>
          </div>
        </div>

        {/* Right side - Image */}
        <div className="relative w-1/2 h-full">
          <Image
            src={link}
            alt="Hero Image"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default Jumbotron;
