const fetchPokemon = async(pokeName) => {
    //console.log('fetchList');
    let index = 0;


    //API
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeName}/`;
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    //const abilities = data.abilities;
    //console.log(abilities);
    


    //const index = await abilities.map(element => element.index);
    //const ability = await index.map(element => element.ability);
    //console.log(ability);
    let list = {
        name: data.name,
        id: data.id,
        image: data.sprites.front_default,
    };


    return list;

}


export { fetchPokemon };