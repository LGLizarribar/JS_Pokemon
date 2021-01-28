import { fetchPokemon } from '../apis/api-search'


const searchPokemon = async () => {

    const ulNode = document.getElementById('search-list');
    const pokeName = document.getElementById('pokeName').value;
    //console.log(pokeName);

    const content = ulNode.innerHTML;

    if (content.length > 0) {
        ulNode.innerHTML = "";
    }
    const foundPokemon = await fetchPokemon(pokeName);
    //console.log(foundPokemon);


    const liAttribute = document.createElement('li');
    const h4Pokemon = document.createElement('h4');
    h4Pokemon.innerText = foundPokemon.name;
    const pAttribute = document.createElement('p');
    pAttribute.innerText = foundPokemon.id;
    const imgPokemon = document.createElement('img');
    imgPokemon.src = foundPokemon.image;

    liAttribute.appendChild(imgPokemon);
    liAttribute.appendChild(h4Pokemon);
    liAttribute.appendChild(pAttribute);

    ulNode.appendChild(liAttribute);
    ulNode.setAttribute("class", "main__content");
    liAttribute.setAttribute("class", "main__element");


}

export { searchPokemon };