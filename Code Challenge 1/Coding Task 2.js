function reverseArray(arrayInput) {
    let resultArray = [];
    for (let i = arrayInput.length; i > 0; i--) {
        resultArray.push(arrayInput[i-1]);
    }

        console.log(resultArray);
}

reverseArray(["I", "love", "JavaScript"])