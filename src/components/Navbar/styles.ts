import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const NavbarContainer = styled.nav`
display: flex;
  color: white;
  padding: 1rem;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 7%;
  z-index: 100;
 
  box-shadow: 0 5px 8px rgba(0, 0, 0, 0.1);
 
 .imgPokemon {
  display: flex;
  position: relative;
  left: 25rem;
  top: -0.5rem;
  width: 160px;
  height: 45px;
 }
`;

export const Nav = styled.nav`
     list-style: none;
    display: flex;
    position: relative;
    gap: 6rem;
    top: -0.1rem;
    left: 60rem;
`;

export const NavItem = styled.div`
display: flex;
position: relative;


`;

export const ActiveLink = styled(Link)`
  position: relative;
  color: black;
  font-size: 25px;
  display: inline-block;
  text-decoration: none; /* Remova a decoração padrão do link */

  &:after {
    content: '';
    position: absolute;
    bottom: -5px; /* Ajuste vertical da linha */
    left: 0;
    width: 100%;
    height: 2px;
    background-color: black;
    transform: scaleX(0);
    transform-origin: bottom left;
    transition: transform 0.5s ease-in-out;
    visibility: hidden; /* Inicialmente oculta a linha */
  }


  &.active:after {
    transform: scaleX(1);
    visibility: visible; /* Mostra a linha quando houver hover ou quando o link estiver ativo */
  }
`;


