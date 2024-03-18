import React from "react";
import Image, { ImageProps } from "next/image";
import PNGPlaceholder from "#/PNG/placeholder.png";

export type FeatureProps = {
  description: React.ReactNode;
  imageProps: ImageProps;
  title: React.ReactNode;
};

export const Feature = ({ description, imageProps, title }: FeatureProps) => (
  <article className="sm:flex sm:flex-col sm:gap-12 sm:items-center sm:w-full">
    <Image
      {...imageProps}
      blurDataURL={PNGPlaceholder.blurDataURL}
      className="sm:h-18 sm:object-contain sm:w-18"
      height={80}
      placeholder="blur"
      width={80}
    />

    <div className="sm:flex sm:flex-col sm:gap-4 sm:text-center sm:w-full">
      <h3 className="sm:text-H3 sm:text-pure-black">{title}</h3>

      <p className="sm:text-body sm:text-pure-black">{description}</p>
    </div>
  </article>
);
