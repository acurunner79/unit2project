import React from 'react'
// import HeroSearch from './HeroSearch'
// import HeroDisplay from './HeroDisplay'




const SuperheroData = (props) => {

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
            <h3> This database has general information regarding </h3>
        </section>
        </div>
    )
}

export default SuperheroData