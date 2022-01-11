import { NavLink } from "react-router-dom";
const Footer = () => {
  return (
    <div className="w-full h-20 bg-slate-600 flex md:justify-around justify-center items-center">
      <span className="text-white text-lg">
        Contact : KuroBeowulF@gmail.com
      </span>
      <ul className="md:flex hidden">
        <NavLink to="/ProductsList">
          <li className="text-lg text-orange-300 font-light">ProduCts</li>
        </NavLink>
        <NavLink to="/ShoppingBasket">
          {" "}
          <li className=" ml-4 text-lg text-orange-300 font-light flex">
            Basket{" "}
            <div className="w-4 h-4 bg-transparent  flex justify-center items-center text-orange-500"></div>
          </li>
        </NavLink>
        <NavLink to="/CheckingOrder">
          <li className=" text-lg text-orange-300 font-light">Track Order</li>
        </NavLink>
      </ul>
    </div>
  );
};
export default Footer;
