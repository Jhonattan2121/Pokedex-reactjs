import React from 'react';
import { TitleH2, Titlep,  } from './styles';
import ButtonComponents from '../../components/Button';

const Home = () => {
  return (
   <>
      
      <TitleH2>
       <h2 > Qual pokemon 
        você escolheria?</h2>
      </TitleH2>
      <Titlep>
       <p>Você pode saber o tipo de Pokémon, seus pontos fortes, 
        fracos e habilidades.</p>
      </Titlep>
      
      <ButtonComponents />
      </>
  );
}

export default Home;
