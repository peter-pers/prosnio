import React from "react";
import initApollo from "../api";
import { useQuery } from "@apollo/client";
import { COMPANY } from "../api/queries";
import Company from "../../components/Company";

const CompanyPage = ({ id }) => {
  const { loading, error, data } = useQuery(COMPANY, {
    fetchPolicy: "cache-only",
    variables: {
      id,
    },
  });
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  return <Company company={data.company} />;
};

export const getServerSideProps = async ({ query }) => {
  const apolloClient = initApollo();
  await apolloClient.query({
    query: COMPANY,
    variables: {
      id: query.id,
    },
  });

  return {
    props: {
      id: query.id,
      initialApolloState: apolloClient.cache.extract(),
    },
  };
};

export default CompanyPage;
