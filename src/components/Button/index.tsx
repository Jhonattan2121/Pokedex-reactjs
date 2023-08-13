import React from 'react';
import {  useNavigate } from 'react-router-dom';
import {  ButtonTitle } from './styles';

export default function ButtonComponents() {
  let navigate = useNavigate();

  const handleClick = (): void => {
    navigate('/Pokemons');
  };

  return (
    
    
      <ButtonTitle onClick={handleClick}>
        Veja os pokemons
      </ButtonTitle>
    
    
  );
}
