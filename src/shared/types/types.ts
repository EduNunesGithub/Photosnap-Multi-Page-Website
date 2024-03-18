import { ImageProps } from "next/image";

export type Story = {
  author: string;
  date: Date;
  description: string;
  imageProps: ImageProps;
  name: string;
};
