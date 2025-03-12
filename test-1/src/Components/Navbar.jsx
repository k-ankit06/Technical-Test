import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav className='bg-red-500 p-4 text-white flex gap-4'>
            <Link to='/' className='hover:underline'>Home</Link>
            <Link to='/dashboard' className='hover:underline'>Dashboard</Link>
        </nav>
    );
}

export default Navbar;