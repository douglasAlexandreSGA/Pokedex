const apiurl = "https://pokeapi.co/api/v2"
const capturarPokemons = async () => {
    const resposta = await fetch(`${apiurl}/pokemon`);
    const dadosPokemons = await resposta.json();
    const pokemons = dadosPokemons.results;
    const conteinerPokemons = document.querySelector(".conteiner-pokemons");
    console.log(conteinerPokemons);
    for (let pokemon of pokemons) {
        const conteinerPokemon = document.createElement("div");
        conteinerPokemon.classList.add("conteiner-pokemon");
        const completedPokemonResponse = await fetch(pokemon.url)
        const completedPokemon = await completedPokemonResponse.json()
        console.log(completedPokemon)
        conteinerPokemon.innerHTML = `<img src="${completedPokemon["sprites"]["front_default"]}"/>`;
        conteinerPokemons.appendChild(conteinerPokemon);
    }
}

window.onload = capturarPokemons