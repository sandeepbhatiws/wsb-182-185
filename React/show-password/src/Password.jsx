import React, { useState } from 'react'

export default function Password() {

    const [ status, setStatus ] = useState(true);

    const showPassword = () => {
        setStatus(!status);
    }

  return (
    <>
      <div className='row'>
        <div className='inputbox'>
            <input type={ status ? 'text' : 'password'  }/>
        </div>

        <div className='button'>
            <button onClick={ showPassword }>{ status ? 'Hide Password' : 'Show Password'  }</button>
        </div>
      </div>
    </>
  )
}
