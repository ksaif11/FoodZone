import React, {useContext} from "react";
import { NavLink } from "react-router-dom";
import { GlobalContext } from "../context";


const Navbar = () => {
    const {searchParam, setSearchParam, handleSubmit} = useContext(GlobalContext)
    
  return (
    <div className="bg-gray-900 text-white p-4 flex justify-between items-center">
      <h1 className="text-4xl font-bold ml-12 text-emerald-100-800">
      <NavLink
            to={"/"}
            
            exact
          >
            FoodZone
          </NavLink>
      </h1>
      <form onSubmit={handleSubmit}>
        <input 
          type="text"
          placeholder="Enter food item..."
          name="foodzone"
          className="bg-gray-800 text-white rounded-md px-4 py-2 focus:outline-none focus:bg-gray-700 text-2xl"
        
          value={searchParam}
          onChange={(e)=>setSearchParam(e.target.value)}
        />
      </form>
      <ul className="flex mr-9 text-xl">
        <li className="mr-6">
          <NavLink
            to={"/"}
            className="text-gray-300 hover:text-white transition duration-300"
            activeClassName="text-white"
            exact
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/favourites"}
            className="text-gray-300 hover:text-white transition duration-300"
            activeClassName="text-white"
          >
            Favourites
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
