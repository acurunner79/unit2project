import React from 'react'


const HeroDisplay = ({hero}) => {

    return (
        <>
        <h1>This is the HeroDisplay section</h1>
    <h2>Name:{hero.response.results[0]}</h2>
        </>
    )
}

export default HeroDisplay