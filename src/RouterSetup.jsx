import React, { useEffect, useState} from 'react'
import { BrowserRouter as Router, Routes, Route, Outlet, Navigate, useNavigate } from "react-router-dom";

import { useSelector } from 'react-redux';
import {
    HomePage,
    MenuPage,
    ErrorPage
} from './modules/index'

import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';

// const ProjectWrapper = () => {
//     return (
//         <>
//             <BackToHome />
//             <Outlet />
//         </>
//     )

// }

// const ReduxCartWrapper = () => {
//     return (
//         <>
//             <Nav />
//             <Outlet />
//         </>
//     )
// }

// const ReduxAuth = ({ children }) => {
//     const { user } = useSelector(state => state.auth)
//     let navigate = useNavigate();
//     useEffect(() => {
//         if (!user) {
//             navigate('/redux/signin')
//         } else {
//             navigate('/redux/product')
//         }
//     }, [user])
//     return children
// }

const RouterSetup = () => {
    const [isOpen,setIsOpen] = useState(false)
    const toggle = ()=>{
        setIsOpen(!isOpen)
    }
    return (
        <Router>
            <Navbar isOpen={isOpen} toggle={toggle}/>
            <Sidebar isOpen={isOpen}  toggle={toggle}/>
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/menu' element={<MenuPage />} />
                <Route path='*' element={<ErrorPage />} />
            </Routes>
            {/* <Footer /> */}
        </Router>
    )
}

export default RouterSetup
