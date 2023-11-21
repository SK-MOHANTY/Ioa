
import contactImage from "../assets/con3.jpeg"

const ContactPage = () => {
  return (
    <div> <div className=' h-screen bg-blue-200 flex items-center justify-center ' >

    <div className=' w-[800px] bg-white p-7 rounded-lg flex ' >
        <div className='w-[50%] flex items-center justify-center ' >
            <img className='h-[100%s]' src={contactImage} alt="" srcset="" />
        </div>
        <div className='w-[50%] flex flex-col gap-5 ' >
            <h3 className='font-bold text-2xl'>CONTACT US</h3>
            <form action="" className='flex flex-col gap-4' >
                <input className='border px-2 py-4 bg-slate-50 rounded-md '  type="text" name="name" placeholder='Name' />
                <input className='border px-2 py-4 bg-slate-50 rounded-md '  type="email" name="name" placeholder='Email' />
                <textarea className='border py-1 px-2 bg-slate-50 rounded-md '  name="message" cols="30" rows="5" placeholder='Type Message' ></textarea>
                <input type="submit" className='bg-blue-900 px-5 py-3 text-white rounded-md font-medium cursor-pointer'  value="Submit" />
            </form>
        </div>
    </div>
    
</div>
<div className="py-12 bg-gray-600" >
        <div className="w-[1400px] mx-auto my-0 ">
            <div className="flex flex-col items-center gap-2" >
                <h4 className=" text-5xl text-white font-semibold " >Irish Odia Association</h4>
                <p className="text-2xl text-white font-medium" >Being Good Being Odia</p>
                <div className="flex mt-8 gap-5" >
                    <button className=" px-8 py-3 bg-cyan-700 text-white rounded font-semibold text-lg shadow-xl " >Donation</button>
                    <button className=" px-8 py-3 bg-cyan-700 text-white rounded font-semibold text-lg shadow-xl " >Contact</button>
                </div>
            </div>
            <hr className="bg-white mt-10" />
           <div className="flex items-center justify-between" >
            <p className="text-white mt-3" >© Copyright 2023. All Rights Reserved</p>
            <div className="justify-between flex gap-5 text-xl text-white">
            <div><i class="fa fa-facebook-official"></i></div>
           <div><i class="fa fa-twitter-square"></i></div>
           <div><i class="fa fa-whatsapp"></i></div>
           <div><i class="fa fa-envelope"></i></div>
            </div>
           </div>
        </div>
    </div>
</div>

  )
}

export default ContactPage