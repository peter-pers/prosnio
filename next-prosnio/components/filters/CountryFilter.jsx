import { useQuery } from "@apollo/client";
import { COUNTRIES } from "../../pages/api/queries";
import Filter from "./Filter";

const CountryFilter = ({ country, setCountry }) => {
  const { loading, error, data } = useQuery(COUNTRIES);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  const countries =
    data.countryCollection.items &&
    data.countryCollection.items.map(({ name }) => name);
  return (
    countries.length > 0 && (
      <Filter
        name="country"
        label="Country"
        options={countries}
        value={country}
        onChange={(e) => setCountry(e.target.value)}
      />
    )
  );
};

export default CountryFilter;
