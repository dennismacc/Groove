// Import file dependencies
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Menu from '../components/Menu';
// import habit components 
import HabitList from '../components/Habits';
import AddHabit from '../components/Habits/addHabit';

// Display landing page
function Dashboard() {


    return (
        <>
            <div className='flex-column bg-lightOrange h-fit-content w-fit-content'>
                <Navbar />
                <div className="flex ">
                    <div className='flex flex-col w-max h-[75vh] px-8 py-8 overflow-y-auto rounded-2xl bg-darkOrange m-20'>
                        <Menu />
                    </div>
                    <div className='flex flex-col'>
                        <div className='flex content-end mt-10'>
                            <AddHabit />
                        </div>
                        <div className='align-center mt-12 w-full h-full'>
                            <HabitList />
                        </div>
                    </div>
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