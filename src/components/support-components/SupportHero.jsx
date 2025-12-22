import {RiSearchLine} from "@remixicon/react";
const SupportHero = () => {
  return (
    <div className="flex flex-col items-center min-h-screen texr-center py-14">
      <h1 className='text-white text-5xl font-semibold'> <span className='text-[#00ff9d]'>Support</span> Page</h1>
      <form className="mt-6 w-full max-w-2xl">
        <div className="flex items-center gap-2 rounded-full bg-white/10 backdrop-blur border border-white/20 shadow-[0_8px_30px_rgba(0,0,0,0.35)] px-4 py-2">
           
          <input
            type="text"
            placeholder="Search for FAQs"
            className="w-full bg-transparent outline-none placeholder:text-gray-200/70 text-white text-lg"
          />
          <button className="bg-[#00ff9d] rounded-3xl flex items-center justify-center p-2">
           <RiSearchLine className=" text-gray-800 text-xl" />
          </button>
        </div>
      </form>
       <p className="mt-2 text-[12px] text-white">
  For reservation process and details see <span className="text-[#00ff9d]">Support</span> 
 </p>
    </div>
  )
}

export default SupportHero;