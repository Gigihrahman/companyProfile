import Menu from "@/app/_components/Menu";
import Overview from "@/app/_components/Overview";
import ProductHome from "@/app/_components/ProductHome";
import Testimonials from "@/app/_components/Testimonial";
import Jumbotron from "@/components/Jumbotron";

export default function Home() {
  return (
    <div className="bg-gray-50 container mx-auto">
      <Jumbotron
        link="/banner/homebanner.png"
        title="Home Page"
        describtion="Mulailah hari anda dengan parfume yang mewangikan dunia"
        buttonName="Goto Produk Page"
        goto="/produk"
      />
      <Menu />
      <Overview />
      <ProductHome />
      <Testimonials />
    </div>
  );
}
