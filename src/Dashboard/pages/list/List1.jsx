import "./list.css"
import Sidebar from "../../components/sidebar/Sidebar1"
import Navbar from "../../components/navbar/Navbar1"
import Datatable1 from "../donor/datatable1/Datatable1"

const List = () => {
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        <Datatable1 />
        
      </div>
    </div>
  )
}

export default List