import React, { useState } from 'react';

function BurgerMenu() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(prevState => !prevState);
    };

    return (
        /* From Uiverse.io by Shubh0408 */
        <label className="absolute left-0  w-10 h-8 cursor-pointer"> 
            <div
                class="w-12 h-12 cursor-pointer flex flex-col items-center justify-center"
            >
                <input class="hidden peer" type="checkbox" />
                <div
                    class="w-[50%] h-[2px] bg-black rounded-sm transition-all duration-300 origin-left translate-y-[0.45rem] peer-checked:rotate-[-45deg]"
                ></div>
                <div
                    class="w-[50%] h-[2px] bg-black rounded-md transition-all duration-300 origin-center peer-checked:hidden"
                ></div>
                <div
                    class="w-[50%] h-[2px] bg-black rounded-md transition-all duration-300 origin-left -translate-y-[0.45rem] peer-checked:rotate-[45deg]"
                ></div>
            </div>
        </label>

    );
}

export default BurgerMenu;
