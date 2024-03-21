import { Banner } from "@/components/Stories/Banner/Banner";
import { Home } from "@/components/Stories/Home/Home";
import { Stories as StoriesComponent } from "@/components/Stories/Stories/Stories";

export const Stories = Object.assign(() => null, {
  Banner: Banner,
  Home: Home,
  Stories: StoriesComponent,
});
