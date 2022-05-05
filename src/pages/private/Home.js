import React from "react"
import { useUserAuth } from '../../context/context'
import { useNavigate } from 'react-router-dom';
import '../../styles/app.css'

export const Home = () => {
    const { logOut } = useUserAuth()
    const navigate = useNavigate()

    const handleLogout = async () => {
        try {
            await logOut()
            navigate('/')
        } catch(err) {
            console.log('error ao fazer logout')
        }
    }

    return (
        <>
            <div className="container">
                <button className="logout" onClick={handleLogout}>Sair</button>
            </div>
        </>
    )
}