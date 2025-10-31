function Card(props){
    return (
            <div className="bg-white w-60 h-70 rounded-3xl text-black p-2 flex flex-col justify-center">
                <div className="flex flex-row justify-between p-3" >
                    <img src={props.companyIcon} className="w-10 h-10 block rounded-full"></img>
                    <h4>Save</h4>
                </div>
                <div className="mt-5">
                    <h1 className="font-bold text-center ">{props.position}</h1>
                    <div className="flex flex-row  justify-between p-2 font-semibold">
                        <button className="bg-gray-200 rounded text-black p-1">Part Time</button>
                        <button className="bg-gray-200 rounded text-black p-1">Senior Level</button>
                    </div>
                </div>
                <div className="flex flex-row  justify-between p-2 mt-15">
                    <h1 className="font-bold">${props.pay}/hr</h1>
                    <button className="bg-black px-2 py-1 text-white">Apply Now</button>
                </div>
            </div>
    )
}
export default Card
