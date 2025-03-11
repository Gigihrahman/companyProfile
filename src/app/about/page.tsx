import OurCulture from "@/app/about/_components/Culture";
import History from "@/app/about/_components/History";
import Jumbotron from "@/components/Jumbotron";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "About Page Ngado Kado",
  description: "kami beroperasi sampai jam 3 sore dan kami berada di Jogja",
};
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
