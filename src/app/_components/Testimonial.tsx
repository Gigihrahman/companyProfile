import React from "react";
import { Star } from "lucide-react";

// TypeScript interfaces
interface TestimonialItem {
  name: string;
  rating: number;
  comment: string;
  image?: string;
}

interface TestimonialsProps {
  title?: string;
  subtitle?: string;
  backgroundColor?: string;
  withContainer?: boolean;
  testimonials?: TestimonialItem[];
}

interface TestimonialCardProps {
  name: string;
  rating: number;
  comment: string;
  image?: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  name,
  rating,
  comment,
  image,
}) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex items-center mb-4">
        <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
          <img
            src={image || "/api/placeholder/64/64"}
            alt={name}
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <h3 className="font-medium text-gray-900">{name}</h3>
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={16}
                className={`${
                  i < rating
                    ? "text-yellow-400 fill-yellow-400"
                    : "text-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
      <p className="text-gray-600">{comment}</p>
    </div>
  );
};

const Testimonials: React.FC<TestimonialsProps> = ({
  title = "What Our Customers Say",
  subtitle = "Discover why our customers love our fragrances",
  backgroundColor = "bg-gray-50",
  withContainer = true,
  testimonials = [
    {
      name: "Emma Thompson",
      rating: 5,
      comment:
        "Alpha is truly exceptional. The blend of bergamot and cedarwood creates a sophisticated scent that lasts all day. I've received countless compliments since I started wearing it.",
      image: "/woman.png",
    },
    {
      name: "Michael Chen",
      rating: 5,
      comment:
        "Darker Shade has become my signature scent. The transition from the initial blackcurrant notes to the warm base of patchouli and vanilla is remarkable. Absolutely worth every penny.",
      image: "/human.png",
    },
    {
      name: "Sophia Rodriguez",
      rating: 4,
      comment:
        "Essence of Sun instantly transports me to warm summer days. The citrus notes are bright without being overwhelming, and the sandalwood base gives it a beautiful depth.",
      image: "/girl.png",
    },
  ],
}) => {
  const ContainerComponent = withContainer ? "div" : React.Fragment;
  const containerProps = withContainer
    ? { className: `py-12 ${backgroundColor}` }
    : {};

  return (
    <ContainerComponent {...containerProps}>
      <div className={withContainer ? "container mx-auto px-4" : ""}>
        {(title || subtitle) && (
          <div className="text-center mb-10">
            {title && (
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
                {title}
              </h2>
            )}
            {subtitle && <p className="mt-2 text-gray-600">{subtitle}</p>}
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </ContainerComponent>
  );
};

export default Testimonials;
