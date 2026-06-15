import { ProductSlider } from "@/components/sections/ProductSlider/product-slider";

const TABLETS = [
  {
    id: "tablet-1",
    title: "iPad Pro 12.9",
    price: 1299,
    image: "/tablet.png",
    rating: 4.9,
  },
  {
    id: "tablet-2",
    title: "Samsung Galaxy Tab S10",
    price: 899,
    image: "/tablet.png",
    rating: 4.7,
  },
  {
    id: "tablet-3",
    title: "Google Pixel Tablet",
    price: 599,
    image: "/tablet.png",
    rating: 4.5,
  },
  {
    id: "tablet-4",
    title: "iPad Air",
    price: 799,
    image: "/tablet.png",
    rating: 4.8,
  },
  {
    id: "tablet-5",
    title: "OnePlus Pad",
    price: 699,
    image: "/tablet.png",
    rating: 4.4,
  },
];

export const TabletsSection = () => {
  return (
    <ProductSlider
      title="Tablets"
      subtitle="Premium tablets for work & entertainment"
      products={TABLETS}
    />
  );
};
