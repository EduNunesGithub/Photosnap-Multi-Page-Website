import { Story } from "@/shared/types/types";
import JPEG18DaysVoyage from "#/JPEG/18-days-voyage.jpg";
import JPEGArchitecturals from "#/JPEG/architecturals.jpg";
import JPEGBehindTheWaves from "#/JPEG/behind-the-waves.jpg";
import JPEGCalmWaters from "#/JPEG/calm-waters.jpg";
import JPEGCityscapes from "#/JPEG/cityscapes.jpg";
import JPEGDarkForest from "#/JPEG/dark-forest.jpg";
import JPEGKingOnAfrica from "#/JPEG/king-on-africa.jpg";
import JPEGLandOfDreams from "#/JPEG/land-of-dreams.jpg";
import JPEGMilkyWay from "#/JPEG/milky-way.jpg";
import JPEGMountains from "#/JPEG/mountains.jpg";
import JPEGRageOfTheSea from "#/JPEG/rage-of-the-sea.jpg";
import JPEGRunningFree from "#/JPEG/running-free.jpg";
import JPEGSomwarpet from "#/JPEG/somwarpet.jpg";
import JPEGTripToNowhere from "#/JPEG/trip-to-nowhere.jpg";
import JPEGUnforeseenCorners from "#/JPEG/unforeseen-corners.jpg";
import JPEGWorldTour from "#/JPEG/world-tour.jpg";

export const mock: Story[] = [
  {
    author: "John Appleseed",
    date: new Date(2020, 3, 16),
    description: "",
    imageProps: {
      alt: "A majestic mountain peak towering above clouds with a blue sky in the background.",
      src: JPEGMountains,
    },
    name: "The Mountains",
  },
  {
    author: "Benjamin Cruz",
    date: new Date(2020, 3, 14),
    description: "",
    imageProps: {
      alt: "Chicago skyline at sunset by James Kennedy.",
      src: JPEGCityscapes,
    },
    name: "Sunset Cityscapes",
  },
  {
    author: "Alexei Borodin",
    date: new Date(2020, 3, 11),
    description: "",
    imageProps: {
      alt: "A silhouette of a person walking against a colorful sunset sky.",
      src: JPEG18DaysVoyage,
    },
    name: "18 Days Voyage",
  },
  {
    author: "Samantha Brooke",
    date: new Date(2020, 3, 9),
    description: "",
    imageProps: {
      alt: "A modern building with a unique curved wooden structure, blending architectural elegance with natural elements.",
      src: JPEGArchitecturals,
    },
    name: "Architecturals",
  },
  {
    author: "Timothy Wagner",
    date: new Date(2020, 3, 7),
    description: "",
    imageProps: {
      alt: "A serene lake nestled amidst majestic mountains and lush trees, creating a picturesque landscape.",
      src: JPEGWorldTour,
    },
    name: "World Tour 2019",
  },
  {
    author: "William Malcolm",
    date: new Date(2020, 3, 3),
    description: "",
    imageProps: {
      alt: "Dark tree against vibrant purple sunset sky.",
      src: JPEGUnforeseenCorners,
    },
    name: "Unforeseen Corners",
  },
  {
    author: "Tim Hillenburg",
    date: new Date(2020, 2, 29),
    description: "",
    imageProps: {
      alt: "A close-up of a lion with long, flowing mane, looking majestic and powerful.",
      src: JPEGKingOnAfrica,
    },
    name: "King on Africa: Part II",
  },
  {
    author: "Felicia Rourke",
    date: new Date(2020, 2, 21),
    description: "",
    imageProps: {
      alt: "A serene night scene with a tree reflected in a calm lake, creating a peaceful and tranquil atmosphere.",
      src: JPEGTripToNowhere,
    },
    name: "The Trip to Nowhere",
  },
  {
    author: "Mohammed Abdul",
    date: new Date(2020, 2, 19),
    description: "",
    imageProps: {
      alt: "A breathtaking sunset over the ocean, casting a warm glow on the water and creating a serene atmosphere.",
      src: JPEGRageOfTheSea,
    },
    name: "Rage of The Sea",
  },
  {
    author: "Michelle",
    date: new Date(2020, 2, 16),
    description: "",
    imageProps: {
      alt: "Horses galloping through a dusty terrain, their manes flowing in the wind, showcasing their strength and grace.",
      src: JPEGRunningFree,
    },
    name: "Running Free",
  },
  {
    author: "Lamarr Wilson",
    date: new Date(2020, 2, 11),
    description: "",
    imageProps: {
      alt: "A powerful wave crashing on the ocean, creating a dramatic splash of water and foam.",
      src: JPEGBehindTheWaves,
    },
    name: "Behind the Waves",
  },
  {
    author: "Samantha Brooke",
    date: new Date(2020, 2, 9),
    description: "",
    imageProps: {
      alt: "Evening moonrise over majestic mountains.",
      src: JPEGCalmWaters,
    },
    name: "Calm Waters",
  },
  {
    author: "Benjamin Cruz",
    date: new Date(2020, 2, 5),
    description: "",
    imageProps: {
      alt: "The breathtaking Milky Way illuminates the night sky, showcasing its celestial beauty.",
      src: JPEGMilkyWay,
    },
    name: "The Milky Way",
  },
  {
    author: "Mohammed Abdul",
    date: new Date(2020, 2, 4),
    description: "",
    imageProps: {
      alt: "Half Dome silhouette against a starry backdrop.",
      src: JPEGDarkForest,
    },
    name: "Night at The Dark Forest",
  },
  {
    author: "Michelle",
    date: new Date(2020, 2, 1),
    description: "",
    imageProps: {
      alt: "A vibrant field of orange flowers with lush green leaves under the bright sun.",
      src: JPEGSomwarpet,
    },
    name: "Somwarpet’s Beauty",
  },
  {
    author: "William Malcolm",
    date: new Date(2020, 1, 25),
    description: "",
    imageProps: {
      alt: "A snow-covered church with majestic mountains in the backdrop.",
      src: JPEGLandOfDreams,
    },
    name: "Land of Dreams",
  },
];
