
import { useState, useEffect } from "react";

const CounterApp = ()=> {
    const  [counter, setCounter] = useState(0); 
    
    useEffect(() => {
        
        let interval = setInterval(() => {
            setCounter((prevCount) => prevCount +1 );
            }, 1000);

        return () => {clearInterval(interval);};
    }, []);
    return (
        <div>
        
            <h1>
                Counter App
            </h1>

            <p>Counter: {counter}</p>

        </div>
    )

};

export default CounterApp;
