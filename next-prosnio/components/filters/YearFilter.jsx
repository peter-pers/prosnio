import { useQuery } from "@apollo/client";
import { YEARS } from "../../pages/api/queries";
import Filter from "./Filter";

const YearFilter = ({ year, setYear }) => {
  const { loading, error, data } = useQuery(YEARS, {});
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  const years = Array.from(
    new Set(
      data.companyCollection.items
        .map((company) => company.year)
        .filter(Boolean)
        .sort((a, b) => a - b)
    )
  );
  return (
    years.length > 0 && (
      <Filter
        name="year"
        label="Year"
        options={years}
        value={year}
        onChange={(e) => setYear(e.target.value)}
      />
    )
  );
};

export default YearFilter;
