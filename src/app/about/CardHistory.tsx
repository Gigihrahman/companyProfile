import React, { type FC } from "react";

interface CardHistoryProps {
  year: number;
  story: string;
}
const CardHistory: FC<CardHistoryProps> = ({ year, story }) => {
  return (
    /* From Uiverse.io by Javierrocadev */
    <div className="relative group duration-500 cursor-pointer group overflow-hidden relative text-gray-50 h-72 w-56  rounded-2xl hover:duration-700 duration-700">
      <div className="w-56 h-72 bg-[#FDEFF4] text-gray-800">
        <div className="flex flex-end bg-[#FFC0D3] w-1/3 rounded-r-md p-4 justify-between text-xl font-bold">
          <p>{year}</p>
        </div>
      </div>
      <div className="absolute bg-[#524A4E] -bottom-24 w-56 p-3 flex flex-col gap-1 group-hover:-bottom-0 group-hover:duration-600 duration-500">
        <p className="text-white font-semibold">{story}</p>
      </div>
    </div>
  );
};

export default CardHistory;
