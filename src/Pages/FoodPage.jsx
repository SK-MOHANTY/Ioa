import React from 'react'

const FoodPage = () => {
  return (
    <div>
      <div className=" h-[500px]  w-[1440px] bg-cover bg-[url('https://www.fabhotels.com/blog/wp-content/uploads/2022/07/1400x600-Odisha-min.jpg')] flex items-center justify-center opacity-3 " >         
            <div className="bg-slate-700 bg-opacity-0 p-6 rounded-2xl " >
              <h1 className='text-4xl font-bold text-white'>Food</h1>
            </div>
            </div>
       <div>
      <div className="  bg-blue-200">
      <div className="w-[1400px] mx-auto my-0 py-5 ">
        <div className="flex flex-col  text-[7rem] text-cyan-900">
          <h1 className='self-center text-4xl'>Famous foods of Odisha</h1>
      <p className=" font-light text-xl text-center pt-5 ">Odisha, a state with a diverse and delectable culinary heritage, boasts an array of famous foods that tantalize the taste buds and reflect the richness of its culture. One such iconic dish is the renowned Odia delicacy, Dalma. A comforting and wholesome dish, Dalma is a lentil-based curry made with vegetables like pumpkin, raw banana, and brinjal, flavored with mustard oil and seasoned with panch phoron (a blend of five spices). It is often served with steamed rice, forming a staple part of the Odia diet.</p>
        </div>
            <div className="grid gap-6 grid-cols-4 py-5" >
            <div className="flex flex-col gap-3 bg-white shadow-lg  rounded-lg overflow-hidden" >
                <img className='h-[240px]' src="https://www.thespruceeats.com/thmb/LRHVkNnPFRGjN5LixQWD1C9Pnjw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/rasgulla-indian-dessert-1957839-hero-01-7c3528a2d34a4f1b9248c7483a73d0a6.jpg" alt="" />     
                <h1 className="text-2xl font-semibold text-center" >Rasgulla</h1>          
            </div>
            <div className="flex flex-col gap-3 bg-white shadow-lg  rounded-lg overflow-hidden" >
                <img className='h-[240px]' src="https://images.slurrp.com/prodarticles/batbsxcr4j8.webp?impolicy=slurrp-20210601&width=1200&height=900&q=75=" alt="" />    
                <h1 className="text-2xl font-semibold text-center" >Dahibara</h1>            
            </div>
            <div className="flex flex-col gap-3 bg-white shadow-lg  rounded-lg overflow-hidden" >
                <img className='h-[240px]' src="https://static.s123-cdn-static-c.com/uploads/2101965/2000_5e742187b7fa7.jpg" alt="" />  
                <h1 className="text-2xl font-semibold text-center" >Dahi pakhala</h1>              
            </div>
            <div className="flex flex-col gap-3 bg-white shadow-lg  rounded-lg overflow-hidden" >
                <img className='h-[240px]' src="https://dukaan.b-cdn.net/700x700/webp/552652/5a019163-183d-45b4-b323-8b8c1028cb9f.png" alt="" />  
                <h1 className="text-2xl font-semibold text-center" >Chenapoda</h1>              
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

export default FoodPage