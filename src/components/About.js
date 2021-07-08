import React from 'react'
import ReactPlayer from "react-player"
import '../index.css'


const About = () => {

    return (
        <article className="about">
          <h1>Welcome to my Superhero Database. This database has a broad variety of fictional characters that we all love. I hope you enjoy it! </h1>
          {/* <h3>Embed YouTube video - <a href="https://www.cluemediator.com">Clue Mediator</a></h3> */}
          <div className="vid">
            <ReactPlayer url="https://www.youtube.com/watch?v=lHw-6AZvZ7I"/>
         </div>
        </article>
    )
}

export default About