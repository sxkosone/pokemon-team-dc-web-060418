const BASE_URL = "http://localhost:3000"
const TRAINERS_URL = `${BASE_URL}/trainers`
const POKEMONS_URL = `${BASE_URL}/pokemons`

//fetch all trainers and their pokemons
//render all trainers and their pokemons
getAllTrainers()

function getAllTrainers() {
    fetch(TRAINERS_URL)
    .then(resp => resp.json())
    .then(trainers => {
        trainers.forEach((trainer) => {
            let newTrainer = new Trainer(trainer.id, trainer.name, trainer.pokemons)
            newTrainer.render()
        })
    })
}

function deletePokemon(pokemonId) {
    document.querySelector(`[data-pokemon-id="${pokemonId}"]`).parentNode.remove()
    fetch(`${POKEMONS_URL}/${pokemonId}`, {
        method: "DELETE"
    }).then(resp => resp.json())
    //.then(console.log)
}

function addPokemon(trainerId) {
    fetch(POKEMONS_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json; charset=utf-8",
        },
        body: JSON.stringify({trainer_id: trainerId})
    }).then(resp => resp.json()).then(pokemon => {
        let newPokemon = new Pokemon(pokemon.id, pokemon.species, pokemon.nickname, pokemon.trainer_id)
        newPokemon.render()
    }).catch(err => {
        console.warn("You cannot have more than 6 pokemons per team!")
    })
}


