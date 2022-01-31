import { useQuery } from "@apollo/client";
import { INDUSTRY } from "../../pages/api/queries";
import Filter from "./Filter";
const IndustryFilter = ({ industry, setIndustry }) => {
  const { loading, error, data } = useQuery(INDUSTRY, {});
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  const industries = Array.from(
    new Set(
      data.companyCollection.items
        .map((company) => company.industry)
        .filter(Boolean)
        .sort((a, b) => a - b)
    )
  );
  return (
    industries.length > 0 && (
      <Filter
        name="industry"
        label="Industry"
        options={industries}
        value={industry}
        onChange={(e) => setIndustry(e.target.value)}
      />
    )
  );
};

export default IndustryFilter;
