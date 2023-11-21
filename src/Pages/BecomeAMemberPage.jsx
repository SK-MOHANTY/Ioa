import React from 'react'

const BecomeAMemberPage = () => {
  return (
    <div className=' h-screen bg-blue-200 flex items-center justify-center ' >
       <div className=' w-[800px] bg-white p-7 rounded-lg flex '>
          <div className='w-[50%] flex items-center justify-center ' >
            <img className='h-[100%s]' src="https://www.allen.ac.in/ace2324/assets/images/register.png" alt="" srcset="" />
              </div>
        <div className='w-[50%] flex flex-col gap-5 ' >
            <h3 className='font-bold text-2xl'>REGISTER NOW</h3>
            <form action="" className='flex flex-col gap-4' >
                <input className='border px-2 py-4 bg-slate-50 rounded-md '  type="text" name="name" placeholder='Name' />
                <input className='border px-2 py-4 bg-slate-50 rounded-md '  type="email" name="phone no." placeholder='Phone no.' />
                <input className='border px-2 py-4 bg-slate-50 rounded-md '  type="email" name="name" placeholder='Email' />
                <input className='border px-2 py-4 bg-slate-50 rounded-md '  type="Password" name="name" placeholder='Password' />
                
                <input type="submit" className='bg-blue-900 px-5 py-3 text-white rounded-md font-medium cursor-pointer'  value="Submit" />
            </form>
        </div>
    </div>
</div>
  )
}

export default BecomeAMemberPage