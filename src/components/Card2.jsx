function Card2(){
    return (
    <div className="h-130 w-55 rounded-3xl relative">
        <div className="absolute rounded-full w-7 h-7 m-3 bg-white flex justify-center font-medium">2</div>
        <p className="absolute flex pt-90 text-white p-3 text-wrap">
            Lorem ipsum dolor sit amet consectetur,<br></br>
             adipisicing elit. Vel odio voluptatibus<br></br>
              debitis quisquam eveniet adipisci iste</p>
        <img src="./public/formal01.jpg" alt="" className="w-full h-full object-cover rounded-3xl z-0"/>
        <button className="bg-blue text-white z-20 absolute">Satisfied</button>
    </div>
        
    )
}
export default Card2 