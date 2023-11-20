import React from 'react'

const ArtPage = () => {
  return (
    <div>
      <div>
      <div className=" h-[500px]  w-[1440px] bg-cover bg-[url('https://i0.wp.com/flamepot.com/wp-content/uploads/2020/01/banner-front-2.jpg?fit=1600%2C728&ssl=1')] flex items-center justify-center opacity-3 " >         
            <div className="bg-slate-700 bg-opacity-0 p-6 rounded-2xl " >
              <h1 className='text-4xl font-bold text-white'>ART</h1>
            </div>
            </div>
      <div>
       <div>
      <div className="  bg-blue-200">
      <div className="w-[1400px] mx-auto my-0 py-5 ">
        <div className="flex flex-col  text-[7rem] text-cyan-900">
          <h1 className='self-center text-4xl'>Art of Odisha</h1>
          <p className="text-center pt-5 font-normal text-xl">Odisha, often referred to as the cradle of art and culture, boasts a rich tapestry of traditional arts that have flourished for centuries. One of the most iconic forms is the classical dance Odissi, a dance form that emanates grace, storytelling, and devotion. Rooted in the sculptures adorning ancient temples, Odissi showcases intricate footwork, expressive gestures, and fluid movements that narrate mythological tales and celebrate the divine.</p>
        </div>
            <div className="grid gap-6 grid-cols-4 py-5" >
            <div className="flex flex-col gap-3 bg-white shadow-lg  rounded-lg overflow-hidden" >
                <img className='h-[240px]' src="https://www.odishalifestyle.com/wp-content/uploads/2022/02/Sand-Art-Odisha.jpg" alt="" />   
                <h1 className="text-2xl font-semibold text-center" >Sand art</h1>          
            </div>
            <div className="flex flex-col gap-3 bg-white shadow-lg  rounded-lg overflow-hidden" >
                <img className='h-[240px]' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRg7JOTXg50N048xT3QDZ-1J3iPa0QEpCYPg&usqp=CAU" alt="" />    
                <h1 className="text-2xl font-semibold text-center" >Jhoti art</h1>            
            </div>
            <div className="flex flex-col gap-3 bg-white shadow-lg  rounded-lg overflow-hidden" >
                <img className='h-[240px]' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdtTRQkiZO5fBGAO1_YZsBWWJm0B26b3AyJg&usqp=CAU" alt="" />  
                <h1 className="text-2xl font-semibold text-center" >Tribal art</h1>              
            </div>
            <div className="flex flex-col gap-3 bg-white shadow-lg  rounded-lg overflow-hidden" >
                <img className='h-[240px]' src="https://5.imimg.com/data5/MB/EW/MY-58949286/pattachitra-painting-of-radha-krishna.png" alt="" />  
                <h1 className="text-2xl font-semibold text-center" >Pattachitra art</h1>              
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

export default ArtPage
