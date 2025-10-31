function Page01(){
    return <div className="bg-[#000000] w-full h-145 text-white relative">
        <img src="./public/iphone.png" alt="img" className="mx-auto h-145 relative"/>
        <div className="text-white absolute top-10 left-150">
            <h1 className="font-bold text-5xl">Iphone 17 Pro</h1>
            <h2 className="font-bold text-5xl">All out Pro.</h2>
            <div className="left-10 absolute">
                <button className="bg-blue-500 text-white rounded-full text-2xl px-3 py-1">Learn more</button>
                <button className="bg-black text-blue-500 border- rounded-full text-2xl px-3 py-1">Buy</button>
            </div>
        </div>
    </div>
}

export default Page01