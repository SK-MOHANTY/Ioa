import Allodiagroup from '../assets/allodiagroup.jpeg'
import Function from '../assets/function.jpeg'
import Anchor from '../assets/anchor.jpeg'
import Award from '../assets/award.jpeg'
import Cake from '../assets/cake.jpeg'
import Celebration from '../assets/celebration.jpeg'
import Childrens from '../assets/childrens.jpeg'
import Cinemahall from '../assets/cinemahall.jpeg'
import Drama from '../assets/drama.jpeg'
import Dramas from '../assets/dramas.jpeg'
import Filmfestival from '../assets/filmfestival.jpeg'
import Gift from '../assets/gift.jpeg'
import Girls from '../assets/girls.jpeg'
import Group from '../assets/group.jpeg'
import Guests from '../assets/guests.jpeg'
import Hall from '../assets/hall.jpeg'
import Honour from '../assets/honour.jpeg'
import Pranam from '../assets/pranam.jpeg'
import Selfie from '../assets/selfie.jpeg'
import Tilak from '../assets/tilak.jpeg'

const GalleryPage = () => {
  return (
    <div>
        <div className=" h-[500px] w-[1440px] bg-cover bg-[url('https://jptcompany.com/wp-content/uploads/2019/07/our_portfolio.jpg')] flex items-center justify-center opacity-3 " >         
            <div className="bg-slate-700 bg-opacity-0 p-6 rounded-2xl " >
              <h1 className='text-4xl font-bold text-white'>Group</h1>
            </div>
            </div>
      <div className="  bg-blue-200">
      <div className="w-[1400px] mx-auto my-0 py-5 ">
        <div className="flex flex-col gap-7 text-[7rem] text-cyan-900">
          <h1 className='self-center text-4xl'>OUR PORTFOLIO</h1>
          <p className='text-[2rem] text-black self-center'>All odias in Ireland celebrate occasions.</p>
        </div>
        <div className="grid gap-6 grid-cols-4 py-5" >
            <div className="flex flex-col gap-3 bg-white shadow-lg  rounded-lg overflow-hidden" >
                <img className='h-[240px]' src={Function} alt="" />               
            </div>
            <div className="flex flex-col gap-3 bg-white shadow-lg  rounded-lg overflow-hidden" >
                <img className='h-[240px]' src={Allodiagroup} alt="" />
            </div>
            <div className="flex flex-col gap-3 bg-white shadow-lg  rounded-lg overflow-hidden" >
                <img className='h-[240px]' src={Anchor} alt="" />
            </div>
            <div className="flex flex-col gap-3 bg-white shadow-lg rounded-lg overflow-hidden" >
                <img className='h-[240px]' src={Award} alt="" />
            </div>
            <div className="flex flex-col gap-3 bg-white shadow-lg rounded-lg overflow-hidden" >
                <img className='h-[240px]' src={Cake} alt="" />
            </div>
            <div className="flex flex-col gap-3 bg-white shadow-lg rounded-lg overflow-hidden" >
                <img className='h-[240px]' src={Celebration} alt="" />
            </div>
            <div className="flex flex-col gap-3 bg-white shadow-lg rounded-lg overflow-hidden" >
                <img className='h-[240px]' src={Childrens} alt="" />
            </div>
            <div className="flex flex-col gap-3 bg-white shadow-lg rounded-lg overflow-hidden" >
                <img className='h-[240px]' src={Cinemahall} alt="" />
            </div>
            <div className="flex flex-col gap-3 bg-white shadow-lg rounded-lg overflow-hidden" >
                <img className='h-[240px]' src={Drama} alt="" />
            </div>
            <div className="flex flex-col gap-3 bg-white shadow-lg rounded-lg overflow-hidden" >
                <img className='h-[240px]' src={Dramas} alt="" />
            </div>
            <div className="flex flex-col gap-3 bg-white shadow-lg rounded-lg overflow-hidden" >
                <img className='h-[240px]' src={Filmfestival} alt="" />
            </div>
            <div className="flex flex-col gap-3 bg-white shadow-lg rounded-lg overflow-hidden" >
                <img className='h-[240px]' src={Gift} alt="" />
            </div>
            <div className="flex flex-col gap-3 bg-white shadow-lg rounded-lg overflow-hidden" >
                <img className='h-[240px]' src={Girls} alt="" />
            </div>
            <div className="flex flex-col gap-3 bg-white shadow-lg rounded-lg overflow-hidden" >
                <img className='h-[240px]' src={Group} alt="" />
            </div>
            <div className="flex flex-col gap-3 bg-white shadow-lg rounded-lg overflow-hidden" >
                <img className='h-[240px]' src={Guests} alt="" />
            </div>
            <div className="flex flex-col gap-3 bg-white shadow-lg rounded-lg overflow-hidden" >
                <img className='h-[240px]' src={Hall} alt="" />
            </div>
            <div className="flex flex-col gap-3 bg-white shadow-lg rounded-lg overflow-hidden" >
                <img className='h-[240px]' src={Honour} alt="" />
            </div>
            <div className="flex flex-col gap-3 bg-white shadow-lg rounded-lg overflow-hidden" >
                <img className='h-[240px]' src={Pranam} alt="" />
            </div>
            <div className="flex flex-col gap-3 bg-white shadow-lg rounded-lg overflow-hidden" >
                <img className='h-[240px]' src={Selfie} alt="" />
            </div>
            <div className="flex flex-col gap-3 bg-white shadow-lg rounded-lg overflow-hidden" >
                <img className='h-[240px]' src={Tilak} alt="" />
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

export default GalleryPage