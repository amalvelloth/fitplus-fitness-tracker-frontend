import React, { useState } from 'react';
import JoggingPNG from '../assets/jogging-bro.png';
import Modal from 'react-modal';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


Modal.setAppElement('#root');

function Home() {
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()



    const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
    const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);
    const navigate = useNavigate();

    const openLoginModal = () => setIsLoginModalOpen(true);
    const closeLoginModal = () => setIsLoginModalOpen(false);

    const openRegisterModal = () => setIsRegisterModalOpen(true);
    const closeRegisterModal = () => setIsRegisterModalOpen(false);


    const handleLoginSubmit = async (e) => {
        e.preventDefault();

        // Check if the form inputs are not empty
        if (!email || !password) {
            toast.info("Please fill in both email and password fields.");
            return;
        }

        try {
            const response = await axios.post('http://localhost:3001/login', { email, password });

            if (response.data === "Success") {
                console.log("Login successful:", response.data);
                toast.success("Login successful!", {
                    position: "top-center",
                    autoClose: 2000,
                    closeOnClick: true,
                    pauseOnHover: true,
                });
                navigate('/dashboard');
                closeLoginModal();
                setEmail('');
                setPassword('');
            } else {
                console.error("Login failed:", response.data);
                toast.error("Incorrect email or password.");
            }
        } catch (error) {
            console.error("Login error:", error.response?.data || error.message);
            toast.error("An error occurred during login. Please try again.", {
                position: "top-center"
            })
        }
    };






    const handleRegisterSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3001/register', {
                name,
                email,
                password
            });

            console.log("Registration successful:", response.data);
            navigate('/');
            closeRegisterModal();

            setName('');
            setEmail('');
            setPassword('');
        } catch (error) {
            console.error("Registration failed:", error.response?.data || error.message);
        }
    };



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
                            <button
                                onClick={openLoginModal}
                                className="rounded-3xl my-5 me-2 border border-black py-2 sm:px-10 max-sm:px-4 font-bold"
                            >
                                Login
                            </button>
                            <button
                                onClick={openRegisterModal}
                                className="rounded-3xl my-5 ms-2 border border-black py-2 sm:px-10 max-sm:px-4 font-bold"
                            >
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
                <Modal
                    isOpen={isLoginModalOpen}
                    onRequestClose={closeLoginModal}
                    contentLabel="Login Modal"
                    className="modal-content w-full max-sm:w-4/5 max-w-md p-6 bg-white rounded-2xl transform -translate-x-1/2 -translate-y-1/2 fixed top-1/2 left-1/2"
                    overlayClassName="modal-overlay fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
                >
                    <h2 className="font-bold text-xl text-center">Login</h2>
                    <button
                        onClick={closeLoginModal}
                        className="close-button absolute top-0 right-0 m-4 text-red-500 hover:text-gray-800"
                    >
                        Close
                    </button>
                    <form onSubmit={handleLoginSubmit} className="flex flex-col gap-4 mt-4">
                        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} className="p-2 border border-gray-300 rounded" />
                        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} className="p-2 border border-gray-300 rounded" />
                        <button type="submit" className="py-2 bg-[#BAFF00] text-black rounded">Login</button>
                    </form>
                </Modal>

                {/* Modal for Register */}
                <Modal
                    isOpen={isRegisterModalOpen}
                    onRequestClose={closeRegisterModal}
                    contentLabel="Register Modal"
                    className="modal-content w-full max-sm:w-4/5 max-w-md p-6 bg-white rounded-2xl transform -translate-x-1/2 -translate-y-1/2 fixed top-1/2 left-1/2"
                    overlayClassName="modal-overlay fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
                >
                    <h2 className="font-bold text-xl text-center">Sign Up</h2>
                    <button
                        onClick={closeRegisterModal}
                        className="close-button absolute top-0 right-0 m-4 text-red-500 hover:text-gray-800"
                    >
                        Close
                    </button>
                    <form onSubmit={handleRegisterSubmit} className="flex flex-col gap-4 mt-4">
                        <input type="text" placeholder="Enter Name" value={name} onChange={(e) => setName(e.target.value)} className="p-2 border border-gray-300 rounded" />
                        <input type="email" placeholder="Enter Email" value={email} onChange={(e) => setEmail(e.target.value)} className="p-2 border border-gray-300 rounded" />
                        <input type="password" placeholder="Enter Password" value={password} onChange={(e) => setPassword(e.target.value)} className="p-2 border border-gray-300 rounded" />
                        <button type="submit" className="py-2 bg-[#BAFF00] text-black rounded">Sign Up</button>
                    </form>
                </Modal>
            </section>
            <ToastContainer autoClose={2000} theme='colored' />
        </>
    );
}

export default Home;
