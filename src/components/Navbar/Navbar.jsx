import React, { useState } from 'react'
import '../../styles/global.css';
import Foto from '../../images/logo.png';
import { Header, IconUser, Logo, Nav, NavLink, User } from "../../styles/Style";
import Popup from '../Popup/Popup';

const Navbar = () => {
    const [showModal, setShowModal] = useState(false);

    const handleOpenUser = () => {
        setShowModal((prev) => !prev);
    };

  return (
        <>
            <Header>   
                    <Nav>
                        <Logo>
                            <NavLink to='/home'>
                                <img src={Foto} alt="logo" />
                            </NavLink>
                        </Logo>
                        <User>
                            <IconUser onClick={handleOpenUser}/>
                        </User>
                    </Nav>
            </Header>
            <Popup showModal={showModal} setShowModal={setShowModal}/>
        </>
  )
}

export default Navbar