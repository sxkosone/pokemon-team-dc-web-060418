class Trainer {
    constructor(id, name, pokemonArray) {
        this.id = id;
        this.name = name;
        this.pokemons = pokemonArray;
    }

    render() {
        let trainerCard = document.createElement("div")
        document.querySelector("main").appendChild(trainerCard)
        trainerCard.outerHTML = this.createTrainerHTML()
        //render all pokemon
        this.renderAllPokemon()
    }

    renderAllPokemon() {
        this.pokemons.forEach(pokemon => {
            let newPokemon = new Pokemon(pokemon.id, pokemon.species, pokemon.nickname, pokemon.trainer_id)
            newPokemon.render()
        })
    }

    createTrainerHTML() {
        return `<div class="card" data-id="${this.id}">
        <p>${this.name}</p>
        <button data-trainer-id="${this.id}" onclick="addPokemon(${this.id})">Add Pokemon</button>
        <ul id="${this.id}-pokemons"></ul>
        </div>`
    }
}