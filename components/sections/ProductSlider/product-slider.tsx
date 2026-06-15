"use client";

import { useRef } from "react";
import { Carousel } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { SectionTitle } from "@/components/ui/SectionTitle/section-title";
import { ProductCard } from "@/components/ui/ProductCard/product-card";

interface Product {
  id: string;
  title: string;
  price: number;
  image: string;
  rating?: number;
}

interface ProductSliderProps {
  title: string;
  subtitle: string;
  products: Product[];
}

export const ProductSlider = ({
  title,
  subtitle,
  products,
}: ProductSliderProps) => {
  const carouselRef = useRef<any>(null);

  return (
    <section className="py-20 bg-gray-50">
      <div className="mx-auto max-w-7xl px-6 text-gray-800 text-end">
        <SectionTitle title={title} subtitle={subtitle} />

        <div className="relative group">
          <Carousel
            ref={carouselRef}
            dots={false}
            slidesToShow={4}
            slidesToScroll={1}
            autoplay
            autoplaySpeed={5000}
            responsive={[
              {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 1,
                },
              },
              {
                breakpoint: 640,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1,
                },
              },
              {
                breakpoint: 480,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                },
              },
            ]}
          >
            {products.map((product) => (
              <div key={product.id} className="px-3">
                <ProductCard {...product} />
              </div>
            ))}
          </Carousel>

          <button
            onClick={() => carouselRef.current?.prev()}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-white p-2 rounded-full shadow-lg hover:shadow-xl transition-shadow opacity-0 group-hover:opacity-100 md:opacity-0 group-hover:md:opacity-100"
            aria-label="Previous slide"
          >
            <LeftOutlined className="text-gray-700 text-xl" />
          </button>

          <button
            onClick={() => carouselRef.current?.next()}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-white p-2 rounded-full shadow-lg hover:shadow-xl transition-shadow opacity-0 group-hover:opacity-100 md:opacity-0 group-hover:md:opacity-100"
            aria-label="Next slide"
          >
            <RightOutlined className="text-gray-700 text-xl" />
          </button>
        </div>
      </div>
    </section>
  );
};
