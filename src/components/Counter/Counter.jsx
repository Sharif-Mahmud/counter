import "./Counter.css";
import { useState } from "react";

const Counter = () => {
    const [state, setState]  = useState(0);
    const [color, setColor] = useState("orange");

    // Btn Decrement
    const handleCounterDecrement = () => {
        if(state > 0){
            setState(state - 1);
        }else{
            alert("Stop");
        }
        
    }

    // Btn Increment
    const handleCounterIncrement = () =>{
        if(state < 10){
            setState(state + 1);
        }else{
            alert("Stop");
        }
    }

    // Background color
    const handleBtnClick = (bg) => {
        setColor(bg);
    }

  return (
    <>
      <div className="counter" style={{ backgroundColor: color }}>
        <div>
          <h1>Counter</h1>
          <h2>{state}</h2>
          <button onClick={handleCounterDecrement}>--</button>
          &nbsp;
          <button onClick={handleCounterIncrement}>++</button>
          <hr />
          <h4>Change Background Color</h4>
          <button onClick={() => handleBtnClick("red")}>Red</button>
          <button onClick={() => handleBtnClick("green")}>Green</button>
          <button onClick={() => handleBtnClick("skyblue")}>Skyblue</button>
          <button onClick={() => handleBtnClick("yellow")}>Yellow</button>
          <button onClick={() => handleBtnClick("purple")}>Purple</button>
        </div>
      </div>
    </>
  );
}

export default Counter