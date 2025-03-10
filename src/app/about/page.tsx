import OurCulture from "@/app/about/Culture";
import Culture from "@/app/about/Culture";
import History from "@/app/about/History";
import Jumbotron from "@/components/Jumbotron";
import React from "react";

const AboutPage = () => {
  return (
    <div className="bg-slate-50">
      <Jumbotron
        link="/banner/aboutbanner.png"
        title="About Page"
        describtion="Ini kisah perusahaan kita"
        buttonName="Goto Produk Page"
        center={true}
        goto="/"
      />
      <History />
      <OurCulture />
    </div>
  );
};

export default AboutPage;
