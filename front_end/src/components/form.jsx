import React from 'react'

function EmployeeForm() {
  return (
    <div>
      <div className='w-[60%] mx-auto border rounded-md p-5'>
        <div className='grid grid-cols-2 gap-4'>
        <div>
          <p>Name</p>
          <input className='outline-none border w-full px-2 py-1 rounded my-1' type='text' placeholder='Name' />
        </div>
        <div>
          <p>Age</p>
          <input className='outline-none border w-full px-2 py-1 rounded my-1' type='number' placeholder='Age' />
        </div>
        <div>
          <p>Education</p>
          <input className='outline-none border w-full px-2 py-1 rounded my-1' type='text' placeholder='Education' />
        </div>
        <div>
          <p>Experience</p>
          <input className='outline-none border w-full px-2 py-1 rounded my-1' type='text' placeholder='Experience' />
        </div>
        <div>
          <p>Year of graduate</p>
          <input className='outline-none border w-full px-2 py-1 rounded my-1' type='number' placeholder='Year of graduate' />
        </div>
        </div>
        <button className='border rounded-lg outline-none h-8 px-6 my-auto text-[#fff] font-[500] bg-[green] hover:bg-[#008000d7] mt-2'>Create</button>
      </div>
    </div>
  )
}

export default EmployeeForm