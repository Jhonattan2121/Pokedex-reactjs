import React from 'react';
import { HeaderContainer, Nav, NavItem } from './styles';
import PokemonImage from '../../../src/assets/image 2.jpg'; 
import { Link } from 'react-router-dom'; // Importe o Link para navegação correta

export default function Header() {
  return (
    <HeaderContainer>
      <img src={PokemonImage} alt="" />
      <Nav>
        <NavItem>
          <Link to="/Home">Home</Link>
        </NavItem>
        <NavItem>
          <Link to="/Pokemons">Pokemons</Link>
        </NavItem>
        <NavItem>
          <Link to="/contact">Contato</Link>
        </NavItem>
      </Nav>
    </HeaderContainer>
  );
}
