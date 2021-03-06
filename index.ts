// Import stylesheets
import './style.css';
// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
let itemInput = document.getElementById('itemInput') as HTMLInputElement;
let itemToSearch = document.getElementById('itemToSearch') as HTMLInputElement;
const listItem = document.getElementById('itemList');
let myDropdown = document.getElementById('myDropdown');
type Grocery = 'Pear' | 'Banana' | 'Ananas';
interface ShoppingListType {
  groceries: Grocery[];
}
class ShoppingList implements ShoppingListType {
  groceries: Grocery[] = [];
  addItem(item: Grocery): void {
    this.groceries = [...this.groceries, item];
  }
  removeItem = (item: string): void => {
    this.groceries = this.groceries.filter((grocery) => item !== grocery);
  };
  render = (option) => {
    const node = document.createElement('li');
    node.className= "list-group-item m-1";
    if (option) {
      for (const grocery of this.groceries) {
        node.innerHTML =
          '<button type="button" class="btn btn-outline-danger m-1">X</button>' + grocery;
        listItem.appendChild(node);
        node.addEventListener('click', this.removeItemAction, false);
      }
      itemInput.value = '';
    } else {
      listItem.parentNode.removeChild;
      this.render(true);
    }
  };
  removeItemAction(e) {
    var elElement = e.currentTarget;
    var elContainer = elElement.parentNode;
    elContainer.removeChild(elElement);
  }
  attachEvents() {
    const addItemButton = document.getElementById('addItemButton');
    addItemButton.addEventListener('click', () => {
      if (itemInput.value == '') alert('please write something');
      else {
        this.addItem(itemInput.value);
        this.render(true);
      }
    });
    const searchButton = document.getElementById('searchItem');
    searchButton.addEventListener('click', () => {
      if (itemToSearch.value == '') alert('please write something');
      else {
        const groceriesSearched = this.groceries.filter(
          (grocery) => itemToSearch.value == grocery
        );
        const a = document.createElement('a');
      for (const grocery of this.groceries) {
        a.innerHTML = grocery;
        myDropdown.appendChild(a);
      }
        console.log(groceriesSearched);
        searchButton.classList.toggle("show");
      }
    });
  }
}
const myList = new ShoppingList();
myList.attachEvents();
myList.render();
