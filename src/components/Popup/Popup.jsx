import axios from 'axios';
import React , { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSpring } from 'react-spring';
import { useUserAuth } from '../../context/context';
import { Container, ButtonLogout, Field, Close, Info } from './PopupStyle';

export default function Popup({ showModal, setShowModal }) {
  const { logOut } = useUserAuth();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const navigate = useNavigate();

  axios.get('http://localhost:5000/user', {
  }).then((response) => {
    setName(response.data.user_name)
    setEmail(response.data.user_email)
    setTelefone(response.data.user_telefone)
  })

  const handleLogout = async () => {
    try {
      await logOut();
      navigate('/login');
    } catch (error) {
      console.log(error.message);
    }
  };

  const modalRef = useRef();

  const animation = useSpring({
    config: {
      duration: 250,
    },
    opacity: showModal ? 1 : 0,
    transform: showModal ? 'translateY(0%)' : 'translateY(-100%)',
  });

  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      setShowModal(false);
    }
  };

  if (!showModal) return null;

  return (
    <Container ref={modalRef} onClick={closeModal}>
        <Field style={animation}>
            <Close onClick={() => setShowModal((prev) => !prev)} />
            <Info>Nome: {name}</Info>
            <Info>Email: {email}</Info>
            <Info>Telefone: {telefone}</Info>
            <ButtonLogout type="button" onClick={handleLogout}>Sair</ButtonLogout>
        </Field>
    </Container>
  );
}