'use:strict';

/****************************************
 *            declarations
 *
 *****************************************/
const addForm = document.querySelector('.add');
const list = document.querySelector('.todos');
const search = document.querySelector('.search input');

/****************************************
 *              functions & event
 *
 *****************************************/
/***************************************
 * function  generateTemplate todo
 *
 * assign to a const generateTemplate
 * a template string inna const html
 *
 */
const generateTemplate = (todo) => {
  const html = `
  <li class="list-group-item d-flex justify-content-between align-items-center">
    <span>${todo}</span>
    <i class="far fa-trash-alt delete"></i>
  </li>
  `;

  // adding a template li to the ul el
  list.innerHTML += html;
};

/**************************************
 * Event created, Adding todos ...
 *
 * submit event
 * arrow function to add template
 */
addForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const todo = addForm.add.value.trim();

  // if todo.length >=1 true
  // else            0  false
  if (todo.length) {
    generateTemplate(todo);
    // reset after typing
    addForm.reset();
  }
});

/***************************************************************
 * Event created to target and remove li items (todos)
 *
 *
 * fixed to the ul element,
 * targeting the li i button .delete class
 */
list.addEventListener('click', (e) => {
  /**
   * if an element contain the 'delete' class (<i>) true
   *  on the list (<ul></ul>) tag
   * then target the icon, click & remove the parent (<li></li>)
   */

  if (e.target.classList.contains('delete')) {
    e.target.parentElement.remove();
  }
});

/********************************
 * Filter / Search function
 *
 * use the .list as a collection of <li> item, collection of 'todos'
 * let's first convert as an array
 * then .filter() and foreach()
 * get a group filtered element and add a display none css attr
 *
 * @param term is a string
 */
const filterTodos = (term) => {
  Array.from(list.children)
    // 'todo' for the <li> //return true
    .filter((todo) => !todo.textContent.toLowerCase.includes(term))
    .forEach((todo) => todo.classList.add('filtered'));

  Array.from(list.children)
    // 'todo' for the <li> //return true
    .filter((todo) => todo.textContent.toLowerCase.includes(term))
    .forEach((todo) => todo.classList.remove('filtered'));
};

/********************************
 * Keyup event
 * hit enter then search function run
 */
search.addEventListener('keyup', () => {
  const term = search.value.trim().toLowerCase;
  filterTodos(term);
});