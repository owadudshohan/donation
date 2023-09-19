import "./table.css";

import { collection, getDocs } from "firebase/firestore";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns3, userColumns5 } from "../../datatablesource";
import { useEffect, useState } from "react";
import { db } from "../../../firebase";

const Datatable3 = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      let list = []
      try {


        const querySnapshot = await getDocs(collection(db, "people"));
        querySnapshot.forEach((doc) => {
          list.push({id: doc.id, ...doc.data()})
          
        });
        setData(list)
      } catch (err) {
        console.log(err)
      }
    };
    fetchData()
  }, []);

  console.log(data)

  const actionColumn5 = [];
  return (
    <div className="datatable1">
      <DataGrid
        rows={data}
        columns={userColumns5.concat(actionColumn5)}
        
      />
    </div>
  );
};

export default Datatable3;