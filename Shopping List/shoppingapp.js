const addItemInput = document.querySelector('#addItem');
const listItemsUI = document.querySelector('#listItems');
const addName	= document.querySelector('#addListName');
const listName = document.querySelector('#listName');


addName.addEventListener('keypress', function(e) {
	if (e.key === 'Enter') {
		//Create new name to replace "Name Goes Here"
		listName.innerText = this.value; 	
	};
});


addItemInput.addEventListener('keypress', function(e) {
	if (e.key === 'Enter') {
		//add new item to list
		const newItemText = this.value; 
		const newItem = document.createElement('li');
		newItem.innerText = newItemText;
		listItemsUI.appendChild(newItem);
		this.value = '';
	};
});