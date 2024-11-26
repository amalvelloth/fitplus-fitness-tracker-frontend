import React from 'react'
import { NavLink } from 'react-router-dom'

function DesktopMenu() {
    return (
        <div
            className={` max-lg:hidden h-screen min-w-fit flex items-center top-0 -left-0  bg-[#BAFF00] z-10 transition-transform duration-500 translate-x-0'
                    }`}
        >
            <ul className='flex flex-col items-start justify-center h-full '>

                <li className='w-full py-4 px-12  hover:bg-[#27282C] text-black hover:text-white'>
                    <NavLink to="/dashboard" className="text-lg font-bold" activeClassName="underline">
                        Dashboard
                    </NavLink>
                </li>
                <li className='w-full py-4 px-12  hover:bg-[#27282C] text-black hover:text-white'>
                    <NavLink to="/taskcontrol" className="text-lg font-bold" activeClassName="underline">
                        Task Control
                    </NavLink>
                </li>
                <li className='w-full py-4 px-12  hover:bg-[#27282C] text-black hover:text-white'>
                    <NavLink to="/trainingprograms" className="text-lg font-bold" activeClassName="underline">
                        Training Programs
                    </NavLink>
                </li>
                <li className='w-full py-4 px-12  hover:bg-[#27282C] text-black hover:text-white'>
                    <NavLink to="/settings" className="text-lg font-bold" activeClassName="underline">
                        Settings
                    </NavLink>
                </li>
                <li className='w-full py-4 px-12 hover:bg-[#27282C] text-black hover:text-white'>
                    <NavLink to="/signout" className="text-lg font-bold" activeClassName="underline">
                        Sign Out
                    </NavLink>
                </li>

            </ul>
        </div>
    )
}

export default DesktopMenu