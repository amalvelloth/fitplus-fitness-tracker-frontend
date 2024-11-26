import React from 'react';
import DesktopMenu from '../components/DesktopMenu';

function Dashboard() {
  return (
    <>
      <section className="flex">
        <DesktopMenu />
        <div className="h-screen w-full relative flex items-center bg-[#27282C]">
          <div className="flex w-full h-full items-center justify-start px-8">
            <div className="greetings">
              <h1 className="text-white text-2xl">
                Good morning <span className="font-extrabold text-4xl">AMAL V</span>
              </h1>
              <h2 className="text-white text-4xl font-semibold mt-2">Welcome back! 🎉</h2>
            </div>
            <div className="avatar bg-white w-24 h-24 rounded-full overflow-hidden">
              <img
                className="object-cover w-full h-full"
                src="https://i.pinimg.com/736x/56/28/a6/5628a66967df6318515fcbe7e912e274--cr-ronaldo-cristiano-ronaldo.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Dashboard;
