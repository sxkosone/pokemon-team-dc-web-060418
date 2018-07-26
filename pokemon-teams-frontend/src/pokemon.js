class Pokemon {
    constructor(id, species, nickname, trainerId) {
        this.id = id
        this.species = species
        this.nickname = nickname
        this.trainerId = trainerId
    }
    render() {
        let pokeLi = document.createElement("li")
        pokeLi.innerHTML = this.createPokemonHTML()
        document.getElementById(`${this.trainerId}-pokemons`).appendChild(pokeLi)
    }

    createPokemonHTML() {
        return `${this.nickname} (${this.species})<button class="release" onclick="deletePokemon(${this.id})" data-pokemon-id="${this.id}">Release</button>`
    }
}