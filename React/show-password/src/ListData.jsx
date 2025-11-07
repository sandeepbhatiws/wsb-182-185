import React, { useState } from 'react'

export default function ListData() {

    const [data, setData] = useState([1,2,3,3]);

  return (
    <>
      {
        data.map((v,i) => {
            return(
                <div key={i}>{ v }</div>
            )
        })
      }
    </>
  )
}
