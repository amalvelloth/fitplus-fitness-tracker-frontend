import React from 'react'
import DesktopMenu from '../components/DesktopMenu'

function TaskControl() {
  return (
    <section className='flex'>
      <DesktopMenu/>
      <div className='h-screen w-full flex items-center justify-center bg-[#27282C]'>
        <h1 className='text-white text-4xl'>Task Control</h1>
      </div>
    </section>
  )
}

export default TaskControl