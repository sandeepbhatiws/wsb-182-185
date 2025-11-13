import React from 'react'
import Header from './Common/Header'
import Footer from './Common/Footer';

export default function Home() {

    var heading = 'This is a heading';
    var description = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."

  return (
    <>
        {/* <Header head_title={heading} description={description} /> */}

        <Header head_title={heading} description={description}>
            <Footer/>
            {description}
        </Header>
      Home Page
    </>

  )
}
