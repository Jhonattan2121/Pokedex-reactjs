import React from 'react';
import { NavbarContainer, Nav, NavItem, ActiveLink } from './styles';
import PokemonImage from '../../../src/assets/image 2.jpg'; 
import {  useLocation } from 'react-router-dom'; 

export default function Navbar() {
  const location = useLocation();
  return (
    <NavbarContainer>
      <img src={PokemonImage} alt="" className='imgPokemon'/>
      <Nav>
      <NavItem>
          <ActiveLink to="/Home" className={location.pathname === '/Home' ? 'active' : ''}>
            Home
          </ActiveLink>
        </NavItem>
        <NavItem>
          <ActiveLink to="/Pokemons" className={location.pathname === '/Pokemons' ? 'active' : ''}>
            Pokemons
          </ActiveLink>
        </NavItem>
        <NavItem>
          <ActiveLink to="/contact" className={location.pathname === '/contact' ? 'active' : ''}>
            Contato
          </ActiveLink>
        </NavItem>
      </Nav>
    </NavbarContainer>
  );
}
