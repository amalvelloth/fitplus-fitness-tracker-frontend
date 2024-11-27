import React from 'react'
import { NavLink } from 'react-router-dom'

function DesktopMenu() {
    return (
        <div
            className={` max-lg:hidden h-screen min-w-fit flex items-center top-0 -left-0  bg-[#BAFF00] z-10 transition-transform duration-500 translate-x-0'
                    }`}
        >
            <ul className='flex flex-col items-start justify-center h-full '>

                <NavLink to="/dashboard" className="w-full text-lg font-bold" activeClassName="underline">
                    <li className='w-full py-4 px-12  hover:bg-neutral-900 text-black hover:text-white'>
                        Dashboard
                    </li>
                </NavLink>

                <NavLink to="/taskcontrol" className="w-full text-lg font-bold" activeClassName="underline">
                    <li className='w-full py-4 px-12  hover:bg-neutral-900 text-black hover:text-white'>
                        Task Control
                    </li>
                </NavLink>

                <NavLink to="/trainingprograms" className="w-full text-lg font-bold" activeClassName="underline">
                    <li className='w-full py-4 px-12  hover:bg-neutral-900 text-black hover:text-white'>
                        Training Programs
                    </li>
                </NavLink>

                <NavLink to="/settings" className="w-full text-lg font-bold" activeClassName="underline">
                    <li className='w-full py-4 px-12  hover:bg-neutral-900 text-black hover:text-white'>

                        Settings
                    </li>
                </NavLink>

                <NavLink to="/signout" className="w-full text-lg font-bold" activeClassName="underline">
                    <li className='w-full py-4 px-12 hover:bg-neutral-900 text-black hover:text-white'>
                        Sign Out
                    </li>
                </NavLink>

            </ul>
        </div >
    )
}

export default DesktopMenu