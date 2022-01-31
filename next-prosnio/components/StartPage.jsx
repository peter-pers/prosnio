import { useState } from "react";
import YearFilter from "./filters/YearFilter";
import IndustryFilter from "./filters/IndustryFilter";
import CountryFilter from "./filters/CountryFilter";
import SpecialitiesFilter from "./filters/SpecialitiesFilter";
import Companies from "./Companies";

const StartPage = () => {
  const [page, setPage] = useState(0);
  const [year, setYear] = useState("");
  const [industry, setIndustry] = useState("");
  const [country, setCountry] = useState("");
  const [specialities, setSpecialities] = useState([]);

  return (
    <div>
      <div className="bg-[url('/hero.jpeg')] bg-center p-12">
        <div className="container mx-auto lg:w-1/2">
          <h1 className="text-3xl mt-3 font-text text-center">
            Personio partner program for tax consultants
          </h1>
          <p className="text-md mt-3 font-text text-center">
            With Personio's partner program, you can expand your consulting
            skills in the field of human resources and digitization.
          </p>
          <p className="text-md mb-3 font-text text-center">
            Personio is a recommended DATEV software partner and enables
            automated data transfer to DATEV payroll programs.
          </p>
        </div>
      </div>
      <div className="bg-[#ffff00] p-6">
        <div className="flex sm:flex-row flex-col sm:space-y-0 sm:space-x-1 space-y-1 justify-center">
          <YearFilter year={year} setYear={setYear} />
          <IndustryFilter industry={industry} setIndustry={setIndustry} />
          <CountryFilter country={country} setCountry={setCountry} />
          <SpecialitiesFilter
            specialities={specialities}
            setSpecialities={setSpecialities}
          />
        </div>
      </div>
      <div className="container mx-auto lg:w-1/2">
        <Companies
          year={year}
          industry={industry}
          country={country}
          specialities={specialities}
          pagination={{ page, setPage }}
        />
      </div>
    </div>
  );
};

export default StartPage;
