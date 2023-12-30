import { ApolloServer, gql } from 'apollo-server-micro';
import fs from 'fs/promises';
import path from 'path';

const weatherDataPath = path.join(process.cwd(), 'weatherData.json');

// GraphQL schema
const typeDefs = gql`
  type Query {
    getWeather(city: String!, startDate: String!, endDate: String!): [Weather]
  }

  type Weather {
    temperature: Float
    description: String
    icon: String
    dt_iso: String
  }
`;

const resolvers = {
    Query: {
      getWeather: async (_, { city, startDate, endDate }) => {
        try {
          console.log(`Attempting to read weather data from: ${weatherDataPath}`);
  
          const weatherData = await fs.readFile(weatherDataPath, 'utf8');
          console.log("Weather data read successfully"); 
          
          const parsedWeatherData = JSON.parse(weatherData);
          console.log("Weather data parsed successfully");
  
          const filteredData = parsedWeatherData
            .filter((item) => item.city_name && item.city_name.toLowerCase() === city.toLowerCase())
            .filter((item) => {
              const date = item.dt_iso ? new Date(item.dt_iso) : null;
              const start = new Date(startDate);
              const end = new Date(endDate);
              return date && date >= start && date <= end;
            })
            .map((item) => {
              return {
                temperature: item.main.temp,
                dt_iso: item.dt_iso,
              };
            });

            console.log("Filtered Weather Data:", filteredData);
return filteredData;

  
        } catch (error) {
          console.error("Error reading weather data:", error);
          throw new Error("Failed to fetch weather data");
        }
      },
    },
  };
  
  
  

const apolloServer = new ApolloServer({ typeDefs, resolvers });

const startServer = apolloServer.start();

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader(
    'Access-Control-Allow-Origin',
    'https://studio.apollographql.com'
  );
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  if (req.method === 'OPTIONS') {
    res.end();
    return false;
  }

  await startServer;
  await apolloServer.createHandler({
    path: '/api/graphql',
  })(req, res);
}

export const config = {
  api: {
    bodyParser: false,
  },
};
