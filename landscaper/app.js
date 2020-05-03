//You are starting a landscaping business but all you have are your teeth.
//Using just your teeth, you can spend the day cutting lawns and make $1. 
//You can do this as much as you want. 
//=====================================================
//Initial Pseudo Code
//====================================================
//there will be a button that lets the user choose to cut the lawn with their teeth
//if user clicks that button, they get a message which states they've earned 1 dollar
//if they click the button a second time, that amount is increased by 1. 
//there needs to be a variable for money and an array for tool used. 
//there needs to be a button in the html and a event listener that responds 
//to the button by triggering an event called cutLawn, which will update
//the money earned and inform the user of their new total. 
//After user reaches 5 dollars, an option needs to pop up to buy a new tool
//there needs to be a function that will add tools to the array and only let user by 
//a new tool once. That new tool will then create a new button on the page and will have
//a different money about.

//variables
const toolUsed = ['teeth']
let moneyEarned = 0;
let currentToolAvailableForPurchase = "";
let visibleCurrentTool = "";
let currentToolPrice = 0;
let moneyEarnedPerLawn = 0;

const gameChoiceDisplay = document.querySelector('#gameChoiceDisplay');
const moneyDisplay = document.querySelector('#moneyDisplay');
const newToolSelectionDisplay = document.querySelector('#newToolSelection');
const yesAndNoSection = document.querySelector('#yesAndNoSection');
const instructionSection = document.querySelector('.instructions');


const toolForSaleParagraph = document.querySelector('#announceToolAvailable');

const buyNewItemButton = document.getElementById('buyNewItemButton');
const yesButton = document.getElementById('yesButton');
const noButton = document.getElementById('noButton');
const instructionsButton = document.querySelector('.instructions-button');


//functions ================================================

//function to add money, with different dollar amount added depending on tool used
const addMoney = (tool) => {
    switch(tool) {
        case 'teeth': 
            moneyEarned ++;
            updateMoneyDisplay('After cutting the lawn with your teeth');
            break;
        case 'rustyScissor':
            moneyEarned += 5;
            updateMoneyDisplay('After cutting the lawn with your rusty scissors');
            break;
        case 'lawnmower': 
            moneyEarned += 50;
            updateMoneyDisplay('After cutting the lawn with your lawnmower');
            break;
        case 'batteryLawnmower':
            moneyEarned += 100;
            updateMoneyDisplay('After cutting the lawns with your fancy battery-powered lawnmower');
            break;
        case 'herdOfHungryGoats':
            moneyEarned += 250;
            updateMoneyDisplay('After hiring a team of hungry goats to cut the grass for you');
            break;
        default: 
            updateMoneyDisplay('After lying back and not cutting any lawns')
    }
    checkIfQualified();
}

const updateMoneyDisplay = (firstPhrase) => {
    if (moneyEarned < 2) {
        moneyDisplay.innerText  = `${firstPhrase}, you have earned a total of $ ${moneyEarned} dollar.`
    } else {
        moneyDisplay.innerText  = `${firstPhrase}, you have earned a total of $ ${moneyEarned} dollars.`
    }
}

const winGame = () => {
    if (toolUsed.includes('herdOfHungryGoats') && moneyEarned >= 1000) {
        moneyDisplay.innerText  = `You have earned over $1000 dolars and won the game!!!!!`; 
        gameChoiceDisplay.style.display = 'none';
    } else {
        return;
    }
}

