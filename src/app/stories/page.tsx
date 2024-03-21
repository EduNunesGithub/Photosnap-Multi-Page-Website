import { twMerge } from "tailwind-merge";
import { Stories as StoriesComponent } from "@/components/Stories/Stories";
import JPEGMoonOfAppalacia from "#/JPEG/moon-of-appalacia.jpg";

const Stories = () => (
  <main className="sm:flex sm:flex-col sm:w-full">
    <section className="sm:flex sm:w-full">
      <StoriesComponent.Banner
        author="John Appleseed"
        date={new Date(2020, 2, 2)}
        description='The dissected plateau area, while not actually made up of geological mountains, is popularly called "mountains," especially in eastern Kentucky and West Virginia, and while the ridges are not high, the terrain is extremely rugged.'
        imageProps={{
          alt: "A serene full moon illuminates the majestic mountains in this captivating photo.",
          src: JPEGMoonOfAppalacia,
        }}
        name="HAZY FULL MOON OF APPALACHIA"
      />
    </section>

    <section className={twMerge("sm:flex sm:flex-col sm:w-full")}>
      <div className="sm:flex sm:flex-col sm:items-center sm:max-w-[90rem] sm:mx-auto sm:w-full">
        <StoriesComponent.Stories />
      </div>
    </section>
  </main>
);

export default Stories;
