import React from 'react'


const HeroSearch = (props) => {

    return (
        <div>
        <h1>This is the HeroSearch section</h1>
            <form>
                <input
                   type="text"
                   name="searchHero"
                   placeholder="Enter name"></input>
                <input
                type="submit"
                value="submit"></input>
            </form>
        </div>
    )
}

export default HeroSearch