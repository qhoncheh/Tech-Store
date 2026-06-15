import { Card, Button } from "antd";
import { ShoppingCartOutlined, StarOutlined } from "@ant-design/icons";
import Image from "next/image";

interface ProductCardProps {
  id: string;
  title: string;
  price: number;
  image: string;
  rating?: number;
}

export const ProductCard = ({
  id,
  title,
  price,
  image,
  rating = 4.5,
}: ProductCardProps) => {
  return (
    <Card
      hoverable
      className="overflow-hidden"
      cover={
        <div className="relative w-full aspect-square overflow-hidden bg-gray-100">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-300"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          />
        </div>
      }
    >
      <h4 className="text-base font-semibold truncate mb-2">{title}</h4>

      <div className="flex items-center justify-between mb-3">
        <span className="text-lg font-bold text-blue-600">${price}</span>
        <div className="flex items-center gap-1 text-xs text-gray-500">
          <StarOutlined className="text-yellow-400" />
          <span>{rating}</span>
        </div>
      </div>

      <Button
        type="primary"
        block
        icon={<ShoppingCartOutlined />}
        className="bg-blue-600 hover:bg-blue-700"
      >
        Add to Cart
      </Button>
    </Card>
  );
};
