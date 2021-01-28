const fetchPokemon = async(pokeName) => {
    //console.log('fetchList');
    let index = 0;


    //API
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeName}/`;
    const response = await fetch(url);
    const data = await response.json();

    let pokemon = {
        name: data.name,
        id: data.id,
        image: data.sprites.front_default,
    };


    return pokemon;

}


export { fetchPokemon };