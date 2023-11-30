import { Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import './output.css';
import './index.css';

function App() {
  return (
    <>
      <div className="w-full h-screen relative">
        <div className="w-full h-full bg-[url(/images/head_background.jpg)] bg-cover absolute">
          <div className="w-full h-full bg-black opacity-60"></div>
        </div>
        <Navbar />
        <div className="h-fit w-fit flex flex-col items-center text-white absolute top-0 bottom-0 left-0 right-0 m-auto text-center font-[rubik]">
          <h1 className="text-lg md:text-xl font-medium ">Welcome to Coffee Beam</h1>
          <div className="w-24 my-1 line bg-yellow-300"></div>
          <h1 className="my-2 text-2xl md:text-4xl font-bold">Just relax and drink your coffee</h1>
          <p className='w-3/5 hidden text-xs md:text-sm my-2 md:inline font-light'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque faucibus sollicitudin ante, sed laoreet nulla facilisis nec. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aliquam egestas justo nec cursus tincidunt. Donec ut sollicitudin nisi.</p>

          <Link to='/' className="my-6 px-6 py-2 border rounded-md border-yellow-400 font-normal">
            Menu
          </Link>
        </div>
      </div>
    </>
  )
}

export default App
