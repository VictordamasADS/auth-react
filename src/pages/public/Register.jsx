import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../../styles/global.css'
import { useUserAuth } from '../../context/context';
import { 
    Button,
    Container, 
    Form, 
    Input, 
    Text, 
    Title } 
from '../../styles/Style';

export const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    const { signUp } = useUserAuth()

    const handleSubmit = async (e) => {
        e.preventDefault() 
        
        try {
            await signUp(email, password);
            toast.success('Usuário cadastrado com sucesso')
        } catch(err) {
            toast.error('Este email já esta cadastrado')
        }
    }

    return (
        <Container>
            <ToastContainer position="top-center" />
            <Form>
                    <Title className='title'>Cadastrar-se</Title>
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

                    <Button className='button' onClick={handleSubmit}>Cadastrar</Button>
                    <Text className='text'>Já possui uma conta, entre agora mesmo <Link to='/' className='link'>Entrar</Link></Text>
            </Form>
        </Container>
    )
}