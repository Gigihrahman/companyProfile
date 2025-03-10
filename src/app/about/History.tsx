import CardHistory from "@/app/about/CardHistory";
import React from "react";

const History = () => {
  return (
    <div className="flex flex-col justify-center items-center space-y-6 my-8">
      <h2 className="text-4xl font-extrabold">Our History</h2>
      <h3 className="text-2xl font-semibold w-3/4 mx-auto text-center">
        We Decide To Make Our Customer Smell Good All Day{" "}
      </h3>
      <div className="flex flex-col md:flex-row justify-around space-y-8 md:space-y-0 md:space-x-32">
        <CardHistory
          year={2021}
          story="Meluncurkan toko, dengan fokus pada merek parfum lokal yang terjangkau tetapi berkualitas baik."
        />
        <CardHistory
          year={2022}
          story="Membangun basis pelanggan yang setia dengan menekankan kepuasan pelanggan dan keunggulan layanan."
        />
        <CardHistory
          year={2023}
          story="Memperluas jangkauan produk untuk mencakup merek lokal yang sudah terkenal, meningkatkan reputasi toko di pasar."
        />
      </div>
    </div>
  );
};

export default History;
