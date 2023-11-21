import ObjImage from '../assets/about.jpeg'


const Objective = () => {
  return (
    <div className="bg-slate-100 ">
        <div className="w-[1400px] mx-auto my-0 flex gap-7" >
            <div className="w-1/2 flex items-center justify-center py-10" >
                <img className='w-[60%]' src={ObjImage} alt="Objective-IMage" />
            </div>
            <div className="w-1/2 p-9 flex flex-col justify-start gap-10 " >
                <h3 className=" font-semibold text-3xl text-center" >Objective</h3>
                <p className="font-normal text-xl" >
                To bring all the Odia and non-Odia families together in Ireland to create a big family of lord Jaganath in the foreign land to celebrate and enjoy the native festivals and stand for each other.
                To bring all the Odia and non-Odia families together in Ireland to create a big family of lord Jaganath in the foreign land to celebrate and enjoy the native festivals and stand for each other.
                To bring all the Odia and non-Odia families together in Ireland to create a big family of lord Jaganath in the foreign land to celebrate and enjoy the native festivals and stand for each other.
                
                </p>
                <div className='self-center'><button className='bg-cyan-700 p-3 text-white rounded text-lg'>know more</button></div>
            </div>
           
        </div>
        
    </div>
  )
}

export default Objective