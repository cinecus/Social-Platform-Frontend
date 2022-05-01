import React from 'react'
import { NavLink as Link } from 'react-router-dom'
import {FaBars,FaGithub} from 'react-icons/fa'
import styled from 'styled-components'

const Navbar = ({toggle}) => {
  return (
    <Nav>
    <NavLink to='/'>
        <div className='logo'>
            LOGO
    </div>
    </NavLink>
    <Bars onClick={toggle}/>
    <NavMenu>
        <NavLink  to='/'>
            Section 1
        </NavLink>
        <NavLink to='/' >
            Section 2
        </NavLink>
        <NavLink  to='/'>
            Section 3
        </NavLink>
        <NavLink to='/'  >
            Section 4
        </NavLink>
        <NavLink to='/' >
            Section 5
        </NavLink>
    </NavMenu>
    <NavBtn>
        <NavBtnLink href='https://github.com/cinecus' target='_blank'>
            <FaGithub size={18}/>
                My Github
        </NavBtnLink>
    </NavBtn>

    
</Nav>
  )
}

export default Navbar

const Nav = styled.nav`
  /* background:linear-gradient(90deg, rgba(174,214,238,1) 28%, rgba(155,148,233,1) 84%); */
    background:#000;
    height:80px;
    display:flex;
    justify-content:space-around;
    padding:0.5rem calc((100vw - 1800px)/2);
    z-index:10;
    /* position: fixed; */
    top: 0;
    overflow: hidden;
    width: 100vw;
    /* @media screen and (max-width: 768px){
        top:100;
    } */
`

const NavLink = styled(Link)`
    color:#fff !important;
    display:flex;
    align-items:center;
    text-decoration:none;
    padding:0 1.5rem;
    /* height:100%; */
    cursor: pointer;

    &:hover {
        color:blueviolet !important;
    }
    img{
    height:2.8rem;
    width:2.8rem;
    }
`

const Bars = styled(FaBars)`    
    display:none;
    color: #fff;

    @media screen and (max-width: 768px){
        display:block;
        position:absolute;
        top:0;
        right:0;
        transform:translate(-100%,75%);
        font-size:1.8rem;
        cursor: pointer;
    }
`

const NavMenu = styled.div`
    display:flex;
    align-items:center;
    margin-right:-24px;

    @media screen and (max-width: 768px){
        display:none;
    }
`

const NavBtn = styled.nav`
    display:flex;
    align-items:center;
    margin-right:24px;

    @media screen and (max-width: 768px){
        display:none;
    }
`

const NavBtnLink = styled.a`
    border-radius:4px;
    background:blueviolet;
    padding:10px 22px;
    color:#fff;
    border:none;
    cursor: pointer;
    transition:all 0.2 ease-in-out;
    text-decoration:none;
    display:flex;
    justify-content:center;
    align-items:center;
    gap:0.5rem;
    &:hover{
        transition:all 0.2s ease-in-out;
        background:#fff;
        color:#010606;
    }
`
