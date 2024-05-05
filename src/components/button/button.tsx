import { useState } from 'react';

export default function Button() {

    const [count, setCount] = useState(0);
    return (
        <>
            <div className="block">
                <h1>{count}</h1>
                <button onClick={() => {setCount(count - 100)}}>-100</button>
                <button onClick={() => {setCount(count - 10)}}>-10</button>
                <button onClick={() => {setCount(count - 1)}}>-1</button>
                <button onClick={() => {setCount(count + 1)}}>+1</button>
                <button onClick={() => {setCount(count + 10)}}>+10</button>
                <button onClick={() => {setCount(count + 100)}}>+100</button>
            </div>
        </>
    );
}