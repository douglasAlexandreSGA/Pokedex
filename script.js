const apiurl = "https://pokeapi.co/api/v2"

const fecharModal = () => {
    const modal = document.querySelector(".modal-conteiner");
    modal.remove()
}

const exibirDadosPokemon = (pokemon) => {
    const modalConteiner = document.createElement("div")
    modalConteiner.onclick = fecharModal
    modalConteiner.classList.add("modal-conteiner")
    modalConteiner.innerHTML = `<div onclick="event.stopPropagation()" class="modal">
        <h3>${pokemon.name}</h3>
        <img src="${pokemon["sprites"]["front_default"]}">
    </div>`
    document.body.appendChild(modalConteiner);
}

const capturarPokemons = async () => {
    const resposta = await fetch(`${apiurl}/pokemon`);
    const dadosPokemons = await resposta.json();
    const pokemons = dadosPokemons.results;
    const conteinerPokemons = document.querySelector(".conteiner-pokemons");

    for (let pokemon of pokemons) {
        const conteinerPokemon = document.createElement("div");
        conteinerPokemon.classList.add("conteiner-pokemon");
        const completedPokemonResponse = await fetch(pokemon.url)
        const completedPokemon = await completedPokemonResponse.json()

        conteinerPokemon.innerHTML = `<img onclick='exibirDadosPokemon(${JSON.stringify(completedPokemon)})' src="${completedPokemon["sprites"]["front_default"]}"/>`;
        conteinerPokemons.appendChild(conteinerPokemon);
    }

}

window.onload = capturarPokemons