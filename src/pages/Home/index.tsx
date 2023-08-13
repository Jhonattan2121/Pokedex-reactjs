import React from 'react';
import { TitleH2, Titlep, Container } from './styles';
import ButtonComponents from '../../components/Button';
import Banner from "../../assets/banner.png";

const Home = () => {
  return (
    <Container>
      <TitleH2>
        <h2>Qual pokemon você escolheria?</h2>
      </TitleH2>
      <Titlep>
        <p>Você pode saber o tipo de Pokémon, seus pontos fortes, fracos e habilidades.</p>
        <ButtonComponents />
      </Titlep>
        <img src={Banner} alt="Banner" className='Banner' />
    </Container>
  );
}

export default Home;
