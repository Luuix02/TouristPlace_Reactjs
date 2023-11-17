import React from 'react'

const Place = () => {
    return (
        <div className='w-full h-screen'>
            <img className='tl-0 w-full h-screen object-cover opacity-70 ' src="https://diariohoraextra-com.b-cdn.net/wp-content/uploads/2023/03/viajes-y-turismo-9.jpg"
                alt=""
            />
            <div className='bg-black/30 absolute top-0 left-0 w-full h-screen ' />
            <div className='absolute top-0 w-full h-full flex flex-col justify-center text-white mt-[-17rem]'>
                <div className="md:left-[10%] max-w-[1100px] m-auto absolute p-4 ">
                    <p className='font-bold text-2xl md:text-3xl drop-shadow-2xl mb-2'>Travel around the world</p>
                    <h1 className='font-bold text-5xl md:text-7xl drop-shadow-2xl mb-6'>Know magical places</h1>
                </div>
            </div>
        </div>
    )
}
export default Place
