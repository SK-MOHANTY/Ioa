import Baner from '../assets/baner.jpg'; // Import the banner image

const Banner = () => {
  return (
    <div className="relative h-[800px] bg-cover -z-10 " style={{ backgroundImage: `url(${Baner})`  }}>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
        <h1 className="text-white text-7xl font-bold capitalize">Irish Odia Association</h1>
        <p className="text-center mt-3 text-white font-medium text-5xl capitalize">Being Good Being Odia</p>
      </div>
    </div>
  );
};

export default Banner;






