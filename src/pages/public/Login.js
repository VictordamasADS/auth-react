import React, { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useUserAuth } from '../../context/context';
import '../../styles/app.css'

export const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    const { signIn } = useUserAuth()
    const navigate = useNavigate()
    const { user } = useUserAuth()

    const handleSubmit = async (e) => {
        e.preventDefault() 
        try {
            await signIn(email, password)
            navigate('/home')
        } catch(err) {
            console.log('Email ou senha estão incorretos')
        }
        if(!user) {
            return navigate('/')
        } else {
            return <Navigate to="/home" />
        }
    }


    return (
        <div className='container'>
            <div className='div'>
                <h1 className='title'>Faça Login</h1>

                <input 
                type='email' 
                placeholder='Digite seu email' 
                className='input'
                onChange={(event) => setEmail(event.target.value)}
                />

                <input 
                type='password' 
                placeholder='Digite seu senha' 
                className='input'
                onChange={(event) => setPassword(event.target.value)}
                />

                <button className='button' onClick={handleSubmit}>Entrar</button>
                <h4 className='text'>Não possui uma conta? <Link to='/register' className='link'>Cadastrar-se</Link></h4>
            </div>
        </div>
    )
}