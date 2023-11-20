import React from 'react'

const PlaceToVisitPage = () => {
  return (
    <div>
      <div className=" h-[500px]  w-[1440px] bg-cover bg-[url('https://odishatourisms.com/wp-content/uploads/2019/07/Tourist_guide_banner.jpg')] flex items-center justify-center opacity-3 " >         
            <div className="bg-slate-700 bg-opacity-0 p-6 rounded-2xl " >
              <h1 className='text-4xl font-bold text-white'>visiting place</h1>
            </div>
            </div>
      <div>
      <div>
       <div>
      <div className="  bg-blue-200">
      <div className="w-[1400px] mx-auto my-0 py-5 ">
        <div className="flex flex-col  text-[7rem] text-cyan-900">
          <h1 className='self-center text-4xl'>Place to visit in Odisha</h1>
          <p className="text-center pt-5 font-normal text-xl">Odisha, a land of diverse landscapes and rich cultural heritage, is adorned with numerous famous places that captivate the hearts of visitors. The Konark Sun Temple, a UNESCO World Heritage Site, is an architectural marvel that stands as a testament to Odisha's historical and artistic legacy. This 13th-century temple, shaped like a colossal chariot, is adorned with intricate stone carvings depicting mythological narratives and celestial beings, making it a must-visit destination for art enthusiasts and history lovers.</p>
        </div>
            <div className="grid gap-6 grid-cols-4 py-5" >
            <div className="flex flex-col gap-3 bg-white shadow-lg  rounded-lg overflow-hidden" >
                <img className='h-[240px]' src="https://images.odishatv.in/uploadimage/library/16_9/16_9_5/IMAGE_1645674093.jpg" alt="" />     
                <h1 className="text-2xl font-semibold text-center" >Puri temple</h1>          
            </div>
            <div className="flex flex-col gap-3 bg-white shadow-lg  rounded-lg overflow-hidden" >
                <img className='h-[240px]' src="https://images.newindianexpress.com/uploads/user/imagelibrary/2020/1/25/w1200X800/Konark_Sun_temple.jpg" alt="" />    
                <h1 className="text-2xl font-semibold text-center" >Konark temple</h1>            
            </div>
            <div className="flex flex-col gap-3 bg-white shadow-lg  rounded-lg overflow-hidden" >
                <img className='h-[240px]' src="https://incredibleodisha.in/wp-content/uploads/2023/06/Dhauli-Giri-Hills-Shanti-Stupa-1200x900.webp" alt="" />  
                <h1 className="text-2xl font-semibold text-center" >Dhauli temple</h1>              
            </div>
            <div className="flex flex-col gap-3 bg-white shadow-lg  rounded-lg overflow-hidden" >
                <img className='h-[240px]' src="https://www.tripvaani.com/wp-content/uploads/2020/07/Lingaraja-Temple.jpg" alt="" />  
                <h1 className="text-2xl font-semibold text-center" >Lingaraj temple</h1>              
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

export default PlaceToVisitPage