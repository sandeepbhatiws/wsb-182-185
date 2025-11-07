import React from 'react'
import Header from './Header'

export default function Home() {

  var a = 5;
  var showHeader = 0;
  var heading = 1;

  var heading2 = 0;

  return (
    <>
      {
        showHeader == 1
        ?
          <Header/>
        :
        ''
      }
        
        <div className={ heading == 1 ? 'row' : 'row d-none' } style={{ backgroundColor : 'red', color : 'white' }}>
        This is a Home page - { a }
        </div>


        <div className="row" style={{ display : `${ heading2 == 1 ? 'none' : ''  }` }}>
        This is a Home page 2 - { a }
        </div>
    </>
  )
}
