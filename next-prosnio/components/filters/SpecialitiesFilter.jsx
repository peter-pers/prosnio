import { useQuery } from "@apollo/client";
import { SPECIALITIES } from "../../pages/api/queries";
import Filter from "./Filter";

const SpecialitiesFilter = ({ specialities, setSpecialities }) => {
  const { loading, error, data } = useQuery(SPECIALITIES);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  const items =
    data.specialityCollection.items &&
    data.specialityCollection.items.map(({ name }) => name);
  const onClick = (name) =>
    setSpecialities(specialities.filter((speciality) => speciality !== name));
  return (
    <>
      {items.length > 0 && (
        <Filter
          name="speciality"
          label="Speciality"
          options={items}
          value=""
          onChange={(e) => setSpecialities((prev) => [...prev, e.target.value])}
        />
      )}
      <div className="grid grid-cols-2">
        {specialities.map((item, i) => (
          <div
            className="flex bg-cyan-100 h-8 mx-1 mb-1 p-2 pb-3 text-sm justify-between"
            onClick={() => onClick(item)}
          >
            <span key={i} value={item}>
              {item}
            </span>
            <span className="font-bold ml-2 px-1">X</span>
          </div>
        ))}
      </div>
    </>
  );
};

export default SpecialitiesFilter;
