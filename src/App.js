import React, {useState} from "react";
import "./App.css";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.min.js";
import data from "./data.json";

function App() {
  const [acc, setAcc] = useState(null);


  /*so whats happening is when i click the button for the first time, i am passing the id to the function
  so null(0) checks for 0==1 false so it will return setAcc(1)//truthy value
  it opens the content. again when i click the button for the second time, i am passing the id to the function now
  already the state is set to 1 so when we again pass the id to the function 1 == 1 return setAcc(null); so closes the content.
  */
  const toggleSpan = (i) =>{
    if(acc == i){
      console.log(acc,i); // 0 == 1
      return setAcc(null);
    }
    setAcc(i);
  }

  return (
    <div className="container">
      {data.map((item) => (
        <div className="acc-container" key={item.id}>
          <div className="acc-title">
            <h2>{item.title}</h2>
            <button className= "btn" onClick={() => toggleSpan(item.id)}> {acc == item.id? "-": "+"} </button>
          </div>
          <div className= {acc == item.id? "active": "acc-content"}>{item.description}</div>
        </div>
      ))}
    </div>
  );
}

export default App;
