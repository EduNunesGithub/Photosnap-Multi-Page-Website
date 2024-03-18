import { Story } from "@/shared/types/types";
import JPEG18DaysVoyage from "#/JPEG/18-days-voyage.jpg";
import JPEGArchitecturals from "#/JPEG/architecturals.jpg";
import JPEGCityscapes from "#/JPEG/cityscapes.jpg";
import JPEGMountains from "#/JPEG/mountains.jpg";

export const mock: Story[] = [
  {
    author: "John Appleseed",
    date: new Date(2020, 4, 16),
    description: "",
    imageProps: {
      alt: "A majestic mountain peak towering above clouds with a blue sky in the background.",
      src: JPEGMountains,
    },
    name: "The Mountains",
  },
  {
    author: "Benjamin Cruz",
    date: new Date(2020, 4, 14),
    description: "",
    imageProps: {
      alt: "Chicago skyline at sunset by James Kennedy.",
      src: JPEGCityscapes,
    },
    name: "Sunset Cityscapes",
  },
  {
    author: "Alexei Borodin",
    date: new Date(2020, 4, 11),
    description: "",
    imageProps: {
      alt: "A silhouette of a person walking against a colorful sunset sky.",
      src: JPEG18DaysVoyage,
    },
    name: "18 Days Voyage",
  },
  {
    author: "Samantha Brooke",
    date: new Date(2020, 4, 9),
    description: "",
    imageProps: {
      alt: "A modern building with a unique curved wooden structure, blending architectural elegance with natural elements.",
      src: JPEGArchitecturals,
    },
    name: "Architecturals",
  },
  {
    author: "Timothy Wagner",
    date: new Date(2020, 4, 7),
    description: "",
    name: "World Tour 2019",
  },
  {
    author: "William Malcolm",
    date: new Date(2020, 4, 3),
    description: "",
    name: "Unforeseen Corners",
  },
  {
    author: "Tim Hillenburg",
    date: new Date(2020, 3, 29),
    description: "",
    name: "King on Africa: Part II",
  },
  {
    author: "Felicia Rourke",
    date: new Date(2020, 3, 21),
    description: "",
    name: "The Trip to Nowhere",
  },
  {
    author: "Mohammed Abdul",
    date: new Date(2020, 3, 19),
    description: "",
    name: "Rage of The Sea",
  },
  {
    author: "Michelle",
    date: new Date(2020, 3, 16),
    description: "",
    name: "Running Free",
  },
  {
    author: "Lamarr Wilson",
    date: new Date(2020, 3, 11),
    description: "",
    name: "Behind the Waves",
  },
  {
    author: "Samantha Brooke",
    date: new Date(2020, 3, 9),
    description: "",
    name: "Calm Waters",
  },
  {
    author: "Benjamin Cruz",
    date: new Date(2020, 3, 5),
    description: "",
    name: "The Milky Way",
  },
  {
    author: "Mohammed Abdul",
    date: new Date(2020, 3, 4),
    description: "",
    name: "Night at The Dark Forest",
  },
  {
    author: "Michelle",
    date: new Date(2020, 3, 1),
    description: "",
    name: "Somwarpet’s Beauty",
  },
  {
    author: "William Malcolm",
    date: new Date(2020, 2, 25),
    description: "",
    name: "Land of Dreams",
  },
];
