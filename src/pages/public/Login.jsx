import React, { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { useUserAuth } from '../../context/context';
import 'react-toastify/dist/ReactToastify.css';
import '../../styles/global.css';
import { 
    Button,
    Container, 
    Form, 
    Input, 
    Text, 
    Title } 
from '../../styles/Style';
import axios from 'axios';

export const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    const { signIn, user } = useUserAuth()
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault() 
        try {
            await signIn(email, password)
            axios.post('http://localhost:5000/user', {
                email,
                password,
              });
            navigate('/home');
        } catch(err) {
            toast.error('Email ou senha estão incorretos')
        }
    }

    if(!user) {
        return (
            <Container>
                <ToastContainer position="top-center" />
                <Form>
                    <Title className='title'>Faça Login</Title>

                    <Input
                    type='email' 
                    placeholder='Digite seu email' 
                    className='input'
                    onChange={(event) => setEmail(event.target.value)}
                    />

                    <Input 
                    type='password' 
                    placeholder='Digite seu senha' 
                    className='input'
                    onChange={(event) => setPassword(event.target.value)}
                    />

                    <Button className='button' onClick={handleSubmit}>Entrar</Button>
                    <Text className='text'>Não possui uma conta? <Link to='/register' className='link'>Cadastrar-se</Link></Text>
                </Form>
            </Container>
        )
    } else {
        return <Navigate to="/home" />
    }
}