// Import file dependencies
import React from 'react';
import logoutUser from '../components/LogoutUser';
import { Link } from 'react-router-dom';

// Display landing page
function Dashboard() {
    return (
        <>
        <div className='flex-column bg-lightOrange h-[100vh] w-[100vw]'>
            <nav className='flex-row justify-end space-between bg-lightBlue p-2'>
                <a href="/Dashboard">🏠</a>
                <button onClickCapture={logoutUser} className='flex-column justify-right align-right'>logout user</button>
            </nav>
            <div className="flex-column justify-left align-left min-100-vh">
                <ul>
                    <li>
                        <Link to="/Habits">Habits</Link>
                    </li>
                    <li>
                        <Link to="/Todos">Todos</Link>
                    </li>                                      
                    <li>
                        <Link to="/Tags">Tags</Link>
                    </li>
                </ul>
            </div>
        </div>
        </>
    );
}

export default Dashboard;


// Display header with home icon and logout button

// Display side menu

// Display current date

// Display logged in users name

// Todos: button to view all todos

// Habits: button to view all habits

// Tags: button to view all tags

// Display Middle body withing landing page

// Button to add new habit

// Button to add new todo