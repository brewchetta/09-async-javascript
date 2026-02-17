// ASYNCHRONOUS VS SYNCHRONOUS

// SYNC
console.log("I am the first thing")

// ASYNC
function callback() {
    console.log("I am the second thing")
}
setTimeout(callback, 100)

// SYNC
console.log("I am the third thing")

// SYNC
for (let i = 0; i < 2000; i++) {
    console.log("RUNNING")
}


////////////////////////////////////////////////////
// ASYNCHRONOUS
// the event happens out of order
// effectively it gets "set aside" until the SYNC actions finish
// under the hood setTimeout gets added to something called the EVENT LOOP
// EVENT LOOP will check for ASYNC actions after all SYNC actions
////////////////////////////////////////////////////


////////////////////////////////////////////////////
// API - APPLICATION PROGRAMMING INTERFACE
// people use "API" for servers that send/receive information
// API can be built with lots of different frameworks
// node express - example server framework
// when someone sends a REQUEST to the server it will RESPOND (usually with information or an error message)
////////////////////////////////////////////////////



// FETCH //

////////////////////////////////////////////////////
// REQUESTS & RESPONSES
// request - make a request to a server over the internet / network
// the request SHOULD send you a response
// this is the REQUEST/RESPONSE CYCLE
////////////////////////////////////////////////////


////////////////////////////////////////////////////
// HEADERS
// headers are meta info we send with the request (like date/time we made it, etc.)
// Accept lets the server known what kind of data we want back
// (each server will give you back a different data format depending on who built it)
////////////////////////////////////////////////////

// special header options for our fetch request
const fetchOptions = { 
    headers: { Accept: 'text/plain' }
}

                        // this is our request -- async action
const whatWeGetBack = fetch("https://icanhazdadjoke.com/", fetchOptions)
                        // fetch will Promise to bring info back
                        // at first the Promise is "pending"
                        // when the server responds the Promise will either be "fulfilled" or "rejected"


// you can see the request & response in the network tab of the developer tools

// whatWeGetBack will be a "Promise"

////////////////////////////////////////////////////
// PROMISES 
// encapsulates asynchronous actions
// a Promise can be "pending", "fulfilled", "rejected"
// with requests we need to extract information out of the promise
////////////////////////////////////////////////////


////////////////////////////////////////////////////
// HTTP RESPONSE CODES
// 100 - don't worry too much about these, they're basically 200s
// 200 - good responses
// 300 - usually a 304 - response is the same as last time you sent it
// 400 - you made a bad request, for example 404 NOT FOUND
// 500 - our server is broken
////////////////////////////////////////////////////


// ASYNC / AWAIT

async function getDadJoke() {
    const options = { headers: { Accept: 'application/json' } }

    const response = await fetch("https://icanhazdadjoke.com/", options)

    const data = await response.json()

    const joke = data.joke

    const dadJokePTag = document.querySelector("#dad-joke")
    dadJokePTag.textContent = joke
}

// functions with an async keyword have asynchronous elements

// await will wait for an async action to finish before moving to the next line

// parse - translate from one language to another
// from JSON to Javascript

////////////////////////////////////////////////////
// JSON - JAVASCRIPT OBJECT NOTATION
// not technically javascript
// 
// EXAMPLE JSON:
// {
//     "name": "Chett",
//     "age": 21
// }
//
// great format for transmitting info over the internet
//
// to parse JSON into JAVASCRIPT we can use a special method .json()
// this method is async for some reason
////////////////////////////////////////////////////


async function getISSData() {
    const URL = "https://api.wheretheiss.at/v1/satellites/25544"

    const response = await fetch(URL)
    const data = await response.json()

    const issPosition = document.querySelector("#iss-position")
    
    issPosition.textContent = `LATITUDE: ${data.latitude} | LONGITUDE: ${data.longitude}`
}


async function getCharizardData() {
    const URL = "https://pokeapi.co/api/v2/pokemon/charizard"

    const response = await fetch(URL)
    const data = await response.json()

    // this API just happens to have charizard's "sprite" a.k.a. it's pixel image
    const spriteURL = data.sprites.front_default

    const charizardImg = document.querySelector("#charizard-img")

    charizardImg.src = spriteURL
}

async function getMorePokemon() {
    const URL = "https://pokeapi.co/api/v2/pokemon?limit=150"

    const response = await fetch(URL)
    // wait until done ^^^ is done

    const data = await response.json()
    // wait until ^^^ is done

    console.log(data.results)
}


////////////////////////////////////////////////////
// QUERY PARAMS
// at the end of a URL we can add extra info
// for example https://pokeapi.co/api/v2/pokemon?limit=150
// the ?limit=150 means we will get 150 items from the server
// query params are used differently for different APIs
// some APIs don't even use query params!
////////////////////////////////////////////////////


async function getCatPic() {
    const URL = "https://cataas.com/cat?json=true"

    const response = await fetch(URL)
    const data = await response.json()

    const imageUrl = data.url

    const catImg = document.querySelector("#cat-img")
    catImg.src = imageUrl
}


// EXERCISES

// Using https://meowfacts.herokuapp.com/
// Docs https://github.com/wh-iterabb-it/meowfacts

// 1. Create a <p> tag that will be filled with a random fact later. Additionally create a <button> with the text "Get Random Cat Fact". When the button is clicked, fetch from the API a random cat fact and change <p> so that it reads whatever fact you got.

// 2. Create a <ul> which is initially empty along with a <button> which reads "Get 5 cat facts". When the button is clicked, fetch 5 cat facts using query params and append them as <li> to the <ul>.

// 3. Create a <select> for 4 of the languages specified in the API docs. When the "Get Random Cat Fact" button is pressed, it gets the cat fact in the language specified by the <select>. Choose english as the de facto language.

let language = "eng"

// NUMBER 1:

const randomCatFactPTag = document.querySelector("#random-cat-fact")
const randomCatFactButton = document.querySelector("#random-cat-fact-button")

async function getRandomCatFact() {
    const URL = `https://meowfacts.herokuapp.com/?lang=${language}`

    const response = await fetch(URL)
    const catData = await response.json()

    const catFact = catData.data[0]
    randomCatFactPTag.textContent = catFact
}

randomCatFactButton.addEventListener("click", getRandomCatFact)

// NUMBER 2:

const multipleCatFactsContainer = document.querySelector("#multiple-cat-facts-container")
const multipleCatFactsButton = document.querySelector("#multiple-cat-facts-button")

async function getFiveRandomCatFacts() {
    const URL = "https://meowfacts.herokuapp.com/?count=5"

    const response = await fetch(URL)
    const catData = await response.json()

    const factsArray = catData.data

    factsArray.forEach(fact => {
        const li = document.createElement("li")
        li.textContent = fact
        multipleCatFactsContainer.append(li)
    })
}

multipleCatFactsButton.addEventListener("click", getFiveRandomCatFacts)

// NUMBER 3:

const languageSelect = document.querySelector("#language-select")

languageSelect.addEventListener("change", handleSelectLanguage)

function handleSelectLanguage(event) {
    language = event.target.value
}


//////////////////////////////////

// IF YOU FINISH EARLY...

// for this afternoon we're going to start using a special terminal program called node.js

// run this command in the terminal:
//      node --version
// to see if it's installed and if it throws an error go to nodejs.org and follow install instructions for your OS

// for mac it's easiest to install using `brew` commands
// for windows the `choco` command can be a good go to