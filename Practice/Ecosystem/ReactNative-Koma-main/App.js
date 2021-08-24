import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';
import { Container, Header, Content, H1, Text, Button, Body, Title } from "native-base";
import ProductList from './ProductList';



export default function App() {
  return (
    <Container>
      <Header />
      <Content >
        <H1 >Товары:</H1>
        <Text>Иван </Text>

        <ProductList />



      </Content>
    </Container>
  );
}

