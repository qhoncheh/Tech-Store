import { Card } from "antd";

interface Props {
  title: string;
  image: string;
}

export const CategoryCard = ({
  title,
  image,
}: Props) => {
  return (
    <Card
      hoverable
      cover={
        <img
          src={image}
          alt={title}
          className="h-52 object-cover"
        />
      }
    >
      <h3 className="text-lg font-semibold">
        {title}
      </h3>
    </Card>
  );
};