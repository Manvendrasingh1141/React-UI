import Card1 from "./components/Card1"
import Card2 from "./components/Card2"
import Card3 from "./components/Card3"
import Card4 from "./components/Card4"
function App(){
  function Data(){
    console.log("clicked!")
  }
  return (
    <div className="bg-white w-vw h-vh text-black">
      <div className="flex flex-row justify-between mx-15 mt-5">
        <button className="rounded-2xl bg-black px-4 py-2 text-white">Target Audience</button>
        <button className="rounded-2xl bg-gray-300 px-4 py-2 text-black">DIGITAL BACKEND PLATFORM</button>
      </div>
      <div className="flex flex-row gap-25 mx-15 mt-10">
        <div className="">
          <h1 className="text-5xl font-bold mt-5">Prospective <br></br>customer<br></br> segmentation</h1>
          <p className=" mt-5">Lorem ipsum dolor sit amet consectetur <br></br>
            adipisicing elit. Voluptatum quidem libero<br></br>
            atque soluta eligendi! Rerum voluptates ab <br></br>
            quia aspernatur exercitationem!</p>
        <div>
          <button onClick={Data} className=""><img src="./top-right.png" alt="arrow png" className="w-10 h-10 mt-55" /></button>
        </div>
      </div>
      <div className="flex gap-10 mt-10 flex-row">
        <Card1/>
        <Card2/>
        <Card3/>
        <Card4/>
        </div>
      </div>
    </div>
  )
}

export default App

