import { useDispatch } from "react-redux";
import NavBarSvg from "./SVGS/NavBarSvg";
import { setSearchTerm } from "../redux/actionCreators";

function Navbar() {
  const dispatch = useDispatch();
  

  const handleSearchChange = (e) => {
    dispatch(setSearchTerm(e.target.value));
  };

  return (
    <nav className="py-4 2xl:px-6">
      <div className="container flex items-center justify-between">
        <img src="/images/logo.svg" width="150px" className="object-contain" />

        <ul className="hidden md:flex items-center space-x-6">
          <li className="font-semibold cursor-pointer">Book Store</li>
          <li className="cursor-pointer">Wishlist</li>
          <li className="cursor-pointer">My Collection</li>
        </ul>

        <form className="flex items-center">
          <div className="group relative rounded-md bg-white">
            <NavBarSvg />
            <input
              type="text"
              placeholder="Filter books..."
              className="search"
              id="lws-searchBook"
              onChange={handleSearchChange}
            />
          </div>
        </form>
      </div>
    </nav>
  );
}
export default Navbar;
