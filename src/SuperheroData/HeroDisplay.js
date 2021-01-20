import React from 'react'


const HeroDisplay = (props) => {
    // console.log('display?', props)
    const searchname = props?.hero

    const apiURL = `https://cors-anywhere.herokuapp.com/https://superheroapi.com/api/10218084998348396/search/${searchname}/`

    const [hero, setHero] = React.useState(null)
    

    const getHero = async () => {
        const response = await fetch(apiURL,{headers:{'Origin': 'https://superheroapi.com'}})
        const data = await response.json()
        setHero(data)
        // console.log('this has items from name section', data)
        console.log('this is details', data.results[0])
    }
    React.useEffect(() => {
        getHero()
      }, [])


      
      const loaded = () => {
          
       return  hero.results.map(item => {
            
              return (
                  <div className="hero-card">
                  <h1>{item.name}</h1>
                  <img src={item.image.url}></img>
                  <h2>Name: {item.name}</h2>
                  <h2>Race: {item.appearance.race}</h2>
                  <h2>Height: {item.appearance.height[0]}</h2>
                </div>

              )
            })
}

      const loading = () => {
         return <h2>No Superhero to display</h2>
}
         return hero ? loaded() : loading()
}


export default HeroDisplay