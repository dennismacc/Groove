import React from "react";
import "../App.css";

function Menu() {
    return (
        <>
            <aside>
                <ul>
                    <li>
                        <a className='flex items-center px-4 py-2 mt-5 text-gray-600 rounded-md hover:bg-gray-200' href="/Habits">
                            <span className='px-20 font-semibold text-2xl'>Habits</span>
                        </a>
                    </li>

                    <li>
                        <a className='flex items-center px-4 py-2 mt-5 text-gray-600 rounded-md hover:bg-gray-200' href="/Todos">
                            <span className='px-20 font-semibold text-2xl'>Todos</span>
                        </a>
                    </li>

                    <li>
                        <a className='flex items-center px-4 py-2 mt-5 text-gray-600 rounded-md hover:bg-gray-200' href="/Tags">
                            <span className='px-20 font-semibold text-2xl'>Tags</span>
                        </a>
                    </li>
                </ul>
            </aside>
        </>
    );
}

export default Menu;