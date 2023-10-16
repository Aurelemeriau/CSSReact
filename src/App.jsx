import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import styled from 'styled-components';

const Card = styled.section`
width:400px;
box-shadow: 0px 5px 20px #999;
border-radius: 15px;
margin: auto
`;

const Image = styled.div`
background-Image: url("https://media.istockphoto.com/vectors/cover-design-template-abstract-pattern-graphics-editable-design-vector-id502604106?k=6&m=502604106&s=612x612&w=0&h=6DwOlxeVFpYGY4gQBZMRVMFlk765qwts0W1yIrKLF10=");
width: 100%;
height: 250px;
border-radius: 15px;
`;
const Title = styled.h1`
font-size: .5em;
`;

const Avis = styled.p`
display: flex;
justify-content: center;
align-items: center;
gap: 10px;
height: 30px;
`;

const Etoiles = styled.p`
color:#FFD700;
font-size: 1.5em;
`;

const Note = styled.p`
color: black;
font-size: 1em;
`;

const Text = styled.p`
font-size: 0.5em;
margin-left: 10px;
margin-right: 10px;
`;

const Items = styled.p`
display: flex;
justify-content: space-around;
align-items: center;
`;

const Section = styled.h2`
font-size: .5em;
`;

const Item = styled.p`
border: solid black 1px;
padding-left: 0.7rem;
padding-right: 0.7rem;
background-color: #D1BEB0;
border-radius: 25px;
`;

const Footer = styled.p`
color: purple;
display: flex;
justify-content: flex-start;
margin-left: 10px;
`;

function App() {

  return (
    <Card>
      <Image> </Image>
      <Title> 
        <h1>Title</h1>
      </Title>
      <Avis> 
        <Etoiles>
          <p>*****</p>
        </Etoiles>
        <Note>
          <p>4.5 (413)</p>
        </Note>
      </Avis>
      <Title>
        <h2>Secondary Text</h2>
      </Title>
      <Text> 
        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna. Nunc viverra imperdiet enim. Fusce est. Vivamus a tellus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin pharetra nonummy pede. Mauris et orci. Aenean nec lorem. In porttitor. Donec laoreet nonummy augue. Suspendisse dui purus, scelerisque at, vulputate vitae, pretium mattis, nunc. Mauris eget neque at sem venenatis eleifend. Ut nonummy.</p>
      </Text>
      <Section>
        <h1>Subtitle</h1> 
      </Section>
      <Items>
      <Item>
        <p>item 1</p>
      </Item>
      <Item>
        <p>item 2</p>
      </Item>
      <Item>
        <p>item 3</p>
      </Item>
      <Item>
        <p>item 4</p>
      </Item>
      </Items>
      <Footer>
        <p>ACTION 1</p>
      </Footer>
    </Card>
  )
}

export default App
