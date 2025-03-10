import CardProduct from "@/components/CardProduct";
import Jumbotron from "@/components/Jumbotron";

const ProductPage = () => {
  return (
    <div>
      <Jumbotron
        link="/banner/productbanner.png"
        title="Product page"
        describtion="Pilihlah parfum yang mewangikan duniamu"
        buttonName="contact me"
        center={true}
        goto="/about"
      />
      <div className="text-center py-12 mx-4">
        <h2 className="text-3xl font-semibold mb-6">PRODUK KAMI</h2>
        <p className="text-lg mb-12">
          Dengan hasil riset yang dikembangkan sampai saat ini terciptalah
          produk dengan standar kualitas tinggi dan diuji dengan basis ilmu
          pengetahuan.
        </p>

        {/* Responsive grid: stack for mobile, 3 columns for md and above */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Product 1 */}
          <CardProduct
            title="Alpha"
            imageSrc="/product/alpha.png"
            price={300_000}
            description="A bold, commanding fragrance that opens with crisp bergamot and black pepper, evolving into a heart of cedarwood and leather. The base notes of amber and vetiver leave a lasting impression of quiet confidence."
          />
          <CardProduct
            title="Darker Shade"
            imageSrc="/product/darker.png"
            price={250000}
            description="An intoxicating blend that begins with mysterious blackcurrant and violet leaf, deepening into a complex heart of dark rose and incense. Settles into a seductive base of patchouli, vanilla, and musk."
          />
          <CardProduct
            title="Essence OF Sun"
            imageSrc="/product/eos.jpg"
            price={150000}
            description="Captures the golden warmth of summer with vibrant notes of Sicilian lemon and orange blossom. The luminous heart reveals jasmine and ylang-ylang while the base of sandalwood and ambergris creates a radiant glow."
          />
          <CardProduct
            title="Farhampton"
            imageSrc="/product/farhampton.png"
            price={350000}
            description="A coastal getaway in a bottle. Opens with a refreshing splash of sea salt and bergamot, transitioning to a heart of driftwood and water lily. The base notes of white musk and ambergris evoke memories of sunset walks."
          />
          <CardProduct
            title="Perfection"
            imageSrc="/product/perfection.png"
            price={400000}
            description="An exquisite harmony of rare ingredients, beginning with Italian mandarin and Damask rose. The heart unveils Madagascar vanilla and iris, while the base of white suede and cashmere woods creates an aura of flawless elegance."
          />
          <CardProduct
            title="Untitled Verse 1"
            imageSrc="/product/untitled.jpeg"
            price={290000}
            description="A poetic composition that defies convention, opening with unexpected notes of rhubarb and juniper berries. The narrative continues with contrasting heart of orris and fig, before concluding with a memorable base of vetiver and tonka bean."
          />
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
