import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const Navbar = () => {
    const {user, Logout} = useContext(AuthContext)
    const handleSignOut = () =>{
        Logout()
    }

  return (
    <div className="bg-base-100 bg-opacity-40 shadow-lg">
      <div className="navbar  px-10 h-2">
        <div className="flex-1">
          <Link
            to={"/"}
            className="text-black text-3xl font-montserrat font-bold"
          >
            Travel With S<span className="text-red-600">L</span>ASH
          </Link>
        </div>
        <div className="">
          <ul className=" flex items-center justify-center menu  menu-horizontal px-1">
            <div className="">
              <input
                type="text"
                placeholder="Search"
                className=" p-2 bg-black bg-opacity-10 rounded-lg text-white font-medium w-52 border-white border "
              />
            </div>
            <li>
              <Link to={"/"} className="font-semibold text-black">
                Home
              </Link>
            </li>
            <li>
              <Link to={"/destination"} className="font-semibold text-black">
                Destination
              </Link>
            </li>
            <li>
              <Link to={'/dashboard'} className="font-semibold text-black">Dashboard</Link>
            </li>
            <li>
              <Link className="font-semibold text-black">Profile</Link>
            </li>
            {
                user && <li className="font-bold text-lg mr-3 text-black">{user.displayName}</li>
            }
            <li>
              {
                !user ? <Link
                className="btn bg-[#F9A51A] border-none px-6 py-1 font-bold hover:bg-slate-950 text-white"
                to={"/Login"}
              >
                Login
              </Link> : <button onClick={handleSignOut}  className="btn bg-[#F9A51A] border-none px-6 py-1 font-bold hover:bg-slate-950 text-white">Sign Out</button>
              }
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
