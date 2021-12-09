import react, { useState } from 'react';
import './App.css';

function App() {

    const [count, setCount] = useState(0);

    function decreaseCount() {
        if (count > 0) {
            setCount((prevCount) => prevCount - 1);
        }
    }

    function increaseCount() {
        setCount((prevCount) => prevCount + 1);
    }

    return ( <
        div className = "App" >
        <
        button onClick = { decreaseCount } > - < /button> <
        span > { count } < /span> <
        button onClick = { increaseCount } > + < /button> <
        /div>
    );
}

export default App;