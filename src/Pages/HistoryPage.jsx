import React from 'react'

const HistoryPage = () => {
  return (
    <div className='bg-blue-200'>
    <div className=" h-[500px] w-[1440px] bg-cover bg-[url('https://odishatourism.gov.in/content/dam/tourism/home/discover/about-odisha/history-climate-cities/banner_history_climate_city.jpg')] flex items-center justify-center opacity-3 " >         
            <div className="bg-slate-700 bg-opacity-0 p-6 rounded-2xl" >
                <h1 className='text-4xl font-bold '>History of odisha</h1>
            </div>
        </div>
        <div>
        <div className='font-bold text-4xl text-center bg-white text-cyan-700 p-8'><h1>Odisha's Journey Over Time</h1>
        <div className='font-light text-xl text-black text-center p-5'>The history of Odisha begins in the Lower Paleolithic era, as Acheulian tools dating to the period have been discovered in various places in the region. The early history of Odisha can be traced back to writings found in ancient texts like the Mahabharata, Maha Govinda Sutta and some Puranas.
        </div>
        </div>
        <div className="w-[1400px] mx-auto my-0 flex gap-5" >
            <div className="w-1/2 flex items-center justify-center  py-5" >
                <img className='w-96 rounded-lg' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSY30vPOyJJGM1laBGWHt5-U6JSr9eZaygW3qm-R8vOxqTptvroGltliLhhBDd-RUTt6sw&usqp=CAU" alt="" />
            </div>
            <div className="w-1/2 p-9 flex flex-col justify-start gap-5  " >
                <h3 className=" font-semibold text-3xl" >Odisha's Ancestral Journey</h3>
                <p className="font-normal text-xl" >
                Odisha was known as Kalinga in ancient times and had a flourishing maritime trade and culture.
                The Kalinga War in 261 BCE, where the Mauryan Emperor Ashoka invaded the region, is a significant event. The intense bloodshed of the war led to Ashoka's conversion to Buddhism and his commitment to non-violence.
               </p>
            </div>
         </div>
         <div className="w-[1400px] mx-auto my-0 flex p-4 gap-5" >
         <div className="w-1/2 p-9 flex flex-col justify-start gap-5  " >
            <h3 className=" font-semibold text-3xl" >Medieval Odisha</h3>
                <p className="font-normal text-xl" >
                The region saw the rise of powerful dynasties, including the Guptas and the Eastern Ganga dynasty.
                Kharavela, a notable ruler of the Kalinga Empire in the 1st century BCE, left inscriptions that provide insights into the history and achievements of the time.
               </p>
            </div>
            <div className="w-1/2 flex items-center justify-center  py-5" >
            <img className='w-96 rounded-lg' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvKAfs8zD8L8k7Fs3j-X16bMOrwpSc6iWRbCo2Tz7O6EcXgT9Kjf8-QYrhUJVn_zRH4yU&usqp=CAU" alt="" />
            </div>
            </div>
            <div className="w-[1400px] mx-auto my-0 flex p-4 gap-5" >
            <div className="w-1/2 flex items-center justify-center  py-5" >
                <img className='w-96 rounded-lg' src="https://img.etimg.com/thumb/msid-100330346,width-480,height-360,imgsize-158214,resizemode-75/puri-and-cuttack-railway-stations.jpg" alt="" />
            </div>
            <div className="w-1/2 p-9 flex flex-col justify-start gap-5  " >
                <h3 className=" font-semibold text-3xl" >Odisha's Historical Development</h3>
                <p className="font-normal text-xl" >
                In recent years, Odisha has experienced significant economic growth, particularly in sectors like steel, IT, and education.It reflects the dynamic nature of Odisha's past and its ongoing transformation.
               </p>
            </div>
            </div>
            <div className='font-bold text-4xl text-center bg-white p-8'><h1 className='text-cyan-700'>Odisha's Historical Narrative</h1>
        <div className='font-light text-xl text-center p-5'>The history of Odisha is characterized by a rich tapestry of art, culture, and traditions, with a deep connection to its ancient past. The state continues to be a vibrant and culturally diverse region in India.
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

export default HistoryPage