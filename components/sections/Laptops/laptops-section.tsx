import { ProductSlider } from "@/components/sections/ProductSlider/product-slider";

const LAPTOPS = [
  {
    id: "laptop-1",
    title: "MacBook Pro 16",
    price: 2499,
    image: "/lb.png",
    rating: 4.9,
  },
  {
    id: "laptop-2",
    title: "Dell XPS 15",
    price: 1799,
    image: "/lb.png",
    rating: 4.8,
  },
  {
    id: "laptop-3",
    title: "HP Pavilion 15",
    price: 899,
    image: "/lb.png",
    rating: 4.5,
  },
  {
    id: "laptop-4",
    title: "Lenovo ThinkPad X1",
    price: 1599,
    image: "/lb.png",
    rating: 4.7,
  },
  {
    id: "laptop-5",
    title: "ASUS ROG Gaming",
    price: 1999,
    image: "/lb.png",
    rating: 4.8,
  },
];

export const LaptopsSection = () => {
  return (
    <ProductSlider
      title="Laptops"
      subtitle="High-performance laptops for every need"
      products={LAPTOPS}
    />
  );
};
