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