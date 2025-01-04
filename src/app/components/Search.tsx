// import React from "react";
// import { IoSearchSharp } from "react-icons/io5";

// const Search = () => {
//     return (
//         <div className="relative bg-gradient-to-r from-purple-800 via-pink-500 to-pink-300 p-4 sm:p-6 lg:p-8 rounded-b-3xl shadow-lg w-[980px] h-[98px] -mt-24 left-[240px]  rounded-tl-lg rounded-br-full">
//             {/* Navigation Links */}
//             <div className="flex justify-between -mt-2 space-x-0 text-white text-sm sm:text-base">
//                 {[
//                     "Commercial",
//                     "Agriculture",
//                     "Residentials",
//                     "Farm Land",
//                     "Independent Houses",
//                     "Villas",
//                     "Flats",
//                     "Independent floors",
//                 ].map((item, index) => (
//                     <a
//                         key={index}
//                         href="#"
//                         className="px-3 py-1 hover:underline whitespace-nowrap"
//                     >
//                         {item}
//                     </a>
//                 ))}
//             </div>

//             {/* Search Bar */}
//             <div className="relative mt-4 bg-purple-800 text-white w-[198px] h-[54px] rounded-md shadow-lg">
//                 {/* Text above the input */}
//                 <div className="absolute  left-[198px]  w-[534px] h-[53px] bg-white rounded-br-full flex justify-center items-center z-10">
//                     <h4 className="text-black">Location, Landmark, Builders here</h4>
//                 </div>

//                 {/* Input Field */}
//                 <input
//                     type="text"
//                     placeholder="Search here"
//                     className="w-full h-full z-40 bg-transparent outline-none px-4 pr-10 text-sm sm:text-base placeholder-white"
//                 />
//                 <span className="absolute inset-y-0 right-4 flex items-center text-white">
//                     <IoSearchSharp size={20} />
//                 </span>
//             </div>
//             <div className=" flex justify-start items-center w-full h-[32px] space-x-14">
//                 <span>Recent searhes: </span>
//                 <button className="bg-[rgba(246,245,245,1)] hover:bg-blue-700">
//                     JLN Marg
//                 </button>
//                 <button className="bg-[rgba(246,245,245,1)] hover:bg-blue-700">
//                     Jagatpura
//                 </button>
//                 <button className="bg-[rgba(246,245,245,1)] hover:bg-blue-700">
//                     Jhotwada
//                 </button>
//                 <button className="bg-[rgba(246,245,245,1)] hover:bg-blue-700">
//                     Mansrover
//                 </button>

//             </div>
//         </div>
//     );
// };

// export default Search;

import React from "react";
import { IoSearchSharp } from "react-icons/io5";

const Search = () => {
  return (
    <div className="relative bg-gradient-to-r from-purple-800 via-pink-500 to-pink-300 p-4 sm:p-2 lg:p-8 rounded-tl-3xl shadow-lg w-[880px] h-[98px] -mt-24 left-[130px]  rounded-br-custom-tr-200 pr-80">
      {/* Navigation Links */}
      <div className="flex justify-between -mt-2 -space-x-2 text-white text-sm sm:text-base">
        {[
          "Commercial",
          "Agriculture",
          "Residentials",
          "Farm Land",
          "Independent Houses",
          "Villas",
          "Flats",
          "Independent floors",
        ].map((item, index) => (
          <a
            key={index}
            href="#"
            className="px-3 py-1 hover:underline whitespace-nowrap"
          >
            {item}
          </a>
        ))}
      </div>

      {/* Search Bar */}
      <div className="relative mt-4 bg-purple-800 text-white w-[198px] h-[54px] rounded-md shadow-lg">
        <div className="absolute left-[198px] w-[534px] h-[53px] bg-white rounded-br-full flex justify-center items-center z-10">
          <h4 className="text-black">Location, Landmark, Builders here</h4>
        </div>

        <input
          type="text"
          placeholder="Search here"
          className="w-full h-full z-40 bg-transparent outline-none px-4 pr-10 text-sm sm:text-base placeholder-white"
        />
        <span className="absolute inset-y-0 right-4 flex items-center text-white">
          <IoSearchSharp size={20} />
        </span>
      </div>

      <div className="flex justify-start items-center w-full h-[32px] space-x-14 mt-4">
        <span>Recent searches: </span>
        {["JLN Marg", "Jagatpura", "Jhotwada", "Mansrover"].map((location, index) => (
          <button
            key={index}
            className="bg-[rgba(246,245,245,1)] hover:bg-blue-700"
          >
            {location}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Search;
