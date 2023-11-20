import React from 'react'

const LeadersPage = () => {
  return (
    <div>
      <div className=" h-[500px]  w-[1440px] bg-cover bg-[url('https://sssbalvikas.in/wp-content/uploads/2021/07/Freedom-fighters-twitter.jpg')] flex items-center justify-center opacity-3 " >         
            <div className="bg-slate-700 bg-opacity-0 p-6 rounded-2xl " >
              <h1 className='text-4xl font-bold text-white'>LEADERS</h1>
            </div>
            </div>
      <div>
      <div>
       <div>
      <div className="  bg-blue-200">
      <div className="w-[1400px] mx-auto my-0 py-5 ">
        <div className="flex flex-col  text-[7rem] text-cyan-900">
          <h1 className='self-center text-4xl'>Leaders of Odisha</h1>
        <p className="text-center pt-5 font-normal text-xl">Odisha has been home to several visionary leaders who have played pivotal roles in shaping the destiny of the state and contributing significantly to the broader canvas of Indian politics. One such luminary is Biju Patnaik, a towering figure in Odisha's political history. Popularly known as the "Sher-e-Utkal" (Lion of Odisha), Biju Patnaik served as the Chief Minister of the state twice and played a crucial role in India's struggle for independence. His charismatic leadership, coupled with a passion for social welfare, left an indelible mark on Odisha's political landscape.</p>
        </div>
            <div className="grid gap-6 grid-cols-4 py-5" >
            <div className="flex flex-col gap-3 bg-white shadow-lg  rounded-lg overflow-hidden" >
                <img className='h-[240px]' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFLgoSL872q3NxLhso-D9RJBySgNkTc5eXww&usqp=CAU" alt="" />     
                <h1 className="text-2xl font-semibold text-center" ></h1>          
            </div>
            <div className="flex flex-col gap-3 bg-white shadow-lg  rounded-lg overflow-hidden" >
                <img className='h-[240px]' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCAdIln5CBBAKX9zPAQ3hOkrxgAkmlpBU_xh4M1PZruJWfd4gQW82JVjbImLlNPVz8Q5I&usqp=CAU" alt="" />    
                <h1 className="text-2xl font-semibold text-center" ></h1>            
            </div>
            <div className="flex flex-col gap-3 bg-white shadow-lg  rounded-lg overflow-hidden" >
                <img className='h-[240px]' src="https://odisanow.com/wp-content/uploads/2023/08/Personalities-of-Odisha.webp" alt="" />  
                <h1 className="text-2xl font-semibold text-center" ></h1>              
            </div>
            <div className="flex flex-col gap-3 bg-white shadow-lg  rounded-lg overflow-hidden" >
                <img className='h-[240px]' src="https://qph.cf2.quoracdn.net/main-qimg-d2f624ef25d2081e529c5da55eb5093f.webp" alt="" />  
                <h1 className="text-2xl font-semibold text-center" ></h1>              
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

export default LeadersPage