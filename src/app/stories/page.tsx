import { twMerge } from "tailwind-merge";
import { Stories as StoriesComponent } from "@/components/Stories/Stories";

const Stories = () => (
  <main className="sm:flex sm:flex-col sm:w-full">
    <section className={twMerge("sm:flex sm:flex-col sm:w-full")}>
      <div className="sm:flex sm:flex-col sm:items-center sm:max-w-[90rem] sm:mx-auto sm:w-full">
        <StoriesComponent.Stories />
      </div>
    </section>
  </main>
);

export default Stories;
