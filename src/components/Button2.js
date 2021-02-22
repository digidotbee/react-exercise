import { useState, useEffect } from 'react'

const Button2 = () => {
    const [count, setCount] =  useState(0)
    useEffect(() => {
        if (count==5){
             alert('Hello!')
        }
    },[count])

    function newCount() {
        setCount(count +1)
    }
    
    return (
        <div>
        <button onClick={newCount} className="btn-increment">{count}</button>
        </div>
    )
}

export default Button2
