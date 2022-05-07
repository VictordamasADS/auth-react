import React , { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSpring } from 'react-spring';
import { useUserAuth } from '../context/context';
import { Container, ButtonLogout, Field, Close, Info, Title } from './PopupStyle';

export default function Popup({ showModal, setShowModal }) {
  const { logOut, user } = useUserAuth();
  const [userLogged, setUserLogged] = useState('')
  const navigate = useNavigate();

  useEffect(() => {
    setUserLogged(user.email)
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
            <Title>User:</Title>
            <Info>{userLogged}</Info>
            <ButtonLogout type="button" onClick={handleLogout}>Sair</ButtonLogout>
        </Field>
    </Container>
  );
}