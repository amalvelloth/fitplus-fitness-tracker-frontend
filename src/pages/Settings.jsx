import React from 'react'
import DesktopMenu from '../components/DesktopMenu'

function Settings() {
  return (
    <section className='flex'>
      <DesktopMenu />
      <div className='h-screen w-full flex items-center justify-center bg-neutral-900'>

        <div className="flex items-center w-full justify-around mx-10">
          <h1 className='text-white text-4xl max-sm:text-base'>Enable / Disable Dark Mode</h1>
          <label
            class="relative inline-block h-8 w-14 max-sm:h-6 max-sm:w-12 cursor-pointer rounded-full bg-gray-300 transition [-webkit-tap-highlight-color:_transparent] has-[:checked]:bg-black has-[:checked]:border-[0.5px]"
          >
            <input class="peer sr-only" id="AcceptConditions" type="checkbox" />
            <span
              class="absolute inset-y-0 start-0 m-1 size-6 max-sm:size-4 rounded-full bg-gray-300 ring-[6px] ring-inset ring-white transition-all peer-checked:start-8 peer-checked:w-2 peer-checked:bg-white peer-checked:ring-transparent"
            ></span>
          </label>
        </div>

      </div>
    </section>
  )
}

export default Settings