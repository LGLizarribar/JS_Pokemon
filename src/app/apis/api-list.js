const fetchList = async(offset) => {
    //console.log('fetchList');
    //let list;


    //API
    const url = `https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=50`;
    const response = await fetch(url);
    const data = await response.json();
    const results = data.results;
    console.log(data);

    const pokeNames = await results.map(element => element.name);


    return pokeNames;

}


export { fetchList };