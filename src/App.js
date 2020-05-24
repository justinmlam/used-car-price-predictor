import React from 'react';
import CarForm from './CarForm'
import styled from 'styled-components';

const Heading = styled.div`
  text-align: center;
  margin: 18rem auto 10rem;
  display: block;
  font-size: 25px;

`

const Main = styled.div`
  text-align: center;
`

function App() {
  return (
    <>
      <Heading>Car Form</Heading>
      <Main><CarForm /></Main>
    </>
  )
}

export default App;
