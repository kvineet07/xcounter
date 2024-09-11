import React,{useState} from "react";

const Counter =() =>{
    const[count, setCount] = useState(0);

    const handleIncrement=()=>{
        setCount(count+1);

    }
    const handDecrement=()=>{
        setCount(count-1);

    }


    return(
        <div>
             <h2>Counter App</h2>
             <h4>Count: {count}</h4>
             <button onClick={handleIncrement}>Increment</button>
             <button onClick ={handDecrement}>Decrement</button>



        </div>

    )
}
export default Counter;
