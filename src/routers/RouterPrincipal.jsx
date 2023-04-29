<<<<<<< HEAD
import React from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { Home } from '../components/Home';
import { SneakPeak } from '../components/SneakPeak';
import { AboutCreation } from '../components/AboutCreation';
import { WhoIsBehind } from '../components/WhoIsBehind';

export const RouterPrincipal = () => {
    return (
        <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home/>} />
                    <Route path='/home' element={<Home/>} />
                    <Route path='/sneak-peak' element={<SneakPeak/>} />
                    <Route path='/about-creation' element={<AboutCreation/>} />
                    <Route path='/who-is-behind' element={<WhoIsBehind/>} />

                </Routes>
            </BrowserRouter >
    )
}
=======
import React from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { Home } from '../components/Home';
import { SneakPeak } from '../components/SneakPeak';
import { AboutCreation } from '../components/AboutCreation';
import { WhoIsBehind } from '../components/WhoIsBehind';

export const RouterPrincipal = () => {
    return (
        <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home/>} />
                    <Route path='/home' element={<Home/>} />
                    <Route path='/sneak-peak' element={<SneakPeak/>} />
                    <Route path='/about-creation' element={<AboutCreation/>} />
                    <Route path='/who-is-behind' element={<WhoIsBehind/>} />

                </Routes>
            </BrowserRouter >
    )
}
>>>>>>> 11d1d9245f927b3ce07699b71972be9301a4570c
