import { ProductSlider } from "@/components/sections/ProductSlider/product-slider";

const SMARTPHONES = [
  {
    id: "phone-1",
    title: "iPhone 15 Pro Max",
    price: 1199,
    image: "/phones.png",
    rating: 4.8,
  },
  {
    id: "phone-2",
    title: "Samsung Galaxy S24",
    price: 999,
    image: "/phones.png",
    rating: 4.7,
  },
  {
    id: "phone-3",
    title: "Google Pixel 8",
    price: 799,
    image: "/phones.png",
    rating: 4.6,
  },
  {
    id: "phone-4",
    title: "OnePlus 12",
    price: 699,
    image: "/phones.png",
    rating: 4.5,
  },
  {
    id: "phone-5",
    title: "Xiaomi 14",
    price: 599,
    image: "/phones.png",
    rating: 4.4,
  },
];

export const SmartphonesSection = () => {
  return (
    <ProductSlider
      title="Smartphones"
      subtitle="Latest mobile phones & devices"
      products={SMARTPHONES}
    />
  );
};
