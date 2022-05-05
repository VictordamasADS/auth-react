import React, { Fragment } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Login } from '../pages/public/Login'
import { Home } from '../pages/private/Home'
import { Register } from '../pages/public/Register';
import ProtectedRoute from '../hooks/ProtectedRoute';

export const AppRoutes = () => {

    return (
        <BrowserRouter>
            <Fragment>
                <Routes>
                    <Route path='/' element={<Login />}/>

                    <Route path='/home' element={<ProtectedRoute />}> 
                        <Route path='/home' element={<Home />} />
                    </Route>


                    <Route path='/register' element={<Register />}/>
                </Routes>
            </Fragment>
        </BrowserRouter>
    )
}