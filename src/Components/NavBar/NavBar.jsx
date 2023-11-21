import { Link } from "react-router-dom"
import ioaImage from "../../assets/ioa1.jpeg"


const NavBar = () => {
  
  return (
    <div  >
        <div className="h-10 px-20 flex items-center justify-between" >
        <div className="justify-between flex gap-5 text-xl text-black">
            <div className="text-cyan-700" ><i className="fa fa-facebook-official"></i></div>
           <div className="text-cyan-700" ><i className="fa fa-twitter-square"></i></div>
           <div className="text-cyan-700" ><i className="fa fa-whatsapp"></i></div>
           <div className="text-cyan-700" ><i className="fa fa-envelope"></i></div>
            </div> 
        <div className="flex gap-6 justify-center items-center" >
          <span> <Link className="text-cyan-700 font-medium" to='/becomeamember'>Become a Member</Link></span>
          <span className="font-medium text-white text-sm px-3 py-1 rounded bg-blue-700" > <Link>Sign In</Link> / <Link>Sign UP</Link> </span>
        </div>
        </div>
        
        <div className="h-20 bg-slate-300 px-20 flex items-center justify-between  " >
        <div>
        <img className="h-15 w-20" src={ioaImage} alt=""  />
        </div>

        
        <nav  >
           

           <ul className="flex items-center gap-10">
            <li><Link className="font-medium text-base" to='/'>Home</Link></li>
            <li><Link className="font-medium text-base" to='/about'>About</Link></li>
            <li><Link className="font-medium text-base" to='/gallery'>Gallery</Link></li>
            <li><Link className="font-medium text-base" to='/upcomingevent'>Upcoming events</Link></li>
            <li><Link className="font-medium text-base" to='/contact'>Contact</Link></li>
            <li><Link className="font-medium text-base" to='/ireland'>Ireland</Link></li>
            <li><Link className="font-medium text-base" to='/epatrika'>E-patrika</Link></li>
            <li className="flex relative group">
            <li><Link className="font-medium text-base mr-1" to='/odias'>Odias</Link></li>    
             
             
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
          </ul>
        </nav>
        </div>

    </div>
  )
}

export default NavBar


{/* <div className="justify-between flex gap-5 text-xl text-black">
            <div><i className="fa fa-facebook-official"></i></div>
           <div><i className="fa fa-twitter-square"></i></div>
           <div><i className="fa fa-whatsapp"></i></div>
           <div><i className="fa fa-envelope"></i></div>
            </div> 
        <div><button className="p-3 bg-cyan-700 rounded-lg">sign in/sign up</button></div> */}