import './styles/styles.scss';
import 'bootstrap';
import  { renderList } from './views/view-list';
import { searchPokemon } from './views/view-search';
import { searchRandom } from './views/view-random';


function addListeners() {
  // TODO
  document.getElementById("btn_show_list").addEventListener("click", renderList);
  document.getElementById("btn_show_random").addEventListener("click", searchRandom);
  document.getElementById("btn_search_pokemon").addEventListener('click', searchPokemon);
}

window.onload = function () {
  addListeners();

  // Carga inicial del listado
  //renderList();
};
