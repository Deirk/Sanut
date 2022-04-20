import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Header } from './global/header/header'
import { Home } from './views/home/home'

const RoutesApp = () => {
    return (
        <>
            <Header />
            <Routes>
                <Route exact path={'/patients'} element={<Home />} />
            </Routes>
        </>
    )
}

export default RoutesApp