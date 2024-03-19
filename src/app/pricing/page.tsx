import { twMerge } from "tailwind-merge";
import { PricingComparisonTable } from "@/components/PricingComparisonTable/PricingComparisonTable";

const Pricing = () => (
  <main className="sm:flex sm:flex-col sm:w-full">
    <section className={twMerge("sm:flex sm:mb-16 sm:px-8 sm:w-full")}>
      <div className="sm:flex sm:max-w-[45.625rem] sm:mx-auto sm:w-full">
        <PricingComparisonTable.Mobile />
      </div>
    </section>
  </main>
);

export default Pricing;
