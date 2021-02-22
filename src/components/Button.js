import { useState } from 'react'


function Button() {
    const [count, setCount] =  useState(0)

    function newCount() {
        setCount(count +1)
    }
    
    return (
        <div>
        <button onClick={newCount} className="btn-increment">{count}</button>
        </div>
    )
}

export default Button
