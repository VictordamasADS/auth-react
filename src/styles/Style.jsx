import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';

export const Container = styled.div`
    width: 100%;
    height: 850px;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
`

export const Form = styled.div`
    display: flex;
    position: absolute;
    background-color: white;
    height: 300px;
    width: 350px;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    flex-direction: column;

    @media (min-width: 768px) {
        width: 500px;
    }

    @media (min-width: 900px) {
        width: 800px;
    }
`

export const Title = styled.h1`
    margin-bottom: 10px;
    background-color: white;
    color: black;
`

export const Input = styled.input`
    padding: 10px;
    border: 1px solid rgb(129, 127, 127);
    background-color: white;
    margin-bottom: 10px;
    width: 90%;
`

export const Button = styled.button`
    background-color: rgb(19, 83, 83);
    border-radius: 20px;
    border: none;
    color: white;
    width: 80%;
    cursor: pointer;
    padding: 10px;

    @media (min-width: 768px) {
        width: 400px;
    }

    :hover {
        background-color: rgb(39, 163, 163);
    }
`

export const Text = styled.h4`
    margin-top: 10px;
    color: black;
`

export const Header = styled.header`
  background-color: black;
  width: 100%;
  height: 60px;
  position: fixed;
  z-index: 0;
  left: 0;
  display: flex;
  align-items: center;
  box-shadow: 0px -1px 15px black;
`;

export const Logo = styled.div`
  display: none;

  @media (min-width: 768px) {
    display: block;

    img {
      width: 100%;
      border-radius: 10px;
      height: 40px;
    }
  }

`;

export const NavLink = styled(Link)`
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    color: #173DFF;
  }
`;

export const Nav = styled.nav`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;

  @media (min-width: 768px) {
    justify-content: space-between;
    width: 90%;
    margin: 0 auto;
  }
`;

export const User = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const IconUser = styled(FaUserCircle)`
  color: #fff;
  cursor: pointer;
  font-size: 28px;
  &:hover {
    color: yellow;
  }
`;