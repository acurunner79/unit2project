import React from 'react'


const HeroDisplay = (props) => {
    // console.log('display?', props)
    const searchname = props?.hero

    const apiURL = `https://cors-anywhere.herokuapp.com/https://superheroapi.com/api/10218084998348396/search/${searchname}/`

    const [hero, setHero] = React.useState("")

    const getHero = async () => {
        const response = await fetch(apiURL,{headers:{'Origin': 'https://superheroapi.com'}})
        const data = await response.json()
        setHero(data[''])
        console.log('this has items from name section', data)
        console.log('this is details', data)
    }
    React.useEffect(() => {
        getHero()
      }, [])


    
    return (
        <>
        <h1>This is the HeroDisplay section</h1>
         
        </>
    )
}

export default HeroDisplay