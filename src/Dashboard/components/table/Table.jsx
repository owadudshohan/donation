import "./table.css";

import { collection, getDocs } from "firebase/firestore";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns3 } from "../../datatablesource";
import { useEffect, useState } from "react";
import { db } from "../../../firebase";

const Datatable3 = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      let list = []
      try {


        const querySnapshot = await getDocs(collection(db, "donor"));
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

  const actionColumn3 = [];
  return (
    <div className="datatable1">
      <DataGrid
        rows={data}
        columns={userColumns3.concat(actionColumn3)}
        
      />
    </div>
  );
};

export default Datatable3;