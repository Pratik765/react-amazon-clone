import { FaLocationDot } from "react-icons/fa6";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { FaBars } from "react-icons/fa6";
import { FaShoppingBag } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const Header = () => {
  const count = useSelector((store) => store.bag);
  return (
    <header>
      <div className="navbar">
        <Link className="am-logo" to="/">
          Amazon
        </Link>
        <div className="navadd border">
          <p className="addfirst icon">Deliver to</p>
          <div className="addicon">
            <FaLocationDot />
            <p className="addsecond icon">India</p>
          </div>
        </div>
        <div className="nav-search">
          <select className="search-option1">
            <option value="All" className="search-option2">
              All
            </option>
          </select>
          <input
            type="text"
            placeholder="Search Amazon"
            className="search-input"
          />
          <div className="search-icon">
            <FaMagnifyingGlass />
          </div>
        </div>
        <div className="languageoption border">
          <div className="american"></div>
          <select className="lanoption">
            <option value="lan">EN</option>
          </select>
        </div>
        <div className="sign border">
          <p className="hello">Hello, sign in</p>
          <div className="account">
            <select className="account-sign">
              <option value="Account">Account & Lists</option>
            </select>
          </div>
          <div></div>
        </div>
        <div className="box6 border">
          <p className="return">Returns</p>
          <p className="order">& Orders</p>
        </div>
        <div className="border">
          <Link to="bag" className="col">
            <FaShoppingBag className="bag" />
            Bag <span className="item-no">{count.length}</span>
          </Link>
        </div>
      </div>
      <div className="second-nav">
        <div className="allicon border">
          <FaBars />
          <p className="list">All</p>
        </div>
        <div className="panel-ops">
          <p className="ptag border">Today's Deals</p>
          <p className="ptag border">Customer Service</p>
          <p className="ptag border">Registry</p>
          <p className="ptag border">Gift Cards</p>
          <p className="ptag border">Sell</p>
        </div>
        <div className="deals">
          <p>Shop deals in Electronics</p>
        </div>
      </div>
    </header>
  );
};
export default Header;
