function serviceApi() {
}


fetch(" https://pokeapi.co/api/v2/pokemon/2")
    .then(resp => {
        // console.log(resp.json())
        return resp.json()
    })
    .then(pokemon => {
        console.log(pokemon)
    })
    .catch(error => {
        console.error(error)
    })


