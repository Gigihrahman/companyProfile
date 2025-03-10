import React from "react";
import Image from "next/image";

const Overview = () => {
  return (
    <div className="  px-4">
      <div className="flex justify-center items-center h-fit">
        <p className="text-4xl font-bold text-gray-800">Overview Company</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-10">
        {/* History Section */}
        <div className="m-10 p-6 bg-white shadow-lg rounded-lg">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            Our History
          </h3>
          <p className="text-gray-700 leading-relaxed text-base">
            Ngado Kado began its journey in 2021 with a mission to introduce
            local perfumes that were not only affordable but also of great
            quality. Over time, we expanded our product range to include
            renowned local brands, becoming a platform for showcasing the best
            of Indonesia's fragrance industry. Despite our growth, we have
            stayed true to our roots by continuing to support local businesses.
          </p>
        </div>

        {/* Image Section 1 */}
        <div className="m-10 p-6 bg-white shadow-lg rounded-lg">
          <Image
            src="/culture1.svg"
            alt="menu"
            className="h-full w-auto rounded-lg"
            width={300}
            height={300}
            layout="responsive"
          />
        </div>

        {/* Team Section */}
        <div className="m-10 p-6 bg-white shadow-lg rounded-lg">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            Our Team
          </h3>
          <p className="text-gray-700 leading-relaxed text-base">
            Behind Ngado Kado is a passionate and dedicated team that shares a
            mutual love for perfumes. We work collaboratively to ensure that
            every aspect of the customer experience — from product selection to
            delivery — is handled with utmost care and professionalism. Our team
            values creativity, attention to detail, and excellent service,
            making Ngado Kado a reliable name in the perfume industry.
          </p>
        </div>

        {/* Image Section 2 */}
        <div className="m-10 p-6 bg-white shadow-lg rounded-lg">
          <Image
            src="/culture2.svg"
            alt="menu"
            className="h-full w-auto rounded-lg"
            width={300}
            height={300}
            layout="responsive"
          />
        </div>

        {/* Mission Section */}
        <div className="m-10 p-6 bg-white shadow-lg rounded-lg">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            Our Mission
          </h3>
          <p className="text-gray-700 leading-relaxed text-base">
            Our mission is simple: to keep our customers smelling good all day
            long with perfumes that are high-quality, affordable, and proudly
            Indonesian. We’re not just selling fragrances — we’re spreading
            happiness and confidence, one scent at a time. Ngado Kado invites
            you to explore the world of local fragrances, where each bottle
            tells a story, and every scent leaves a lasting impression. Whether
            you're a loyal customer or a new visitor, we aim to provide an
            experience that’s as delightful as the products we sell.
          </p>
        </div>

        {/* Image Section 3 */}
        <div className="m-10 p-6 bg-white shadow-lg rounded-lg">
          <Image
            src="/culture3.svg"
            alt="menu"
            className="h-full w-auto rounded-lg"
            width={300}
            height={300}
            layout="responsive"
          />
        </div>
      </div>
    </div>
  );
};

export default Overview;
