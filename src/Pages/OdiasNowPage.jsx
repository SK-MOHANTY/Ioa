import React from 'react'

const OdiasNowPage = () => {
  return (
    <div>
    <div className=" h-[600px] w-[1430px] bg-cover bg-[url('https://bijayanarzary.files.wordpress.com/2016/04/odia-utkal-divas-hd-wallpaper-2016-image-download1-770x297.jpg?w=770')] flex items-center justify-center opacity-3 " >         
            <div className="bg-slate-700 bg-opacity-0 p-6 rounded-2xl" >
             
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

export default OdiasNowPage