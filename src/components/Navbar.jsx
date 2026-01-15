import {FaShoppingCart} from "react-icons/fa"
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const Navbar = () => {

  const {cart} = useSelector((state) => state);

  return (
    <div >
      <nav className="bg-blue-950 flex justify-between items-center h-20 w-full mx-auto">

        <NavLink to="/">
          <div className="ml-5">
          <img src="../logo.png" className="lg:h-14 md:h-10 h-8" alt=""/>
          </div>
        </NavLink>

          <div className="flex items-center font-medium text-slate-100 mr-5 space-x-6">
            <NavLink to="/">
              <p>Home</p>
            </NavLink>

            <NavLink to="/cart">
              <div>Cart</div>
            </NavLink>
            
          </div>
      </nav>
    </div>
  )
};

export default Navbar;