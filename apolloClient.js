import { ApolloClient , InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
    uri: "https://api-ap-northeast-1.graphcms.com/v2/ckvbr8dc50h5t01wihs4degqw/master",
    cache: new InMemoryCache()
  });

  export default client;