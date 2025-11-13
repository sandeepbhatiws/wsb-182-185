import React from 'react'

// Method 2
export default function Header({ head_title, description, children }) {

  return (
    <div>
      <h1>{ head_title }</h1>
      <p>{ description } </p>

      { children }
    </div>
  )
}

// // Method 1
// export default function Header(getData) {

//     console.log(getData);
//   return (
//     <div>
//       <h1>{ getData.head_title }</h1>
//       <p>{ getData.description } </p>
//       { getData.children }
//     </div>
//   )
// }
