
  
//adds item to list when "Add to List" button is clicked
  let i = 0;
  function addToList() {
    const li = document.createElement('li');
    const inputText = document.querySelector('#new-todo').value;
    li.innerText = inputText;
    li.id = `listitem${i}`;
    document.querySelector('.todos').appendChild(li);
    i += 1
  }
  
  document.querySelector('#generate-todo').addEventListener('click', addToList);
  
  
 //crosses out list item when list item is clicked
  function listItemCompleted() {
    console.log(event.target.id);
    document.getElementById(`${event.target.id}`).style.textDecoration = "line-through";
  }
  
  document.querySelector('.todos').addEventListener('click', listItemCompleted);