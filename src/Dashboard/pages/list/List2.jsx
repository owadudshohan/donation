import "./list.css"
import Sidebar from "../../components/sidebar/Sidebar1"
import Navbar from "../../components/navbar/Navbar1"
import Datatable from "../people/datatable2/Datatable2"

const List = () => {
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        <Datatable/>
      </div>
    </div>
  )
}

export default List