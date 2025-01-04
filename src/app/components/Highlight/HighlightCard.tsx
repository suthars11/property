import React from 'react'
type Props={
    city:{
      id: number;
      image: string;
      cityName: string;
      location: string;
      price: string;
      size: string;
    }
}

const HighlightCard = ({city}:Props) => {
  return (
    <div className='relative rounded-lg overflow-hidden m-2 bg-slate-500 '>
        <img src={city.image}
        alt='Image' width={100} height={276} className='opacity-100 rounded-lg w-full h-[276px] object-cover'/>
        <div className='absolute inset-0  '>

        </div>
        <div className="relative rounded-tr-full bg-gradient-to-r from-purple-500 via-pink-300 to-pink-300 p-4 lg:p-8 shadow-lg lg::w-[640px] h-[98px] -mt-24">
  <div className='relative sm:bottom-6'>
    <h1 className='text-xs font-semibold text-white'>{city.cityName}</h1>
    <h3 className='text-xs pt-1 text-white'>{city.location}</h3>
   

    <h1 className='text-sm font-bold pt-2 text-white'>{city.price}</h1>

    <p className='text-gray-200'>{city.size}</p>
  </div>
</div>
    </div>
  )
}

export default HighlightCard