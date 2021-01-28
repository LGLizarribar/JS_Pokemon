import { fetchPokemon } from '../apis/api-search'

const searchRandom = async () => {

    const ulNode = document.getElementById('main-random');
    const pokeNumber = Math.round(Math.random() * (150 - 1) + 1);
    console.log(pokeNumber);
    
    //const erased = document.getElementById('main-element');
    //if (erased) {ulNode.removeChild;}

    ulNode.classList.toggle("hidden");

    const foundPokemon = await fetchPokemon(pokeNumber);
    console.log(foundPokemon);


    if (ulNode) {
    const liAttribute = await document.createElement('li');
    const h4Pokemon = await document.createElement('h4');
    h4Pokemon.innerText = await foundPokemon.name;
    const pAttribute = await document.createElement('p');
    pAttribute.innerText = await foundPokemon.id;
    const imgPokemon = document.createElement('img');
    imgPokemon.src = foundPokemon.image;

    liAttribute.appendChild(imgPokemon);
    liAttribute.appendChild(h4Pokemon);
    liAttribute.appendChild(pAttribute);

    ulNode.appendChild(liAttribute);
    ulNode.setAttribute("class", "main__content");
    liAttribute.setAttribute("class", "main__element");
    liAttribute.setAttribute("id", "main-element");
    }

}

export { searchRandom };