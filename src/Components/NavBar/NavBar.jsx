import { Link } from "react-router-dom"
import ioaImage from "../../assets/ioa1.jpeg"


const NavBar = () => {
  
  return (
    <div className="" >
        <div className="h-10 px-20  flex items-center justify-between" >
        <div className="justify-between flex gap-5 text-xl text-black">
            <div className="text-cyan-700" ><i className="fa fa-facebook-official"></i></div>
           <div className="text-cyan-700" ><i className="fa fa-twitter-square"></i></div>
           <div className="text-cyan-700" ><i className="fa fa-whatsapp"></i></div>
           <div className="text-cyan-700" ><i className="fa fa-envelope"></i></div>
            </div> 
        <div className="flex gap-6 justify-center items-center" >
          <span> <Link className="text-cyan-700  font-medium" to='/becomeamember'>Become a Member</Link></span>
          <span className="font-medium text-white text-sm px-3 py-1 rounded bg-cyan-700" > <Link to='/signin'>Sign In</Link></span>
        </div>
        </div>
        
    <div className="h-20 bg-slate-300 px-20 flex items-center justify-between  " >
        <div>
         <img className="h-15 rounded-full w-20" src={ioaImage} alt=""  />
        </div>

        
        <nav className="hidden lg:block"  >
           

           <ul className="flex items-center gap-10">
            <li><Link className="font-medium text-base" to='/'>Home</Link></li>
            <li><Link className="font-medium text-base" to='/about'>About</Link></li>
            <li><Link className="font-medium text-base" to='/gallery'>Gallery</Link></li>
            <li><Link className="font-medium text-base" to='/upcomingevent'>Upcoming events</Link></li>
            <li><Link className="font-medium text-base" to='/contact'>Contact</Link></li>
            <li><Link className="font-medium text-base" to='/ireland'>Ireland</Link></li>
            <li><Link className="font-medium text-base" to='/epatrika'>E-Patrika</Link></li>
            <li className="flex relative group">
            <li><Link className="font-medium text-base mr-1" to='/odias'>Odisha</Link></li>    
        
            
              <ul className="absolute bg-white text-center w-[8rem] top-6 transform scale-0 group-hover:scale-100 transition duration-150 ease-in-out origin-top shadow-lg z-5">
                
                <li><Link className="text-sm px-8 py-1 hover:bg-blue-400 leading-8" to='/culture'>Culture</Link></li>
                <li><Link className="text-sm px-9 py-1 hover:bg-blue-400 leading-8" to='/festival'>Festival</Link></li>
                <li><Link className="text-sm px-10 py-1 hover:bg-blue-400 leading-8" to='/food'>Food</Link></li>
                <li><Link className="text-sm px-11 py-1 hover:bg-blue-400 leading-8" to='/craft'>Craft</Link></li>
                <li><Link className="text-sm px-12 py-1 hover:bg-blue-400 leading-8" to='/art'>Art</Link></li>
                <li><Link className="text-sm px-8 py-1 hover:bg-blue-400 leading-8" to='/history'>History</Link></li>
                <li><Link className="text-sm px-7 py-1 hover:bg-blue-400 leading-8" to='/heritage'>Heritage</Link></li>
                <li><Link className="text-sm px-8 py-1 hover:bg-blue-400 leading-8" to='/leaders'>Leaders</Link></li>
                <li><Link className="text-sm px-6 py-1 hover:bg-blue-400 leading-8" to='/odiasnow'>Odias now</Link></li>
                <li><Link className="text-sm px-5 py-1 hover:bg-blue-400 leading-8" to='/placetovisit'>Place to visit</Link></li>             
              </ul>
          
            </li>
             <img className="h-15 rounded-full  w-20" src="https://i.pinimg.com/564x/d1/7f/c1/d17fc197db06546b01cebd11307e2a08.jpg" alt=""  />
          </ul>
          
        </nav>
        </div>

    </div>
  )
}

export default NavBar


