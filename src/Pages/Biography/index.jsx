import {IconName} from 'boxicons'
import Layout from "../../Components/Layout"

function Biography() {
    return (
      <>
      <div className= 'mt-[-700px] drop-shadow-2xl text-white '>
        <h1 className="py-10 text-4xl font-extrabold text-center">Hi!</h1>
        <div className="flex justify-center items-center mt-[-30px]">
       <img className='w-[10%] h-[10%] rounded-full'
       src="src\img\yo.jpeg" 
       alt="" 
       />
        </div>
        <div className='  shadow-md '>
        <p className="px-4 md:px-20 text-justify py-6 md:py-10 text-3xl font-serif">
          My name is Luisa Villacorte, and I am a passionate software development student. I find beauty in cities and their tourist places, spaces filled with magic.
          I created "Traveling" to showcase beautiful trips around the world and bring them to the big screen. <br />
          It's a platform that bridges the gap between these two realities because, if 'no place is far', we can transcend the borders of space, time, nationality, and culture to experience tourist places full of magic.
        </p>
        </div>
        
        <p className="text-center  font-semibold mb-4 text-3xl">Follow me on:</p>
        <div className="flex justify-center space-x-4 ">
          <box-icon type='logo' name='facebook-circle' size='lg'></box-icon>
          <box-icon name='instagram' type='logo' size='lg'></box-icon>
          <box-icon name='github' type='logo' size='lg'></box-icon>
          <box-icon name='google' type='logo' size='lg'></box-icon>
          <box-icon name='telegram' type='logo' size='lg'></box-icon>
          <box-icon name='discord-alt' type='logo' size='lg'></box-icon>
          <box-icon type='logo' name='linkedin' size='lg'></box-icon>
        </div>
      </div>
    </>

    )


}
export default Biography