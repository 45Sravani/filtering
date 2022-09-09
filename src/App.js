import { useState } from "react";
import {Users} from "./users";
import './App.css';


function App() {

  const [list, setList] = useState([]);

  const [value, setValue] = useState("");

  console.log(Users.filter(user=>user.name.toLowerCase().includes("fe")));
 
   
  const addToList = () => {

    let tempArr = list;

    tempArr.push(value);

    setList(tempArr);

    setValue("");

  };


  return (

    <div className="App">
    <nav className="nav">
      <input

        type="text"
        placeholder="Search"
        className="search"
        value={value}

        onChange={(e) => setValue(e.target.value)}

      />

      <button onClick={addToList} className="but"> +</button>
      </nav>
      <ul className="contents">{ list.filter(item=>item.toLowerCase().includes(value)).map((item) => <li className="items">{item} </li>)}
      
       {Users.filter(user=> user.name.toLowerCase().includes(value)).map((user) => (
          <li key={user.id} className="listItem">{user.name}</li>
        ))}
      
     
      </ul>
     
    </div>

  );

}




 

export default App;


