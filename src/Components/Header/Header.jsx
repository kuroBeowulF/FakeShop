import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { useRef, useState, useEffect } from "react";
import { Popover, Menu, Dropdown, Space, Input } from "antd";
const Header = () => {
  const menuRef = useRef();
  const search = useRef();
  const [searchInp, setSearchInp] = useState();
  const [searchResult, setSearchResult] = useState([]);

  const ShowMenuRes = () => {
    menuRef.current.style.display = "block";
  };
  const CloseMenuRes = () => {
    menuRef.current.style.display = "none";
  };
  const showSearch = () => {
    search.current.style.display = "flex";
  };
  const hideSearch = () => {
    search.current.style.display = "none";
  };

  const { selectedProducts } = useSelector((state) => state.Basket);
  const { data } = useSelector((state) => state.Fetch);
  useEffect(() => {
    data.length > 0 &&
      setSearchResult(
        data.filter((item) =>
          item.title.includes(searchInp.length > 0 ? searchInp : "!!!!")
        )
      );
  }, [searchInp]);
  const keys = Object.keys(selectedProducts);
  const content = keys.length
    ? keys.map((id) => (
        <div className="flex mt-3" key={id}>
          <img
            src={selectedProducts[id].image}
            alt="Zooo!!"
            width={"30px"}
            height={"30px"}
          />
          <span className="ml-2 mt-2">
            {selectedProducts[id].title}{" "}
            <span className="text-red-600">
              {selectedProducts[id].count > 1
                ? `x${selectedProducts[id].count}`
                : ""}
            </span>
          </span>
        </div>
      ))
    : null;
  const Result = (
    <div className="max-h-64 overflow-auto">
      {searchResult.length > 0
        ? searchResult.map((item) => (
            <div className="flex mt-3 " key={item.id}>
              <img
                src={item.image}
                alt="Zooo!!"
                width={"30px"}
                height={"30px"}
              />
              <span className="ml-2 mt-2">
                {item.title}{" "}
                <span className="text-red-600">
                  {item.count > 1 ? `x${item.count}` : ""}
                </span>
              </span>
            </div>
          ))
        : ""}
    </div>
  );
  const menu = (
    <Menu style={{ left: 30, top: 15 }}>
      <Menu.Item>
        <NavLink to="/Loging">
          <div className="menuButtom w-28 h-8 flex justify-center items-center text-lg font-light">
            Log in
          </div>
        </NavLink>
      </Menu.Item>
      <Menu.Item>
        <NavLink to="/CheckingOrder">
          <div className="text-center text-lg font-light">Track Order</div>
        </NavLink>
      </Menu.Item>
      <Menu.Item>
        <NavLink to="/Dashbord">
          <div className="text-center text-lg font-light">Dashbord</div>
        </NavLink>
      </Menu.Item>
      <Menu.Item>
        <div className="text-center text-lg font-light" onClick={showSearch}>
          Search
        </div>
      </Menu.Item>
    </Menu>
  );
  return (
    <div
      className={
        " flex shadow-md shadow-black w-full bg-slate-500 h-28 items-center"
      }
    >
      <div className="lg:w-3/6 w-full px-12 flex justify-between">
        <div className="font-serif sm:text-xl text-sm font-bold text-white w-1/2">
          Welcome to Rophy Shop
        </div>
        <div className="search flex justify-center" ref={search}>
          <div
            onClick={hideSearch}
            className="text-slate-500 font-bold cursor-pointer text-md flex jusetify-center items-center bg-gray-300"
          >
            Close
          </div>
          <Popover content={Result}>
            <Input
              value={searchInp}
              onChange={(e) => setSearchInp(e.target.value)}
            ></Input>
          </Popover>
        </div>
      </div>
      <div
        className="menoIcon lg:hidden block cursor-pointer"
        onClick={ShowMenuRes}
      ></div>
      <div
        className="bg-white fixed top-0 right-0 h-screen md:w-1/3 w-1/2 z-40 pt-5 hidden"
        ref={menuRef}
      >
        <div
          className="closeMenu w-3 h-3 ml-5 cursor-pointer"
          onClick={CloseMenuRes}
        ></div>
        <div className="flex items-center justify-center mt-5">
          <div className="menuButtom w-28 h-8 flex justify-center items-center text-lg font-light">
            Log in
          </div>
        </div>
        <ul className="mt-10 text-2xl font-bold ">
          <NavLink to="./">
            <li className="text-center text-black">Home</li>
          </NavLink>
          <NavLink to="/ProductsList">
            <li className="text-center text-black mt-3">Collection</li>
          </NavLink>
          <NavLink to="/ShoppingBasket">
            <li className="text-center text-black mt-3">Basket</li>
          </NavLink>
          <NavLink to="/CheckingOrder">
            <li className="text-center text-black mt-3">Track</li>
          </NavLink>
          <NavLink to="/Dashbord">
            <li className="text-center text-black mt-3">Dashbord</li>
          </NavLink>
          <li className="text-center text-black mt-3" onClick={showSearch}>
            Search
          </li>
        </ul>
      </div>
      <ul className="lg:flex hidden w-2/6 h-1/3 justify-around items-end px-20">
        <NavLink to="/">
          <li className="menuButtom w-28 text-center text-lg font-light mr-3">
            Home
          </li>
        </NavLink>
        <NavLink to="/ProductsList">
          <li className="menuButtom w-28 text-center text-lg font-light mr-3">
            Collection
          </li>
        </NavLink>
        <NavLink to="/ShoppingBasket">
          <li className="menuButtom w-28 text-center text-lg font-light mr-3">
            Basket
          </li>
        </NavLink>
      </ul>

      <div className="h-full w-1/6 lg:flex hidden justify-end items-center pr-12">
        <div className="h-full w-1/3 flex justify-center items-center">
          <Popover content={content} title="Products" className="rounded">
            {" "}
            <div className="basketIcon flex justify-center items-center pl-3 pt-2 text-black">
              <div className="rounded-3xl h-5 w-5 bg-slate-600 relative top-3 right-5 text-white text-center">
                {keys.length}
              </div>
            </div>
          </Popover>
        </div>
        <Space direction="vertical">
          <Dropdown overlay={menu} placement="bottomLeft">
            <div className="setting h-8 w-8 mr-5"></div>
          </Dropdown>
        </Space>
      </div>
    </div>
  );
};
export default Header;
