import "./widget.css";
import PersonIcon from '@mui/icons-material/Person';
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import PeopleIcon from '@mui/icons-material/People';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import { useEffect, useState } from "react";
import { query, collection, where, getDocs } from "firebase/firestore";
import { db } from "../../../firebase";
import { Link } from "react-router-dom";

const Widget = ({ type }) => {
  let data;
  

  const [amount, setAmount] = useState(null)

  switch (type) {
    case "user":
      data = {
        title: "USERS",
        link: (<Link to="/users" style={{ textDecoration: "none" }}>
        <h5>See all users</h5>
        </Link>
          ),
        query: "users",
        icon: (
          <PersonIcon
            className="icon"
            style={{
              color: "crimson",
              backgroundColor: "rgba(255, 0, 0, 0.2)",
            }}
          />
        ),
      };
      break;
    case "donor":
      data = {
        title: "DONORS",
        link: (<Link to="/donor" style={{ textDecoration: "none" }}>
        <h5>See all donors</h5>
        </Link>
          ),
        query: "donor",
        icon: (
          <VolunteerActivismIcon
            className="icon"
            style={{
              backgroundColor: "rgba(218, 165, 32, 0.2)",
              color: "goldenrod",
            }}
          />
        ),
      };
      break;
    case "people":
      data = {
        title: "PEOPLES",
        query: "people",
        link: (<Link to="/people" style={{ textDecoration: "none" }}>
        <h5>See all Peoples</h5>
        </Link>
          ),
        icon: (
          <PeopleIcon
            className="icon"
            style={{ backgroundColor: "rgba(0, 128, 0, 0.2)", color: "green" }}
          />
        ),
      };
      break;
    case "balance":
      data = {
        title: "BALANCE",
        isMoney: true,
        query: "donor",
        icon: (
          <AccountBalanceWalletOutlinedIcon
            className="icon"
            style={{
              backgroundColor: "rgba(128, 0, 128, 0.2)",
              color: "purple",
            }}
          />
        ),
        
      };
      break;
    default:
      break;
  }

  useEffect(() => {
    const fetchData = async() =>{
    const today =new Date();
    const lastMonth = new Date(new Date().setMonth(today.getMonth() - 1));
    

    const lastMonthQuery = query(
      collection(db, data.query),
      where("timeStamp", "<=", today),
      where("timeStamp", ">", lastMonth)
  );
  
const lastMonthData = await getDocs(lastMonthQuery)

setAmount(lastMonthData.docs.length)
  };
  fetchData();
}, []);
  
  


  return (
    <div className="widget">
      <div className="left">
        <span className="title">{data.title}</span>
        <span className="counter">
          {data.isMoney && "$"} {amount}
        </span>
        <span className="link">{data.link}</span>
      </div>
      <div className="right">
        <div className="percentage positive">
          
          
        </div>
        {data.icon}
      </div>
    </div>
  );
};

export default Widget;
