import { Link } from "react-router-dom";
import '../output.css';

const Navbar = () => {
  return  (
    <>
      <nav className="w-full h-16 flex items-center bg-transparent justify-center absolute">
        <div className="font-[rubik] item-list h-full flex flex-row items-center content-center px-2 absolute font-serif">
          <Link to='/' className="h-full px-2 flex items-center text-white hover:text-yellow-300">
            <h1>About</h1>
          </Link>
          <Link to='/' className="h-full px-2 flex items-center text-white hover:text-yellow-300">
            <h1>Menu</h1>
          </Link>
          <Link to='/' className="h-full px-2 flex items-center text-white hover:text-yellow-300">
            <h1>Gallery</h1>
          </Link>
          <Link to='/' className="h-full px-2 flex items-center text-white hover:text-yellow-300">
            <h1>Contact</h1>
          </Link>
        </div>
      </nav>
    </>
  );
}

export default Navbar