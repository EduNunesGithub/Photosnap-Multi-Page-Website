import { twMerge } from "tailwind-merge";
import { Row } from "@/components/PricingComparisonTable/Mobile/Row/Row";

export const Mobile = () => (
  <table className={twMerge("sm:h-fit sm:table-fixed sm:w-full", "md:hidden")}>
    <colgroup span={3} />

    <thead className="sm:w-full">
      <tr className="sm:w-full">
        <th
          className="sm:w-full"
          colSpan={3}
          scope="colgroup"
        >
          <div className="sm:border-b-1 sm:border-b-pure-black sm:flex sm:justify-center sm:pb-6 sm:text-center sm:text-pure-black sm:text-H4 sm:w-full">
            THE FEATURES
          </div>
        </th>
      </tr>
    </thead>

    <tbody className="sm:w-full">
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
