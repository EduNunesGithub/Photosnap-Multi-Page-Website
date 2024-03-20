import { twMerge } from "tailwind-merge";
import { Banner } from "@/components/Banner/Banner";
import { GetAnInvite } from "@/components/GetAnInvite/GetAnInvite";
import { Pricing as PricingComponent } from "@/components/Pricing/Pricing";
import { PricingComparisonTable } from "@/components/PricingComparisonTable/PricingComparisonTable";
import JPEGPricingHero from "#/JPEG/pricing-hero.jpg";

const Pricing = () => (
  <main className="sm:flex sm:flex-col sm:w-full">
    <section
      className={twMerge(
        "sm:bg-pure-black sm:flex sm:flex-col sm:mb-16 sm:w-full",
        "md:mb-28",
        "lg:mb-30",
      )}
    >
      <div className="sm:flex sm:flex-col sm:items-center sm:max-w-[90rem] sm:mx-auto sm:w-full">
        <Banner
          decoration
          imageProps={{
            alt: "A photographer on a rock, holding a camera to capture the moment.",
            loading: "eager",
            priority: true,
            src: JPEGPricingHero,
          }}
        >
          <Banner.Heading>PRICING</Banner.Heading>

          <Banner.Paragraph>
            Create a your stories, Photosnap is a platform for photographers and
            visual storytellers. It’s the simple way to create and share your
            photos.
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
        <PricingComponent />
      </div>
    </section>

    <section
      className={twMerge(
        "sm:flex sm:mb-16 sm:px-8 sm:w-full",
        "md:mb-28 md:px-10",
        "lg:mb-40",
      )}
    >
      <div className="sm:flex sm:max-w-[45.625rem] sm:mx-auto sm:w-full">
        <PricingComparisonTable.Desktop />
        <PricingComparisonTable.Mobile />
      </div>
    </section>

    <section className="sm:flex sm:w-full">
      <GetAnInvite />
    </section>
  </main>
);

export default Pricing;
