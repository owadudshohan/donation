import "../../styles/add.css";
import Sidebar from "../../components/sidebar/Sidebar1";
import Navbar from "../../components/navbar/Navbar1";
import { useState } from "react";
import { addDoc, collection, doc, serverTimestamp, setDoc } from "firebase/firestore";
import { auth, db } from "../../../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";


const New = ({ inputs, title }) => {
  const [data, setData] = useState({})
  const navigate = useNavigate()

  const handleInput = (e) =>{
    const id = e.target.id;
    const value = e.target.value;

    setData({ ...data, [id]: value});
  };

  console.log(data)

  const handleAdd = async(e) =>{
    e.preventDefault();
    try{

    const res = await createUserWithEmailAndPassword(
      auth,
      data.email,
      data.password
    );
    await setDoc(doc(db, "users", res.user.uid),{
      ...data,
      timeStamp: serverTimestamp()
    });
    navigate(-1)
  }catch(err){
    console.log(err)
  }
    
  }

  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>{title}</h1>
        </div>
        <div className="bottom">
          
          <div className="right">
            <form onSubmit={handleAdd} className="formControl">
              

              {inputs.map((input) => (
                <div className="formInput1" key={input.id}>
                  <input id={input.id} type={input.type} placeholder={input.placeholder} onChange={handleInput} />
                </div>
              ))}
              <button type="submit" className="btnSubmit">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default New;
