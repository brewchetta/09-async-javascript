console.log("HELLO WORLD")

async function getCats() {
    const response = await fetch("http://localhost:3000/cats")
    const data = await response.json()
    console.log(data)
}

getCats()