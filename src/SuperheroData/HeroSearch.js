import React from 'react'


const HeroSearch = (props) => {
    console.log('this is hero', props)
    const [heroData, setHeroData] = React.useState({searchname: "",})

    

       const handleChange = (event) => {
           console.log('event', event)
           setHeroData({...heroData, [event.target.name]: event.target.value })
       }
    const handleSubmit = (event) => {
        event.preventDefault()
       props.herosearch(heroData.searchname)
       props.history.push("/hero-display")
    }   

    return (
        <div>
        <h1>This is the HeroSearch section</h1>
            <form onSubmit={handleSubmit}>
                <input
                   type="text"
                   name="searchname"
                   value={heroData.searchname}
                   onChange={handleChange}
                   placeholder="Enter name"></input>
                <input
                type="submit"
                value="submit"></input>
            </form>
        </div>
    )
}

export default HeroSearch