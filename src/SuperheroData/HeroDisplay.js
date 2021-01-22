import React from 'react'
import { Link } from "react-router-dom";


const HeroDisplay = (props) => {
    
    const searchname = props?.hero

    const apiURL = `https://cors-anywhere.herokuapp.com/https://superheroapi.com/api/10218084998348396/search/${searchname}/`

    const [hero, setHero] = React.useState(null)
    

    const getHero = async () => {
        const response = await fetch(apiURL,{headers:{'Origin': 'https://superheroapi.com'}})
        const data = await response.json()
        setHero(data)
        // console.log('this has items from name section', data)
        console.log('this is details', data)
    }
    React.useEffect(() => {
        getHero()
      }, [])


      
    const loaded = () => {
        
      return  hero.results.map(item => {
          
      return (
        <div className="hero-card">
          <Link to="/hero-search">
            <h3 className="go-back">Return To Search</h3>
          </Link>
            <h1 className="title">{item.name}</h1>
            <img className="image" src={item.image.url} alt="{STATUS: UNKNOWN}"></img>
            <h3>Name: {item.name}</h3>
            <h3>Race: {item.appearance.race}</h3>
            <h3>Height: {item.appearance.height[0]}</h3>
            <h3>Weight: {item.appearance.weight[0]}</h3>
            <h3>Uses powers for: "{item.biography.alignment}"</h3>
        </div>

)
})

}

const loading = () => {
  return (
   <>
  <Link to="/hero-search">
    <h3 className="go-back">Return To Search</h3>
  </Link>
    <h2>Loading...</h2>
    <h2>Character not found</h2>
  </>
  )
}

return hero ? loaded() : loading()
}
  


export default HeroDisplay