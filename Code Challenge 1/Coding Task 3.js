 
 function mostExpensiveItem(arrayInput) {
    for (let i = 0; i < (arrayInput.length); i++) { //loop through array
    let tiedUpCost = arrayInput[i].price * arrayInput[i].stock; //get product of price and stock and assign it to a variable
    arrayInput[i].cost = tiedUpCost;  //push that variable to the end of the object
    }
    let costs = arrayInput.map(item => item.cost); //assigning costs to a new array
    //console.log(costs); //for debugging
    let largestCost = Math.max(...costs); //finding the largest item within the new costs array and assigning it to a variable
    //Note on above line: the Math.max() method can't operate on arrays. The ... is the spread method, which separates the elements of an array into a list of arguments
    //console.log(largestCost); //for debugging
    let maxIndex = costs.indexOf(largestCost); //finding the index number of the new costs array and assigning it to a variable
    delete arrayInput[maxIndex].cost; //deleting the cost property from the object with the highest cost
    console.log(arrayInput[maxIndex]); //output the object within the array with the highest cost, by finding its index number
};

mostExpensiveItem([
    { item: "irn bru", price: 3.25, stock: 50 },
    { item: "fanta", price: 3.98, stock: 45 },
    { item: "diet coke", price: 4.40, stock: 38 }, 
    { item: "7up", price: 3.99, stock: 42 }, 
 ]);