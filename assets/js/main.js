const offset = 0
const limit = 10
const url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
const url2 = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`

function convertPokemonToHtml(pokemon){
    return `     
        <li class="pokemon">
            <span class="number">#001</span>
            <span class="name">${pokemon.name}</span>

            <div class="detail">
                <ol class="types">
                    <li class="type">grass</li>
                    <li class="type">poison</li>
                </ol>

                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg"
                    alt="${pokemon.name}" srcset="">
            </div>
        </li>         
        `
}

const pokemonList = document.getElementById('pokemonList')


/* fetch(url2)
    .then((response) => response.json())
    .then((jsonBody) => jsonBody.results)
    .then((pokemonList) => {
        for(let i = 0; i < pokemonList.length; i++){
            const pokemon = pokemonList[i];
            console.log(convertPokemonToHtml(pokemon))
        }
    })
    .catch((error) => console.log(error)) */
