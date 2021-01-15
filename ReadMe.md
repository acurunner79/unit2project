# Project Overview

## Project Links

- [Github Repo](https://github.com/acurunner79/unit2project.git)
- [add your deployment link]()

## Project Description

I'm creating a searchable app that will give you information on most comic superheroes

## API

Use this section to include info about the API you have chosen and a code snippet of the data that it returns and is required for your project. 


```
{response: "success", results-for: "batman", results: Array(3)}
response: "success"
results: Array(3)
0:
appearance: {gender: "Male", race: "Human", height: Array(2), weight: Array(2), eye-color: "Blue", …}
biography: {full-name: "Terry McGinnis", alter-egos: "No alter egos found.", aliases: Array(5), place-of-birth: "Gotham City, 25th Century", first-appearance: "Batman Beyond #1", …}
connections: {group-affiliation: "Batman Family, Justice League Unlimited", relatives: "Bruce Wayne (biological father), Warren McGinnis (…, Mary McGinnis (mother), Matt McGinnis (brother)"}
id: "69"
image: {url: "https://www.superherodb.com/pictures2/portraits/10/100/10441.jpg"}
name: "Batman"
powerstats: {intelligence: "81", strength: "40", speed: "29", durability: "55", power: "63", …}
work: {occupation: "-", base: "21st Century Gotham City"}
```


## Wireframes

Upload images of wireframe to cloudinary and add the link here with a description of the specific wireframe. Also, define the the React components and the architectural design of your app.

- [Wireframe 1](http://res.cloudinary.com/acurunner79/image/upload/v1610734760/IMG_2723_gek0qk.heic)
- [Wireframe 2](http://res.cloudinary.com/acurunner79/image/upload/v1610734731/IMG_2724_ztg3np.heic)
- [Wireframe 3](http://res.cloudinary.com/acurunner79/image/upload/v1610734718/IMG_2725_gg1ahi.heic)
- [Architecture Link](http://res.cloudinary.com/acurunner79/image/upload/v1610739374/IMG_2726_joyslf.heic)


### MVP/PostMVP - 5min

The functionality will then be divided into two separate lists: MPV and PostMVP.  Carefully decided what is placed into your MVP as the client will expect this functionality to be implemented upon project completion.  

#### MVP EXAMPLE
- Find and use external api 
- Render data on page 
- Allow user to interact with the page

#### PostMVP EXAMPLE

- Add localStorage or firebase for storage

## Components
##### Writing out your components and its descriptions isn't a required part of the proposal but can be helpful.

Based on the initial logic defined in the previous sections try and breakdown the logic further into stateless/stateful components. 

| Component | Description | 
| --- | :---: |  
| App | This will include React Router| 
| HeroSearch.js | This is where you can search by name | 
| SuperheroDatabase.js | This is where my API fetch will happen | 
| HeroDisplay.js | This is where my searched hero will display | 
| Nav.js | My navbar will be here | 
| About.js | This will display text giving info about app | 


Time frames are also key in the development cycle.  You have limited time to code all phases of the game.  Your estimates can then be used to evalute game possibilities based on time needed and the actual time you have before game must be submitted. It's always best to pad the time by a few hours so that you account for the unknown so add and additional hour or two to each component to play it safe. Also, put a gif at the top of your Readme before you pitch, and you'll get a panda prize.

| Component | Priority | Estimated Time | Time Invetsted | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Adding Search Form | H | 4hrs|  |  |
| Working with API | H | 4hrs |  |  |
| CSS Styling: Post MVP | H | 4hrs |  |  |
| Total | H | 12hrs| hrs | hrs |

## Additional Libraries
 Use this section to list all supporting libraries and thier role in the project such as Axios, ReactStrap, D3, etc. 

## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of an a brief description.  Code snippet should not be greater than 10 lines of code. 

```
function reverse(string) {
	// here is the code to reverse a string of text
}
```
