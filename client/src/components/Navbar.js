import React from 'react';
import { Link } from 'react-router-dom';
import logoutUser from '../components/LogoutUser';
import "../App.css";

function Navbar () {
    return (
      <nav className='flex items-center justify-between flex-wrap bg-lightBlue p-4'>
        <Link to="/Dashboard/:userId" className='flex items-center flex-shrink-0 mr-6'>
          <img src={require('../assets/bus.jpeg')} alt='logo' className='w-32 h-22 animate-bounce' />
        </Link>
        <h1 className='flex text-3xl text-white shadow-darkBlue font-bold font-mono animate-bounce'>🌼 Let's Groove 🌸</h1>
        <button onClickCapture={logoutUser} className='inline-block animate-bounce text-lg px-5 py-3 leading-none border rounded text-white border-white hover:border-transparent hover:text-lightBlue hover:bg-white mt-4 md:mt-0'>Logout</button>
      </nav>
    );
}

export default Navbar;
