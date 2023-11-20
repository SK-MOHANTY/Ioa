import React from 'react'

const CraftPage = () => {
  return (
    <div>
      <div className=" h-[500px]  w-[1440px] bg-cover bg-[url('https://odishatourisms.com/wp-content/uploads/2019/07/indian-traditional.jpg')] flex items-center justify-center opacity-3 " >         
            <div className="bg-slate-700 bg-opacity-0 p-6 rounded-2xl " >
              <h1 className='text-4xl font-bold text-white'>CRAFTS</h1>
            </div>
            </div>
      <div>
       <div>
      <div className="  bg-blue-200">
      <div className="w-[1400px] mx-auto my-0 py-5 ">
        <div className="flex flex-col  text-[7rem] text-cyan-900">
          <h1 className='self-center text-4xl'>Hand crafts of Odisha</h1>
          <p className="text-center pt-5 font-normal text-xl">Odisha, a land steeped in artistic traditions, is renowned for its exquisite and diverse crafts that have withstood the test of time. One of the most iconic crafts of the region is the intricate art of Pattachitra painting. Originating from the temple town of Puri, Pattachitra involves intricate storytelling through vibrant and detailed paintings on cloth. The themes often revolve around mythological tales, religious motifs, and folklore, showcasing the artistic prowess and storytelling skills of the artisans.</p>
        </div>
            <div className="grid gap-6 grid-cols-4 py-5" >
            <div className="flex flex-col gap-3 bg-white shadow-lg  rounded-lg overflow-hidden" >
                <img className='h-[240px]' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJqmBTFDph2wNewLHAiSMl3U_calOtGk6QFw&usqp=CAU" alt="" />     
                <h1 className="text-2xl font-semibold text-center" >Chandua</h1>          
            </div>
            <div className="flex flex-col gap-3 bg-white shadow-lg  rounded-lg overflow-hidden" >
                <img className='h-[240px]' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTM8ct8eyXK_u3seNWK5Oxw-lZgKbgZKqThbQ&usqp=CAU" alt="" />    
                <h1 className="text-2xl font-semibold text-center" >Pata chitra</h1>            
            </div>
            <div className="flex flex-col gap-3 bg-white shadow-lg  rounded-lg overflow-hidden" >
                <img className='h-[240px]' src="https://qph.cf2.quoracdn.net/main-qimg-085cb22aa70e6bda1ac5de14d932bf61-lq" alt="" />  
                <h1 className="text-2xl font-semibold text-center" >Coir craft</h1>              
            </div>
            <div className="flex flex-col gap-3 bg-white shadow-lg  rounded-lg overflow-hidden" >
                <img className='h-[240px]' src="https://www.ibef.org/experienceindia/images/bamboo-products/bambo-3.png" alt="" />  
                <h1 className="text-2xl font-semibold text-center" >Bamboo crafts</h1>              
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

export default CraftPage