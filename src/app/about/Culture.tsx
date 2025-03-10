import Image from "next/image";

const OurCulture = () => {
  return (
    <div className="relative  text-gray-500 py-16">
      <div className="text-center space-y-4">
        <h2 className="text-4xl font-extrabold">OUR CULTURE</h2>
        <h3 className="text-2xl font-semibold w-3/4 mx-auto text-center">
          At Ngado Kado, our culture is built on a foundation of passion,
          excellence, and collaboration. We believe in creating a positive and
          inspiring environment not just for our customers, but also for
          everyone who works with us
        </h3>
      </div>

      <div className="mt-8">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 p-4">
          {/* Image 1 */}
          <div className="flex flex-col items-center p-6 border border-gray-300">
            <div className="relative w-full h-72 mb-2">
              <Image
                src="/culture1.svg"
                alt="Image 1"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
            <p className="text-center text-gray-700 p-6 rounded-lg">
              Culture Image 1 Description
            </p>
          </div>

          {/* Image 2 */}
          <div className="flex flex-col items-center p-6 border border-gray-300">
            <div className="relative w-full h-72 mb-2">
              <Image
                src="/culture2.svg"
                alt="Image 2"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
            <p className="text-center text-gray-700">
              Culture Image 2 Description
            </p>
          </div>

          {/* Image 3 */}
          <div className="flex flex-col items-center p-6 border border-gray-300">
            <div className="relative w-full h-72 mb-2">
              <Image
                src="/culture3.svg"
                alt="Image 3"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
            <p className="text-center text-gray-700">
              Culture Image 3 Description
            </p>
          </div>

          {/* Image 4 */}
          <div className="flex flex-col items-center p-6 border border-gray-300">
            <div className="relative w-full h-72 mb-2">
              <Image
                src="/culture4.svg"
                alt="Image 4"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
            <p className="text-center text-gray-700">
              Culture Image 4 Description
            </p>
          </div>

          {/* Image 5 */}
          <div className="flex flex-col items-center p-6 border border-gray-300">
            <div className="relative w-full h-72 mb-2">
              <Image
                src="/culture5.svg"
                alt="Image 5"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
            <p className="text-center text-gray-700">
              Culture Image 5 Description
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurCulture;
