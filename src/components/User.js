import {useState} from "react";

const User = (props) => {
    const [count, setCount] = useState(0);
    return (
        <div className="user-card">
            <h1>Count: {count}</h1>
            <button onClick={() => {
                let incCount  = count+1;
                setCount(incCount);
            }}>
                Increase Count
            </button>
            <h2>Name: {props.name}</h2>
            <h3>Location: Bangalore</h3>
            <h4>Contacts: @SwagatWebDev</h4>
        </div>
    )
};

export default User;
