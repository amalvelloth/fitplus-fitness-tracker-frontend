import React, { useState } from 'react';

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
                        className={`w-[50%] h-[2px] bg-black rounded-sm transition-all duration-300 origin-left translate-y-[0.45rem] ${isOpen ? '-rotate-45' : ''
                            }`}
                    ></div>
                    <div
                        className={`w-[50%] h-[2px] bg-black rounded-md transition-all duration-300 origin-center ${isOpen ? 'hidden' : ''
                            }`}
                    ></div>
                    <div
                        className={`w-[50%] h-[2px] bg-black rounded-md transition-all duration-300 origin-left -translate-y-[0.45rem] ${isOpen ? 'rotate-45' : ''
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
                        <a href="#" className='text-lg font-semibold text-black'>Dashboard</a>
                    </li>
                    <li>
                        <a href="#" className='text-lg font-semibold text-black'>Task Control</a>
                    </li>
                    <li>
                        <a href="#" className='text-lg font-semibold text-black'>Training Programs</a>
                    </li>
                    <li>
                        <a href="#" className='text-lg font-semibold text-black'>Settings</a>
                    </li>
                    <li>
                        <a href="#" className='text-lg font-semibold text-black'>Sign Out</a>
                    </li>
                </ul>
            </div>
        </>

    );
}

export default BurgerMenu;
