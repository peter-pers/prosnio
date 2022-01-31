import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";

let ssrCache = false;
let apolloClient = null;

const httpLink = createHttpLink({
  uri: process.env.GRAPHQL_URL,
  headers: {
    authorization: `Bearer ${process.env.ACCESS_TOKEN}`,
  },
});

const create = (initialState) => {
  return new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache().restore(initialState),
  });
};
const initApollo = (initialState) => {
  if (!process.browser) {
    return create(initialState);
  }
  if (apolloClient && !ssrCache) apolloClient.cache.restore(initialState);
  if (!apolloClient) apolloClient = create(initialState);

  return apolloClient;
};

export default initApollo;