//function to check if total money earned qualifies for new item. If qualified, will display buy new item button on screen.
const checkIfQualified = () => {
    if (moneyEarned < 4) {
        return;
    } else if (moneyEarned > 4 && !(toolUsed.includes('rustyScissor'))) {
        buyNewItemButton.style.display = 'block';
        currentToolAvailableForPurchase = 'rustyScissor';
        visibleCurrentTool = 'rusty scissors';
        moneyEarnedPerLawn = 5;
        currentToolPrice = 5;
    } else if(moneyEarned > 24 && !(toolUsed.includes('lawnmower'))) {
        buyNewItemButton.style.display = 'block';
        currentToolAvailableForPurchase = 'lawnmower';
        visibleCurrentTool = 'lawnmower';
        moneyEarnedPerLawn = 50;
        currentToolPrice = 25;
    } else if(moneyEarned > 249 && !(toolUsed.includes('batteryLawnmower'))) {
        buyNewItemButton.style.display = 'block';
        currentToolAvailableForPurchase = 'batteryLawnmower';
        visibleCurrentTool = 'battery-powered lawnmower'; 
        moneyEarnedPerLawn = 100;
        currentToolPrice = 250;
    } else if(moneyEarned > 499 && !(toolUsed.includes('herdOfHungryGoats'))){
        buyNewItemButton.style.display = 'block';
        currentToolAvailableForPurchase = 'herdOfHungryGoats';
        visibleCurrentTool = 'a herd of hungry goats';  
        moneyEarnedPerLawn = 250;
        currentToolPrice = 500;
    }
}

//function to reveal yes and no button section and update paragraph
const revealChoiceSection = () => {    
    toolForSaleParagraph.innerText = `You can buy ${visibleCurrentTool} for $ ${currentToolPrice} dollars, would you like to buy?`;
    newToolSelectionDisplay.style.visibility = 'visible';
}

//function to apply event listener to new buttons with class of .choice_button. 
const applyEventListenerToButton = (id) => {
    document.querySelector(`#${id}`).addEventListener('click', function () {
            // const arrayElementName = this.getAttribute('id');
            const index = toolUsed.indexOf(id);            
            addMoney(toolUsed[index]);
            winGame();
    });
}



//if yes button is clicked, a new button is created for the bought tool
const buyNewItem = () => {
    toolUsed.push(`${currentToolAvailableForPurchase}`);
    const newButton = document.createElement('button');
    newButton.innerText = `Cut Lawn with ${visibleCurrentTool} ($${moneyEarnedPerLawn})`;
    newButton.setAttribute('id', `${currentToolAvailableForPurchase}`);
    const elementId = newButton.getAttribute('id');    
    newButton.setAttribute('class', 'choice_button');
    gameChoiceDisplay.appendChild(newButton);   
    applyEventListenerToButton(elementId);
 
}

//function to hide tool selection display, triggered by both yes and no button
const closeToolSelectionDiv = () => {
    newToolSelectionDisplay.style.visibility = "hidden";
}

//event listeners and called functions===================================================

//calls event listener that triggers add money function when cut lawn with teeth button is clicked
applyEventListenerToButton('teeth');

//this event listener triggers revealChoiceSectionfunction when buy new item button is clicked
buyNewItemButton.addEventListener('click', revealChoiceSection);

//this event listener adds new tool to array when yes button is clicked, then hides tool selection div
//only available after buy new item button clicked
yesButton.addEventListener('click', function () {
    buyNewItem();
    closeToolSelectionDiv();
    buyNewItemButton.style.display = 'none';
    visibleCurrentTool = " ";
    currentToolAvailableForPurchase = " ";
    currentToolPrice = 0;
});

//this event listener hides tool selection div when no button is clicked
//only available after buy new item button clicked
noButton.addEventListener('click', function () {
    closeToolSelectionDiv();
})

//This event listener hides or displays the instructions for the game

instructionsButton.addEventListener('click', function() {
    if (instructionsButton.innerText === 'VIEW INSTRUCTIONS') {
        instructionSection.style.display = 'block';
        instructionsButton.innerText = 'CLOSE INSTRUCTIONS';
    } else if (instructionsButton.innerText === 'CLOSE INSTRUCTIONS') {
        instructionSection.style.display = 'none';
        instructionsButton.innerText = 'VIEW INSTRUCTIONS';
    }
})






