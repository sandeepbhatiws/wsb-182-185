import React, { useState } from 'react'

export default function Counter() {

    // var count = 5;

    // const increment = () => {
    //     count++;
    //     console.log(count);
    // }

    var [count, setCount] = useState(1);

    const increment = () => {
        count++;
        setCount(count);
    }

    const decrement = () => {
        if(count > 1){
            count--;
            setCount(count);
        }
    }


  return (
    <>
      <button>{ count }</button>
      <button onClick={ increment } >Click Me</button>
    </>
  )
}
