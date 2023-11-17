const Card = (data) => {

    return (
        <div className="cursor-pointer w-11/12 rounded-3xl md:w-5/5 p-4 mt-[-170px] flex flex-col bg-white ">
            <figure className="relative mb-3 h-4/5 mt-40">
                <span className="absolute bottom-0 left-0 rounded-lg text-black text-xs m-2 px-3 py-0.5 bg-slate-200">
                    {data.data.name}
                </span>
                <img
                    className="w-full h-full object-cover rounded-2xl"
                    src={data.data.photo}
                    alt=""
                />
            </figure>
            <p className=" bg-white h-auto overflow-hidden">
                    <span className="text-xl font-serif text-justify text-black ">{data.data.description}</span>
                </p>
        </div>
    );
};
export default Card;