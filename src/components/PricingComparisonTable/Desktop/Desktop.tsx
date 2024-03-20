import { twMerge } from "tailwind-merge";
import { Row } from "@/components/PricingComparisonTable/Desktop/Row/Row";

export const Desktop = () => (
  <table className={twMerge("sm:hidden sm:h-fit sm:w-full", "md:table")}>
    <thead className="sm:text-H4 sm:w-full">
      <tr className="sm:border-b-1 sm:border-b-pure-black sm:text-center">
        <th className="sm:text-left">
          <div className="sm:flex sm:pb-6 sm:pl-6 sm:w-full">THE FEATURES</div>
        </th>

        <th className="sm:w-35">
          <div className="sm:flex sm:justify-center sm:pb-6 sm:text-center sm:w-full">
            BASIC
          </div>
        </th>

        <th className="sm:w-35">
          <div className="sm:flex sm:justify-center sm:pb-6 sm:text-center sm:w-full">
            PRO
          </div>
        </th>

        <th className="sm:w-35">
          <div className="sm:flex sm:justify-center sm:pb-6 sm:text-center sm:w-full">
            BUSINESS
          </div>
        </th>
      </tr>
    </thead>

    <tbody className="sm:text-H4 sm:w-full">
      <Row
        title="UNLIMITED STORY POSTING"
        values={[true, true, true]}
      />

      <Row
        title="UNLIMITED PHOTO UPLOAD"
        values={[true, true, true]}
      />

      <Row
        title="EMBEDDING CUSTOM CONTENT"
        values={[false, true, true]}
      />

      <Row
        title="CUSTOMIZE METADATA"
        values={[false, true, true]}
      />

      <Row
        title="ADVANCED METRICS"
        values={[false, false, true]}
      />

      <Row
        title="PHOTO DOWNLOADS"
        values={[false, false, true]}
      />

      <Row
        title="SEARCH ENGINE INDEXING"
        values={[false, false, true]}
      />

      <Row
        title="CUSTOM ANALYTICS"
        values={[false, false, true]}
      />
    </tbody>
  </table>
);
