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
                  <h1 className="title">{item.name}</h1>
                  <img className="image" src={item.image.url} alt="image"></img>
                  <h3>Name: {item.name}</h3>
                  <h3>Race: {item.appearance.race}</h3>
                  <h3>Height: {item.appearance.height[0]}</h3>
                  <h3>Weight: {item.appearance.weight[0]}</h3>
                  {/* <h3>Height: {item.biography}</h3> */}
                </div>

              )
            })
}

      const loading = () => {
         return <h2>Loading...</h2>
}
         return hero ? loaded() : loading()
}


export default HeroDisplay