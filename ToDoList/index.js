//change background image according to time of day

const backgroundChangesAccordingToTime = () => {
  let today = new Date();
  let hour = today.getHours();
  const mainSection = document.querySelector('#main-section');
  const toDoListSection = document.querySelector('#list');

  if (hour <= 9) {
    mainSection.style.backgroundImage = "url(images/sunrise_image.jpg)";
  } else if (hour <= 17){
    mainSection.style.backgroundImage = "url(images/daytime_image.jpg)";
    toDoListSection.style.opacity = .8;

  } else if (hour > 17) {
    mainSection.style.backgroundImage = "url(images/night_image.jpg)";
  }
}

backgroundChangesAccordingToTime();
  
//adds item to list when "Add to List" button is clicked
  let i = 0;
  function addToList() {
    const li = document.createElement('li');
    let listItemContent = `<p class="list-item-content">${document.querySelector('#new-todo').value}</p>`
    let deleteButton = '<button class="deleteThis" onclick="deleteThisFunc(this)" title="Delete item">X</button>';
    li.innerHTML = deleteButton + listItemContent;
    li.id = `listitem${i}`;
    document.querySelector('.todos').appendChild(li);
    i += 1
    document.querySelector('#new-todo').value = " ";
  }
  
  document.querySelector('#generate-todo').addEventListener('click', addToList);
  
  //clicks button when enter is pressed within input
  document.querySelector('#new-todo').addEventListener('keyup', function (event) {
    if (event.keyCode === 13) {
      document.querySelector('#generate-todo').click();
    } 
  });
  
 //crosses out list item when list item is clicked
  function listItemCompleted() {
    console.log(event.target.id);
    document.getElementById(`${event.target.id}`).style.textDecoration = "line-through";
  }
  
  document.querySelector('.todos').addEventListener('click', listItemCompleted);

  