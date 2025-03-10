import CardProduct from "@/components/CardProduct";
import React from "react";

const ProductHome = () => {
  return (
    <div className="container mx-auto py-16 px-4">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-2 text-gray-800">
          Our Collection
        </h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Discover our handcrafted fragrances, each telling a unique story
          through carefully selected notes
        </p>
      </div>

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
      </div>

      <div className="mt-16 text-center">
        <a
          href="/produk"
          className="inline-block bg-gray-800 hover:bg-gray-700 text-white font-medium py-3 px-8 rounded-md transition duration-300"
        >
          View All Products
        </a>
      </div>
    </div>
  );
};

export default ProductHome;
