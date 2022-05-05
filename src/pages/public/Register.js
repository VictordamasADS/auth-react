import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/app.css'
import { useUserAuth } from '../../context/context';

export const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    const { signUp } = useUserAuth()

    const handleSubmit = async (e) => {
        e.preventDefault() 
        
        try {
            await signUp(email, password);
        } catch(err) {
            console.log('falha ao realizar o cadastro')
        }
    }

    return (
        <div className='container'>
            <div className='div'>
                    <h1 className='title'>Cadastrar-se</h1>
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

                    <button className='button' onClick={handleSubmit}>Cadastrar</button>
                    <h4 className='text'>Já possui uma conta, entre agora mesmo <Link to='/' className='link'>Entrar</Link></h4>
            </div>
        </div>
    )
}