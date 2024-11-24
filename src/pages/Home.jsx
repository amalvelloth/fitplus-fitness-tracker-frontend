import React from 'react'
import joggingSvg from '../assets/jogging-bro.svg' 

function Home() {
    return (
        <>
            <section className='flex relative overflow-hidden'>
                <div className="flex col h-screen w-[60%] max-md:w-[70%] justify-center items-center bg-white">

                    <div className="flex-col p-8 max-md:p-2">
                        <img src={joggingSvg} className='max-w-[500px]' alt="" /> 
                        <div className="text">
                            <h1 className='text-black font-extrabold text-5xl max-md:text-3xl max-md:text-[calc(40px+0.5vw)]'>"MAKE YOUR FITNESS YOUR DAILY GOAL"</h1>
                        </div>
                        <div className="buttons flex justify-start">
                            <button className='rounded-3xl my-5 me-2 border border-black py-2 sm:px-10 max-sm:px-4 font-bold'>Login</button>
                            <button className='rounded-3xl my-5 ms-2 border border-black py-2 sm:px-10 max-sm:px-4 font-bold'>Sign Up</button>
                        </div>
                    </div>

                </div>
                <div className="flex items-center h-screen w-[40%] max-md:w-[30%] bg-[#BAFF00] relative overflow-hidden">
                    <div className=" w-full rotate-90">
                        <h1 className="scroll-text text-4xl max-lg:text-[calc(18px+0.5vw)] absolute left-0 whitespace-nowrap border p-3 border-black ">
                            Running&emsp;Walking&emsp;Cycling&emsp;Hiking&emsp;Running&emsp;Walking&emsp;Cycling&emsp;Hiking&emsp;Running&emsp;Walking&emsp;Cycling&emsp;Hiking
                        </h1>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home