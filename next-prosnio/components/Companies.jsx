import { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";
import { COMPANIES } from "../pages/api/queries";
import CompanyCard from "./CompanyCard";
import Pagination from "./Pagination";

const Companies = ({
  country,
  industry,
  specialities,
  year,
  total,
  pagination,
}) => {
  const { loading, error, data } = useQuery(COMPANIES, {
    fetchPolicy: "cache-and-network",
    variables: {
      skip: pagination.page,
      where: {
        ...(year && { year_in: [parseInt(year)] }),
        ...(industry && { industry_contains: industry }),
        ...(country && { location_contains: country }),
        ...(specialities.length > 0 && {
          specialities_contains_some: specialities,
        }),
      },
    },
  });

  useEffect(() => {
    pagination.setPage(0);
  }, [year, industry, country, specialities]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  const companies = data.companyCollection.items;
  return (
    <>
      <div className="container mx-auto p-6 md:px-0 md:py-6 grid grid-cols-1 md:grid-cols-3 gap-4">
        {companies.map((company) => {
          return <CompanyCard key={company.sys.id} company={company} />;
        })}
      </div>

      <Pagination
        pagination={pagination}
        total={data.companyCollection.total}
      />
    </>
  );
};

export default Companies;
