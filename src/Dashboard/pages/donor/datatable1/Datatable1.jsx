import "./datatable1.css";
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns1, userRows } from "../../../datatablesource";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { db } from "../../../../firebase";

const Datatable1 = () => {
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

  const handleDelete = async(id) => {
    try{
      await deleteDoc(doc(db, "donor", id));
      setData(data.filter((item) => item.id !== id));
    }catch(err){
      console.log(err)
    }
    
  };

  const actionColumn1 = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            
              <div className="viewButton">Edit</div>
        
            <div
              className="deleteButton"
              onClick={() => handleDelete(params.row.id)}
            >Delete</div>
          </div>
        );
      },
    },
  ];
  return (
    <div className="datatable1">
      <div className="datatableTitle">
        Add New Donor
        <Link to="/donor/new" className="link">
          Add New
        </Link>
      </div>
      <DataGrid
        className="datagrid"
        rows={data}
        columns={userColumns1.concat(actionColumn1)}
        pageSize={8}
        rowsPerPageOptions={[8]}
      />
    </div>
  );
};

export default Datatable1;
