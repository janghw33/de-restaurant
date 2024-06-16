import shadowImage from '../assets/02_shadow.png';
import image1 from '../assets/food1.jpeg';
import image2 from '../assets/food3.png';
import image3 from '../assets/food4.jpeg';

const Webpage = () => {
  return (
    <div className="mt-10 relative overflow-hidden">
      <img
        src={shadowImage}
        alt="Shadow"
        className="-translate-x-1/10 absolute bottom-0 left-0 h-[40%] w-[40%] scale-x-[-1] transform opacity-50"
      />

      <div className="flex h-1/2 flex-col items-center justify-between space-y-6 md:h-auto md:flex-row md:space-x-6 md:space-y-0">
        <div className="flex flex-col items-center justify-between space-y-6 py-10 md:space-y-14 md:py-20">
          

          <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-3 md:gap-24">
            <div className="flex flex-col rounded-sm">
              <img src={image1} alt="Image 1" className="mt-[-120px] w-full h-[50%] rounded-sm object-cover" />
              <div className="flex h-56 w-full items-center justify-center rounded-sm bg-[#7f7770]">
                <div className="ml-4 text-left font-OpenSans text-white">
                  <p className="text-2xl font-semibold">Lorem ipsum</p>
                  <p className="pt-2 text-xl font-normal font-sans">Lorem ipsum dolor sit amet, consectetur adipisicing...</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col rounded-sm">
              <img src={image2} alt="Image 2" className="mt-[-120px] w-full h-[50%] rounded-sm object-cover" />
              <div className="flex h-56 w-full items-center justify-center rounded-sm bg-[#7f7770]">
                <div className="ml-4 text-left font-OpenSans text-white">
                  <p className="text-2xl font-semibold">Lorem ipsum</p>
                  <p className="pt-2 text-xl font-normal">Lorem ipsum dolor sit amet, consectetur adipisicing...</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col rounded-sm">
              <img src={image3} alt="Image 3" className="mt-[-120px] w-full rounded-sm object-cover" />
              <div className="flex h-56 w-full items-center justify-center rounded-sm bg-[#7f7770]">
                <div className="ml-4 text-left font-OpenSans text-white">
                  <p className="text-2xl font-semibold">Lorem ipsum</p>
                  <p className="pt-2 text-xl font-normal">Lorem ipsum dolor sit amet, consectetur adipisicing...</p>
                </div>
              </div>
            </div>
          </div>
          <button className="h-20 w-80 rounded-full bg-[#7f7770] font-OpenSans text-2xl font-extrabold uppercase leading-5 tracking-widest text-white focus:outline-none focus:ring-2 focus:ring-[#776c64]">
            SHOW MORE
          </button>
        </div>
      </div>
    </div>
  );
};

export default Webpage;
