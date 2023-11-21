import React from 'react'

const SignIn = () => {
  return (
    <div className=' h-screen bg-blue-200 flex items-center justify-center ' >
       <div className=' w-[800px] bg-white p-7 rounded-lg flex '>
          <div className='w-[50%] flex items-center justify-center ' >
            <img className='h-[100%s]' src="https://img.freepik.com/free-vector/access-control-system-abstract-concept_335657-3180.jpg" alt="" srcset="" />
              </div>
        <div className='w-[50%] flex flex-col gap-5 ' >
            <h3 className='font-bold text-2xl'>MEMBER LOGIN</h3>
            <form action="" className='flex flex-col gap-4' >
                
                <input className='border px-2 py-4 bg-slate-50 rounded-md '  type="email" name="phone no." placeholder='Phone no./Email' />
                <input className='border px-2 py-4 bg-slate-50 rounded-md '  type="Password" name="name" placeholder='Password' />
                <h2 className='cursor-pointer underline'>Forgot Password?</h2>
                <input type="Sign In" className='bg-blue-900 px-5 py-3 text-white rounded-md font-medium text-center cursor-pointer'  value="Sign In" />
            </form>
        </div>
    </div>
</div>
  )
}

export default SignIn