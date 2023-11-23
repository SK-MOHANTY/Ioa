import React from 'react'
import Cultural from '../assets/cul.jpeg'
import Colture from '../assets/cul2.jpeg'
<assets />
const Culture = () => {
  return (
    <div>
      <div>
    <div className=" h-[500px]  w-[1440px] bg-cover bg-[url('https://americankahani.com/wp-content/uploads/2021/01/Shankaravaranam-39.jpg')] flex items-center justify-center opacity-3 " >         
            <div className="bg-slate-700 bg-opacity-0 p-6 rounded-2xl " >
              <h1 className='text-4xl font-bold text-white'>CULTURE</h1>
            </div>
            </div>
      <div className="w-[1400px] mx-auto my-0 py-5 ">
        <div className="flex flex-col bg-white text-[7rem] pb-5 text-cyan-900">
          <h3 className='self-center text-4xl'>Odisha's Cultural Expression</h3>
          <p className='text-[2rem] text-black text-xl text-center py-3 self-center'>"Ruled by various kings and dynasties, Odisha has acquired many a traditions in its wake. Thus Odisha can best be defined through its racial and cultural amalgamation that lives through its heritage."</p>
        </div>
        <div className="w-[1400px] mx-auto my-0 flex gap-5 bg-blue-200" >
            <div className="w-1/2 flex items-center justify-center  py-5" >
                <img className='w-96 rounded-lg' src={Cultural} alt="" />
            </div>
            <div className="w-1/2  flex flex-col justify-start  gap-5 " >
                <p className="font-normal text-xl text-left pt-20" >Odisha, a state located on the eastern coast of India, boasts a rich and diverse cultural heritage that is a reflection of its history, traditions, and geographical significance. 
                The culture of Odisha is characterized by a deep-rooted connection to art, music, dance, and spirituality. 
                One of the most iconic aspects of Odia culture is its classical dance form, Odissi, renowned for its graceful movements and expressive storytelling. The state is also known for its beautiful and intricately designed handlooms, particularly the famed Sambalpuri and Ikat textiles, which have gained global recognition. Odisha's artistic heritage is further exemplified through its exquisite Pattachitra paintings, a traditional form of scroll painting that often depicts mythological and cultural themes.
                </p>
                
            </div>
         </div>
         <div className="w-[1400px] mx-auto my-0 flex p-4 gap-5 bg-blue-200" >
         <div className="w-1/2  flex flex-col justify-start gap-5  " >
                <p className="font-normal text-xl text-justify pt-20" >
                Odisha's culture is a vibrant tapestry of traditional arts, classical dance (Odissi), and folklore expressed through captivating Pattachitra paintings. The state's temples, like the Konark Sun Temple, stand as architectural masterpieces. With diverse festivals like Rath Yatra and Raja Parba, Odisha celebrates its rich heritage, inviting all to experience its cultural kaleidoscope.  
                Odisha's culture, deeply rooted in tradition, celebrates a vibrant tapestry of art, dance, and spirituality. From the graceful movements of Odissi dance to the intricate Pattachitra paintings, each expression embodies the state's cultural richness. Festivals like Rath Yatra and Durga Puja further showcase the profound connection between heritage and devotion.
               </p>
            </div>
            <div className="w-1/2 flex items-center justify-center  py-5" >
            <img className='w-96 rounded-lg' src={Colture} alt="" />
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

export default Culture