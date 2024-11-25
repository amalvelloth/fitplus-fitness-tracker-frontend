import React, { useState } from 'react';
import JoggingPNG from '../assets/jogging-bro.png';
import Modal from 'react-modal';
import { useNavigate } from 'react-router-dom';

Modal.setAppElement('#root');

function Home() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const navigate = useNavigate(); 
    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    const handleLoginSubmit = (e) => {
        e.preventDefault();
        navigate('/dashboard');
        closeModal();
    }

    return (
        <>
            <section className="flex relative overflow-hidden">
                <div className="flex col h-screen w-[60%] max-md:w-[70%] justify-center items-center bg-white">
                    <div className="flex-col p-8 max-md:p-2">
                        <img src={JoggingPNG} className="w-full max-w-[400px]" alt="Jogging" />
                        <div className="text">
                            <h1 className="text-black font-extrabold text-5xl max-md:text-3xl max-md:text-[calc(40px+0.5vw)]">
                                "MAKE YOUR FITNESS YOUR DAILY GOAL"
                            </h1>
                        </div>
                        <div className="buttons flex justify-start">
                            {/* Add onClick event to open modal */}
                            <button
                                onClick={openModal}
                                className="rounded-3xl my-5 me-2 border border-black py-2 sm:px-10 max-sm:px-4 font-bold"
                            >
                                Login
                            </button>
                            <button className="rounded-3xl my-5 ms-2 border border-black py-2 sm:px-10 max-sm:px-4 font-bold">
                                Sign Up
                            </button>
                        </div>
                    </div>
                </div>
                <div className="flex items-center h-screen w-[40%] max-md:w-[30%] bg-[#BAFF00] relative overflow-hidden">
                    <div className="w-full rotate-90">
                        <h1 className="scroll-text text-4xl max-lg:text-[calc(18px+0.5vw)] absolute left-0 whitespace-nowrap border p-3 border-black">
                            Running&emsp;Walking&emsp;Cycling&emsp;Hiking&emsp;Running&emsp;Walking&emsp;Cycling&emsp;Hiking&emsp;Running&emsp;Walking&emsp;Cycling&emsp;Hiking
                        </h1>
                    </div>
                </div>

                {/* Modal for Login */}
                <div className="relative">
                    <Modal
                        isOpen={isModalOpen}
                        onRequestClose={closeModal}
                        contentLabel="Login Modal"
                        className="modal-content w-full max-sm:w-4/5 max-w-md p-6 bg-white rounded-2xl transform -translate-x-1/2 -translate-y-1/2 fixed top-1/2 left-1/2"
                        overlayClassName="modal-overlay fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
                    >

                        <h2 className="font-bold text-xl text-center">Login</h2>
                        <button
                            onClick={closeModal}
                            className="close-button absolute top-0 right-0 m-4 text-red-500 hover:text-gray-800"
                        >
                            Close
                        </button>

                        <form onSubmit={handleLoginSubmit} className="flex flex-col gap-4 mt-4">
                            <input type="email" placeholder="Email" className="p-2 border border-gray-300 rounded" />
                            <input type="password" placeholder="Password" className="p-2 border border-gray-300 rounded" />
                            <button type="submit" className="py-2 bg-[#BAFF00] text-black rounded">Login</button>
                        </form>

                    </Modal>
                </div>

            </section>


        </>
    );
}

export default Home;
