//bubble sort function 

let bubbleSort = (inputArr) => {
    let len = inputArr.length;
    let swapped;
    do {
        swapped = false;
        for (let i=0; i<len; i++) {
            if(inputArr[i] > inputArr[i + 1]) {
                let tmp = inputArr[i];
                inputArr[i] = inputArr[i+1];
                inputArr[i+1] = tmp;
                swapped = true;
            }
        }
    } while (swapped);
    return inputArr;
};



document.querySelector('#sort-button').addEventListener('click', function() {
    //retrieve value from input
    let numberList = document.querySelector('#numberInput').value;
    console.log(numberList);
    //change value into array
    let numberArr = numberList.split(',').map(Number);
    console.log(numberArr);
    //sort the array
    numberArr = bubbleSort(numberArr);
    console.log(numberArr);
    //display array on page
    let stringArray = numberArr.toString(" ").split(' ');
    const paragraph = document.createElement('p');
    paragraph.innerText = stringArray;
    paragraph.setAttribute("class", "sorted-list");
    console.log(paragraph);
    document.querySelector('.bubble-algorithms').appendChild(paragraph);
    document.querySelector('#numberInput').value = " ";
});