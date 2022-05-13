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
import axios from 'axios';

export const Register = () => {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('')
    const [telefone, setTelefone] = useState('')
    const [password, setPassword] = useState('')
    const [repeatPassword, setRepeatPassword] = useState('')
    const { signUp } = useUserAuth()

    const handleSubmit = async (e) => {
        e.preventDefault() 
        
        try {

            if(password === repeatPassword) {
                await signUp(email, password);
                toast.success('Usuário cadastrado com sucesso')
            }

            axios.post('http://localhost:5000/register', {
            name,
            email,
            telefone,
            password,
            repeatPassword,
            }).then((response) => {
                toast.error(response.data);
            });

        } catch(err) {
            if(email === '' || name === '' || telefone === '' || password === '' || repeatPassword === '') {
                toast.error('Campos obrigatórios não preenchidos');
            } else {
                toast.error('Este email já esta cadastrado')
            }
        }
    }

    return (
        <Container>
            <ToastContainer position="top-center" />
            <Form>
                    <Title className='title'>Cadastrar-se</Title>

                    <Input 
                        type='email'
                        placeholder='Email' 
                        className='input' 
                        onChange={(event) => setEmail(event.target.value)}
                    />

                    <Input 
                        type='text'
                        placeholder='Nome' 
                        className='input' 
                        onChange={(event) => setName(event.target.value)}
                    />

                    <Input 
                        type='text'
                        placeholder='Telefone' 
                        className='input' 
                        onChange={(event) => setTelefone(event.target.value)}
                    />

                    <Input 
                    type='password' 
                    placeholder='Senha' 
                    className='input' 
                    onChange={(event) => setPassword(event.target.value)}
                    />

                    <Input 
                        type='password' 
                        placeholder='Repetir senha' 
                        className='input' 
                        onChange={(event) => setRepeatPassword(event.target.value)}
                    />

                    <Button className='button' onClick={handleSubmit}>Cadastrar</Button>
                    <Text className='text'>Já possui uma conta, entre agora mesmo <Link to='/' className='link'>Entrar</Link></Text>
            </Form>
        </Container>
    )
}