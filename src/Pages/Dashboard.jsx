import "./Dashboard.css";
import myImage from "./images.png";
// import myImage1 from "./maze-logo_1_-removebg-preview.png"
import { MdDashboard, MdInventory, MdAccountCircle } from "react-icons/md";
import { BsFillPeopleFill } from "react-icons/bs";
import { AiFillProject, AiOutlineMenu, AiFillPhone } from "react-icons/ai";
import {
  FaShoppingBasket,
  FaTasks,
  FaWallet,
  FaRegComment,
} from "react-icons/fa";
import { BiSearchAlt2, BiUserCircle } from "react-icons/bi";
import { HiOutlineArrowSmRight } from "react-icons/hi";
const Dashboard = () => {
  return (
    <div className="container">
      {/* <input type="checkbox" id="nav-toggle" /> */}
      {/* <div className="sidebar">
        <div className="sidebar-brand">
          <h2>
            <span className="lab la-accusoft">
              {" "}
              <img src="myImage" alt=""/>
            </span>
            <span>Data2Learn</span>
          </h2>
        </div>

        <div className="sidebar-menu">
          <ul>
            <li>
              <a href="#" className="active">
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
      </div> */}

      <div className="main-content">
        <header>
          {/* <h2>
            <label for="nav-toggle">
              <span className="las la-bars">
                <AiOutlineMenu />
              </span>
            </label>
            Dashboard
          </h2> */}

          <div className="search-wrapper">
            <span className="ls la-search"></span>
            <BiSearchAlt2 />
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
              <div>
                <span className="las la-users">
                  <BsFillPeopleFill />
                </span>
              </div>
            </div>

            <div className="card-single">
              <div>
                <h1>79</h1>
                <span>Projects</span>
              </div>
              <div>
                <span className="las la-clipboard">
                  <AiFillProject />
                </span>
              </div>
            </div>

            <div className="card-single">
              <div>
                <h1>124</h1>
                <span>Orders</span>
              </div>
              <div>
                <span className="las la-shopping-bag">
                  <FaShoppingBasket />
                </span>
              </div>
            </div>

            <div className="card-single">
              <div>
                <h1>$6k</h1>
                <span>Income</span>
              </div>
              <div>
                <span className="las la-google-wallet">
                  <FaWallet />
                </span>
              </div>
            </div>
          </div>

          <div className="recent-grid">
            <div className="projects">
              <div className="card">
                <div className="card-header">
                  <h3>Recent Projects</h3>
                  <button>
                    See all
                    <span className="las la-arrow-right">
                      <HiOutlineArrowSmRight />
                    </span>
                  </button>
                </div>

                <div className="card-body">
                  <div className="table-responsive">
                    <table width="100%">
                      <thead>
                        <tr>
                          <td>Project Title</td>
                          <td>Department</td>
                          <td>Status</td>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>UI/UX Design</td>
                          <td>UI Team</td>
                          <td>
                            <span className="status purple"></span>
                            review
                          </td>
                        </tr>
                        <tr>
                          <td>Web development</td>
                          <td>Frontend</td>
                          <td>
                            <span className="status pink"></span>
                            in progress
                          </td>
                        </tr>
                        <tr>
                          <td>Ushop app</td>
                          <td>Mobile Team</td>
                          <td>
                            <span className="status orange"></span>
                            pending
                          </td>
                        </tr>

                        <tr>
                          <td>UI/UX Design</td>
                          <td>UI Team</td>
                          <td>
                            <span className="status purple"></span>
                            review
                          </td>
                        </tr>
                        <tr>
                          <td>Web development</td>
                          <td>Frontend</td>
                          <td>
                            <span className="status pink"></span>
                            in progress
                          </td>
                        </tr>
                        <tr>
                          <td>Ushop app</td>
                          <td>Mobile Team</td>
                          <td>
                            <span className="status orange"></span>
                            pending
                          </td>
                        </tr>

                        <tr>
                          <td>UI/UX Design</td>
                          <td>UI Team</td>
                          <td>
                            <span className="status purple"></span>
                            review
                          </td>
                        </tr>
                        <tr>
                          <td>Web development</td>
                          <td>Frontend</td>
                          <td>
                            <span className="status pink"></span>
                            in progress
                          </td>
                        </tr>
                        <tr>
                          <td>Ushop app</td>
                          <td>Mobile Team</td>
                          <td>
                            <span className="status orange"></span>
                            pending
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>

            <div className="customers">
              <div className="card">
                <div className="card-header">
                  <h3>New customers</h3>
                  <button>
                    See all
                    <span className="las la-arrow-right">
                      <HiOutlineArrowSmRight />
                    </span>
                  </button>
                </div>

                <div className="card-body">
                  <div className="customer">
                    <div className="info">
                      <img src={myImage} width="40px" height="40px" alt="" />
                      <div>
                        <h4>Lewis S.Cunnigham</h4>
                        <small>CEO Excerpt</small>
                      </div>
                    </div>
                    <div className="contact">
                      <span className="las la-user-circle">
                        {" "}
                        <BiUserCircle />
                      </span>
                      <span className="las la-comment">
                        {" "}
                        <FaRegComment />
                      </span>
                      <span className="las la-phone">
                        {" "}
                        <AiFillPhone />
                      </span>
                    </div>
                  </div>

                  <div className="customer">
                    <div className="info">
                      <img src={myImage} width="40px" height="40px" alt="" />
                      <div>
                        <h4>Lewis S.Cunnigham</h4>
                        <small>CEO Excerpt</small>
                      </div>
                    </div>
                    <div className="contact">
                      <span className="las la-user-circle">
                        {" "}
                        <BiUserCircle />
                      </span>
                      <span className="las la-comment">
                        {" "}
                        <FaRegComment />
                      </span>
                      <span className="las la-phone">
                        {" "}
                        <AiFillPhone />
                      </span>
                    </div>
                  </div>

                  <div className="customer">
                    <div className="info">
                      <img src={myImage} width="40px" height="40px" alt="" />
                      <div>
                        <h4>Lewis S.Cunnigham</h4>
                        <small>CEO Excerpt</small>
                      </div>
                    </div>
                    <div className="contact">
                      <span className="las la-user-circle">
                        {" "}
                        <BiUserCircle />
                      </span>
                      <span className="las la-comment">
                        {" "}
                        <FaRegComment />
                      </span>
                      <span className="las la-phone">
                        {" "}
                        <AiFillPhone />
                      </span>
                    </div>
                  </div>

                  <div className="customer">
                    <div className="info">
                      <img src={myImage} width="40px" height="40px" alt="" />
                      <div>
                        <h4>Lewis S.Cunnigham</h4>
                        <small>CEO Excerpt</small>
                      </div>
                    </div>
                    <div className="contact">
                      <span className="las la-user-circle">
                        {" "}
                        <BiUserCircle />
                      </span>
                      <span className="las la-comment">
                        {" "}
                        <FaRegComment />
                      </span>
                      <span className="las la-phone">
                        {" "}
                        <AiFillPhone />
                      </span>
                    </div>
                  </div>

                  <div className="customer">
                    <div className="info">
                      <img src={myImage} width="40px" height="40px" alt="" />
                      <div>
                        <h4>Lewis S.Cunnigham</h4>
                        <small>CEO Excerpt</small>
                      </div>
                    </div>
                    <div className="contact">
                      <span className="las la-user-circle">
                        {" "}
                        <BiUserCircle />
                      </span>
                      <span className="las la-comment">
                        {" "}
                        <FaRegComment />
                      </span>
                      <span className="las la-phone">
                        {" "}
                        <AiFillPhone />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
