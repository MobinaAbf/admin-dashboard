import "./Dashboard.css";
import { MdDashboard ,MdInventory ,MdAccountCircle} from "react-icons/md";
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
    </div>
  );
};

export default Dashboard;
