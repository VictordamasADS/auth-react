import styled from 'styled-components';
import { AiOutlineClose } from 'react-icons/ai';

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  display: grid;
  align-items: center;
  justify-content: center;
  transition: all .3s;
  z-index: 1500;
  padding: 10px;
`;

export const Field = styled.div`
    height: 250px;
    position: relative;
    margin: 10px;
    width: 280px;
    background-color: #161515;
    padding: 2.5rem 0.1rem;
    border-radius: 1rem;
    transition: all .3s;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    @media screen and (min-width: 576px) {
      margin: auto;
      width: 380px;
      border-radius: 1.25rem;
    }
`

export const ButtonLogout = styled.button`
    background-color: #e01a1a;
    color: #fff;
    border-radius: 5px;
    border-style: none;
    width: 100px;
    height: 30px;
    margin: 0 auto;
    cursor: pointer;
`

export const Close = styled(AiOutlineClose)`
  display: inline-flex;
  color: black;
  background-color: white;
  border-radius: 50%;
  font-size: 1.5rem;
  position: absolute;
  top: 1rem;
  right: 1rem;
  cursor: pointer;
`;

export const Info = styled.h4`
  color: white;
  margin-bottom: 30px;
`