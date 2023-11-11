
import { useState, useEffect } from "react";
import './CounterApp.css'

const CounterApp = ()=> {
    const  [counter, setCounter] = useState(0); 
    
    useEffect(() => {
        
        let interval = setInterval(() => {
            setCounter((prevCount) => prevCount +1 );
            }, 1000);

        return () => {clearInterval(interval);};
    }, []);
    return (
        <div id="fondo">
        
            <h1 id="titulo_app">
                Counter App
            </h1>

            <p id="contador">Counter: {counter}</p>

        </div>
    )

};

export default CounterApp;
