import initApollo from "./api";
import { ApolloProvider } from "@apollo/client";
import Layout from "../components/layout";
import "../styles/globals.css";
function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={initApollo(pageProps.initialApolloState)}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ApolloProvider>
  );
}

export default MyApp;
