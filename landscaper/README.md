#Landscaper 

Landscaping game created using HTML, CSS, and JavaScript as part of General Assembly Software Engineering Immersive Course.

The game loads with the instructions, one button, and an <h2> displaying how much 
you've currently earned. 

As you cut lawns with first available button, you make $1 per button click. money earned is tracked through variable and updated in the DOM. After moneyEarned < 4, 
a section will come up displaying a new item available for sale, determined through the checkIfQualified function, which contained an if...else if statement. 
The item and price are displayed on the screen. 

If the user selects yes, the array toolUsed will be updated with the new tool, and a new button with appear on the screen which will earn the user a new amount of money. Amount earned and the text updated after each button click is through the addMoney function, containing a switch statement. 

After the user unlocks the herd of hungry goats and earns $1000, they trigger the winGame function, which will manipulate the dom by hiding the game options section and updating the 'money earned' heading to state that they have won the game. 


Initial Improvements Needed ---
css - improve button styling and responsiveness
      Make overall page design / color scheme better

js - include option to hide or show game instructions using dom manipulation
