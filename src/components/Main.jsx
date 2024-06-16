import heroImage from '../assets/food2.jpg';
import tornPaperTop from '../assets/tornpaper_at_the_top.png';
import tornPaperBottom from '../assets/tornpaper_at_the_bottom.png';

const HeroBar = () => {
  return (
    <div
      className="relative flex h-[1000px] bg-cover bg-center opacity-80 text-white"
      style={{ backgroundImage: `url(${heroImage})` }}>
      {/* Overlay image at the top */}
      {/* <div className="absolute left-0 right-0 top-0">
        <img src={tornPaperTop} alt="Torn Paper Top" className="w-full" />
      </div> */}

      <div className="relative ml-10 flex flex-col items-start justify-center sm:w-full md:w-1/2">
        <h1 className="mb-4 text-left font-OpenSans font-extrabold text-[#deb37e] drop-shadow-custom sm:text-4xl md:text-8xl">
          Brand Name
        </h1>
        <p className="h-16 w-full text-left font-OpenSans text-xl font-semibold italic tracking-widest text-white sm:w-3/4 md:w-96">
          Description
        </p>
        <div className="my-10 ml-4 flex">
          <button className="h-12 w-56 rounded-full bg-white px-4 py-2 text-center font-OpenSans text-xl font-extrabold text-[#776c64] opacity-90 focus:border-2 focus:border-[#776c64] focus:outline-none">
            READ MORE
          </button>
        </div>
        <div className="h-16 w-full text-left font-OpenSans text-lg font-normal italic tracking-tighter text-[#54524f] sm:w-3/4 md:w-4/5">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
          dolore magna aliquyam erat, sed diam voluptua.
        </div>
      </div>

      {/* Overlay image at the bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <img src={tornPaperBottom} alt="Torn Paper Bottom" className="w-full" />
      </div>
    </div>
  );
};

export default HeroBar;