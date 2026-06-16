import { CategoryCard } from "@/components/sections/Categories/categories-card";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof CategoryCard> = {
  title: "UI/CategoryCard",
  component: CategoryCard,
};

export default meta;

type Story = StoryObj<typeof CategoryCard>;

export const Default: Story = {
  args: {
    title: "Laptops",
    image:
      "https://picsum.photos/400/300",
  },
};