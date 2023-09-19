import "./sidebar.css";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonIcon from '@mui/icons-material/Person';
import PeopleIcon from '@mui/icons-material/People';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import HelpCenterIcon from '@mui/icons-material/HelpCenter';
import { Link } from "react-router-dom";


const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="topd">
        <Link to="/dashboard" style={{ textDecoration: "none" }}>
          <span className="logod">Funding Dashboard</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <li>
            <DashboardIcon className="icon" />
            <Link to="/dashboard" style={{ textDecoration: "none" }}>
            <span>Dashboard</span></Link>
          </li>
          <p className="title">LISTS</p>
          <Link to="/users" style={{ textDecoration: "none" }}>
            <li>
              <PersonIcon className="icon" />
              <span>Users</span>
            </li>
          </Link>
          <Link to="/donor" style={{ textDecoration: "none" }}>
          <li>
            <VolunteerActivismIcon className="icon" />
            <span>Donors</span>
          </li>
          </Link>
          <Link to="/people" style={{ textDecoration: "none" }}>
          <li>
            <PeopleIcon className="icon" />
            <span>Peoples</span>
          </li>
          </Link>
          
          
          <Link to="/question" style={{ textDecoration: "none" }}>
          <li>
            <HelpCenterIcon className="icon" />
            <span>Questions</span>
          </li>
          </Link>
          
          
          <p className="title">LOGOUT</p>
          <Link to="/" style={{ textDecoration: "none" }}>
          <li>
            <ExitToAppIcon className="icon" />
            <span>Logout</span>
          </li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
