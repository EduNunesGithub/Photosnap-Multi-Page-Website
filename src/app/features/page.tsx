import { twMerge } from "tailwind-merge";
import { Banner } from "@/components/Banner/Banner";
import { Features as FeaturesComponent } from "@/components/Features/Features";
import { GetAnInvite } from "@/components/GetAnInvite/GetAnInvite";
import JPEGFeaturesHero from "#/JPEG/features-hero.jpg";

const Features = () => (
  <main className="sm:flex sm:flex-col sm:w-full">
    <section
      className={twMerge(
        "sm:bg-pure-black sm:flex sm:flex-col sm:mb-16 sm:w-full",
        "md:mb-28",
        "lg:mb-40",
      )}
    >
      <div className="sm:flex sm:flex-col sm:items-center sm:max-w-[90rem] sm:mx-auto sm:w-full">
        <Banner
          decoration
          imageProps={{
            alt: "A photographer on a rock, holding a camera to capture the moment.",
            loading: "eager",
            priority: true,
            src: JPEGFeaturesHero,
          }}
        >
          <Banner.Heading>FEATURES</Banner.Heading>

          <Banner.Paragraph>
            We make sure all of our features are designed to be loved by every
            aspiring and even professional photograpers who wanted to share
            their stories.
          </Banner.Paragraph>
        </Banner>
      </div>
    </section>

    <section
      className={twMerge(
        "sm:flex sm:mb-16 sm:px-8 sm:w-full",
        "md:mb-28 md:px-10",
        "lg:mb-40",
      )}
    >
      <div className="sm:flex sm:max-w-page-container sm:mx-auto sm:w-full">
        <FeaturesComponent.Features />
      </div>
    </section>

    <section className="sm:flex sm:w-full">
      <GetAnInvite />
    </section>
  </main>
);

export default Features;
