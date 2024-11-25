import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

function BurgerMenu() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(prevState => !prevState);
    };

    return (
        /* From Uiverse.io by Shubh0408 */
        <>
            <label
                className="w-10 h-8 absolute z-50 left-3 cursor-pointer flex items-center justify-center"
                onClick={toggleMenu}
                aria-expanded={isOpen}
                aria-label="Toggle Navigation"
            >
                <div className="w-12 h-12 cursor-pointer flex flex-col items-center justify-center">
                    <input className="hidden peer" type="checkbox" checked={isOpen} onChange={toggleMenu} />
                    <div
                        className={`w-[70%] h-[2px] bg-black rounded-sm transition-all duration-300 origin-left translate-y-[0.5rem] ${isOpen ? '-rotate-45' : ''
                            }`}
                    ></div>
                    <div
                        className={`w-[70%] h-[2px] bg-black rounded-md transition-all duration-300 origin-center ${isOpen ? 'hidden' : ''
                            }`}
                    ></div>
                    <div
                        className={`w-[70%] h-[2px] bg-black rounded-md transition-all duration-300 origin-left -translate-y-[0.5rem] ${isOpen ? 'rotate-45' : ''
                            }`}
                    ></div>
                </div>
            </label>


            <div
                className={`absolute h-screen flex items-center p-6 top-0 left-0  bg-[#BAFF00] z-10 transition-transform duration-500 ${isOpen ? 'translate-x-0' : '-translate-x-full'
                    }`}
            >
                <ul className='flex flex-col items-start justify-center h-full space-y-8 px-6'>
                    <li>
                        <NavLink
                            to="/dashboard"
                            className="text-lg font-bold text-black"
                            onClick={() => setIsOpen(false)}
                            activeClassName="underline"
                        >
                            Dashboard
                        </NavLink>                    </li>
                    <li>
                        <NavLink
                            to="/taskcontrol"
                            className="text-lg font-bold text-black"
                            onClick={() => setIsOpen(false)}
                            activeClassName="underline"
                        >
                            Task Control
                        </NavLink>                    </li>
                    <li>
                        <NavLink
                            to="/trainingprograms"
                            className="text-lg font-bold text-black"
                            onClick={() => setIsOpen(false)}
                            activeClassName="underline"
                        >
                            Training Programs
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/settings"
                            className="text-lg font-bold text-black"
                            onClick={() => setIsOpen(false)}
                            activeClassName="underline"
                        >
                            Settings
                        </NavLink>                    </li>
                    <li>
                        <NavLink
                            to="/signout"
                            className="text-lg font-bold text-black"
                            onClick={() => setIsOpen(false)}
                            activeClassName="underline"
                        >
                            Sign Out
                        </NavLink>                    </li>
                </ul>
            </div>
        </>

    );
}

export default BurgerMenu;
