import React from 'react';
import { render } from 'react-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql
} from "@apollo/client";


const client = new ApolloClient({
  uri: 'https://48p1r2roz4.sse.codesandbox.io',
  cache: new InMemoryCache()
});

function Apollo() {
    return (
      <div className='App-header'>
        <h2>Курс Валют относительно рубля... 🚀 Ракета не в ту сторону)</h2>
        <ExchangeRates />
      </div>
    );
  }


export default function ApolloIndex() {
  return (
    <div>
      <ApolloProvider client={client}>
        <Apollo />
      </ApolloProvider>
    </div>
  );
}

// Определяем запрос
const EXCHANGE_RATES = gql`
  query GetExchangeRates {
    rates(currency: "EURO") { 
      currency
      rate
    }
  }
`;

// Создаем ExchangeRates (Цена Валюты заданной в gql) с помощью хука useQuery
function ExchangeRates() {

  const { loading, error, data } = useQuery(EXCHANGE_RATES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return data.rates.map(({ currency, rate }) => (
    <div key={currency}>
      <p>
        {currency}: {rate}
      </p>
    </div>
  ));
  }



  

