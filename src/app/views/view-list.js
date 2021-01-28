import { fetchList } from '../apis/api-list'

const renderList = async () => {
    //console.log('renderList');
    //TODO Manejo del DOM
    const ulNode = document.getElementById('list');
    const toggled = document.getElementById('main-content');
    toggled.classList.toggle("hidden");
    /*let toggled = list.classList;
    let result = toggled.toggle("hidden");*/
    let offset = 0;
    const listBackEnd = await fetchList(offset);
    //console.log(listBackEnd);


    if (toggled) {
        listBackEnd.forEach((element) => {
            const liPokemon = document.createElement('li');
            const pPokemon = document.createElement('p');
            pPokemon.innerText = element;
            //const imgPokemon = document.createElement('img');
            //imgPokemon.src = image;

            liPokemon.appendChild(pPokemon);
            //liPokemon.appendChild(imgPokemon);

            ulNode.appendChild(liPokemon);
            ulNode.setAttribute("class", "main__content");
            liPokemon.setAttribute("class", "main__element");
        });
    }


}



export { renderList };