import React from 'react'

const Heritage = () => {
  return (
    <div>
      <div className=" h-[500px]  w-[1440px] bg-cover bg-[url('https://odishatourisms.com/wp-content/uploads/2019/05/banner_odisha.jpg')] flex items-center justify-center opacity-3 " >         
            <div className="bg-slate-700 bg-opacity-0 p-6 rounded-2xl " >
              <h1 className='text-4xl font-bold text-white'>HERITAGE</h1>
              
            </div>
            </div>
      <div>
      <div>
       <div>
      <div className="  bg-blue-200">
      <div className="w-[1400px] mx-auto my-0 py-5 ">
        <div className="flex flex-col  text-[7rem] text-cyan-900">
          <h1 className='self-center text-4xl'>Heritage of Odisha</h1>
          <p className="text-center pt-5 font-normal text-xl">Odisha, nestled on the eastern coast of India, stands as a testament to the magnificence of its cultural and architectural heritage. The state is adorned with architectural marvels that echo the grandeur of its historical past. The Konark Sun Temple, a UNESCO World Heritage Site, is a mesmerizing testament to Odisha's architectural prowess. Built in the 13th century, this colossal chariot-shaped temple dedicated to the Sun God is adorned with intricately carved stone sculptures and serves as an iconic symbol of Odisha's rich heritage.</p>
        </div>
            <div className="grid gap-6 grid-cols-4 py-5" >
            <div className="flex flex-col gap-3 bg-white shadow-lg  rounded-lg overflow-hidden" >
                <img className='h-[240px]' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrRR9nfWns0nJn41WnzDQYnH03JtB32e8wlQiwHPZN_fwyrf8Q-m6KVBfS-dKOZEkoUBE&usqp=CAU" alt="" />     
                <h1 className="text-2xl font-semibold text-center" >Konark Temple</h1>          
            </div>
            <div className="flex flex-col gap-3 bg-white shadow-lg  rounded-lg overflow-hidden" >
                <img className='h-[240px]' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPB2ibWMRFrsjndjmIc0VeVOJQFw3jO7I9jQ&usqp=CAU" alt="" />    
                <h1 className="text-2xl font-semibold text-center" >Mukteswara Temple</h1>            
            </div>
            <div className="flex flex-col gap-3 bg-white shadow-lg  rounded-lg overflow-hidden" >
                <img className='h-[240px]' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSFIYs8UCAbl0_B_u3tJ1jM7iuRG0zQH0rbbYvQJPyVzNxBYIrVzDGsNf0TqPnaUC-ApA&usqp=CAU" alt="" />  
                <h1 className="text-2xl font-semibold text-center" >Dhauli santi stupa</h1>              
            </div>
            <div className="flex flex-col gap-3 bg-white shadow-lg  rounded-lg overflow-hidden" >
                <img className='h-[240px]' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRf3QrxYpf18QvcAIk0FRB0v5mOiHD--XD0FRxaUhB0oAvfHAqEyWW8n8mnxV0YP8g7-FQ&usqp=CAU" alt="" />  
                <h1 className="text-2xl font-semibold text-center" >Khandagiri Temple</h1>              
            </div>
            </div>
            </div>
            </div>
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

export default Heritage