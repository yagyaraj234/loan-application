import React, { useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { useUserId } from "./TokenContext";
const Header = () => {
  const { userId } = useUserId();
  console.log(userId);
  const onLogOut = () => {
    localStorage.removeItem("userId");
    userId = null;
  };
  useEffect(() => {}, [userId]);
  return (
    <>
      {/* component */}
      <header className="header sticky top-0 bg-white shadow-md flex items-center justify-between md:px-8 px-2 py-02">
        {/* logo */}
        <Link to="/" className="w-3/12 font-bold text-xl text-green-500">
          GetLoan
        </Link>

        {/* navigation */}
        <nav className="nav font-semibold text-lg">
          <ul className="flex items-center">
            <li className="p-4 border-b-2 border-green-500 border-opacity-0 hover:border-opacity-100 hover:text-green-500 duration-200 cursor-pointer  hidden md:inline">
              <NavLink to="/">Home</NavLink>
            </li>
            <li className="p-4 border-b-2 border-green-500 border-opacity-0 hover:border-opacity-100 hover:text-green-500 duration-200 cursor-pointer text-md md:text-lg">
              <NavLink to="/loans">Loans</NavLink>
            </li>
            <li className="p-4 border-b-2 border-green-500 border-opacity-0 hover:border-opacity-100 hover:text-green-500 duration-200 cursor-pointer text-md  hidden md:inline  md:text-lg">
              <NavLink to="/request-loans">Apply Loans</NavLink>
            </li>
            <li className="p-4 border-b-2 border-green-500 border-opacity-0 hover:border-opacity-100 hover:text-green-500 duration-200 cursor-pointer hidden md:inline text-md md:text-lg">
              <NavLink to="*">Contact</NavLink>
            </li>
          </ul>
        </nav>
        {/* buttons -*/}
        <div className="w-3/12 flex justify-end">
          {userId === null ? (
            <NavLink
              className={`font-bold  border-green-500 border rounded-lg hover:bg-green-500 hover:text-white py-2 md:px-4 px-2`}
              to="/login"
            >
              Login
            </NavLink>
          ) : (
            <NavLink
              className={`font-bold  border-green-500 border rounded-lg hover:bg-green-500 hover:text-white py-2 md:px-4 px-2`}
              onClick={onLogOut}
            >
              Logout
            </NavLink>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;
