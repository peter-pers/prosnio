import React, { useState } from "react";
import initApollo from "./api";
import { STARTPAGE } from "./api/queries";
import StartPage from "../components/StartPage";

const App = () => {
  return <StartPage />;
};

export const getServerSideProps = async () => {
  const apolloClient = initApollo();
  await apolloClient.query({ query: STARTPAGE });

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
    },
  };
};

export default App;
