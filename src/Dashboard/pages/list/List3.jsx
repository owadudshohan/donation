import "./list.css"
import Sidebar from "../../components/sidebar/Sidebar1"
import Navbar from "../../components/navbar/Navbar1"
import Question from "../../question/question"

const List = () => {
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        <Question />
      </div>
    </div>
  )
}

export default List