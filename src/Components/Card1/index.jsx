const Card1 = (data) => {

    return (
        <div className="cursor-pointer rounded-3xl  p-4 mt-[-2570px] flex flex-col ">
            <figure className="relative mb-3 w-11/12 h-5/6"
            >
                <span className="absolute bottom-0 left-0 rounded-lg text-black text-xl font-bold m-10 px-5 py-3.5 bg-yellow-100/70">
                    {data.data.name}
                    <br />
                    <span className="text-black/70">
                    {data.data.country}
                    </span>
                    
                </span>
        
            </figure>
            
           
               
              
        </div>
    );
};
export default Card1;