import "./Dashboard.css";
import myImage from "./images.png";
import { MdDashboard, MdInventory, MdAccountCircle } from "react-icons/md";
import { BsFillPeopleFill } from "react-icons/bs";
import { AiFillProject } from "react-icons/ai";
import { FaShoppingBasket, FaTasks } from "react-icons/fa";

const Dashboard = () => {
  return (
    <div className="container">
      <div className="sidebar">
        <div className="sidebar-brand">
          <h1>
            <span className="lab la-accusoft"> </span>
            Data2Learn
          </h1>
        </div>

        <div className="sidebar-menu">
          <ul>
            <li>
              <a href="#">
                <span className="material-icons-sharp">
                  <MdDashboard />
                </span>
                <h3>Dashboard</h3>
              </a>
            </li>
            <li>
              <a href="#">
                <span className="material-icons-sharp">
                  <BsFillPeopleFill />
                </span>
                <h3>Customers</h3>
              </a>
            </li>
            <li>
              <a href="#">
                <span className="material-icons-sharp">
                  <AiFillProject />
                </span>
                <h3>Projects</h3>
              </a>
            </li>
            <li>
              <a href="#">
                <span className="material-icons-sharp">
                  <FaShoppingBasket />
                </span>
                <h3>Orders</h3>
              </a>
            </li>
            <li>
              <a href="#">
                <span className="material-icons-sharp">
                  <MdInventory />
                </span>
                <h3>Inventory</h3>
              </a>
            </li>
            <li>
              <a href="#">
                <span className="material-icons-sharp">
                  <MdAccountCircle />
                </span>
                <h3>Accounts</h3>
              </a>
            </li>
            <li>
              <a href="#">
                <span className="material-icons-sharp">
                  <FaTasks />
                </span>
                <h3>Tasks</h3>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="main-content">
        <header>
          <h1>
            <label for="">
              <span className="las la-bars">
                <MdDashboard />
              </span>
            </label>
            Dashboard
          </h1>

          <div className="search-wrapper">
            <span className="ls la-search"></span>
            <input type="search " placeholder="Search here " />
          </div>

          <div className="user-wrapper">
            <img src={myImage} width="40px" height="40px" alt="" />
            <div>
              <h4>Mobina_Abf</h4>
              <small>Super admin</small>
            </div>
          </div>
        </header>

        <main>
          <div className="cards">
            <div className="card-single">
              <div>
                <h1>54</h1>
                <span>Customers</span>
              </div>
              
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
