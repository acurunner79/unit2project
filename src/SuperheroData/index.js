import React from 'react'
import HeroDisplay from './HeroDisplay'




const SuperheroData = () => {

    const apiURL = `https://cors-anywhere.herokuapp.com/https://superheroapi.com/api/10218084998348396/search/batman`

    const [hero, setHero] = React.useState(null)

    const getHero = async () => {
        const response = await fetch(apiURL,{headers:{'Origin': 'https://superheroapi.com'}})
        const data = await response.json()
        console.log('this is heroes', data)
    }
     setHero()
    return (
        <>
        <h1>This is the SuperheroData section</h1>
        <HeroDisplay hero={hero} />
        </>
    )
}

export default SuperheroData