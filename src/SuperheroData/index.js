import React from 'react'
// import HeroSearch from './HeroSearch'
// import HeroDisplay from './HeroDisplay'




const SuperheroData = () => {

    // const searchname = props?.heroData?.searchname

    // const apiURL = `https://cors-anywhere.herokuapp.com/https://superheroapi.com/api/10218084998348396/search/name=${searchname}/`

    // const [hero, setHero] = React.useState("")

    // const getHero = async () => {
    //     const response = await fetch(apiURL,{headers:{'Origin': 'https://superheroapi.com'}})
    //     const data = await response.json()
    //     setHero(data[''])
    //     // console.log('this has items from name section', data)
    //     // console.log('this is details', data)
    // }
    // React.useEffect(() => {
    //     getHero()
    //   }, [])

      
    return (
        <div className="home">
        <h1>This is the Superhero Database</h1>
        <section className="home-text">
            <h3> This database has general information regarding most heroes or villians across the comic, animated, and cinematic universe.</h3>
            <h2>Marvel/DC Comics</h2>
            <img className="image" src="https://res.cloudinary.com/acurunner79/image/upload/v1611289382/top-10-featured_kkzevu.jpg"></img>
            <h2>Star Wars</h2>
            <img className="image"src="https://res.cloudinary.com/acurunner79/image/upload/v1611289374/Ra4071b5bd9a4a11ae28d697daa76ad52_ffgeg1.jpg"></img>
            <h2>Movies</h2>
            <img className="image" src="https://res.cloudinary.com/acurunner79/image/upload/v1611290787/sci-fi-movie-monsters_zy3o0y.jpg"></img>
        </section>
        </div>
    )
}

export default SuperheroData