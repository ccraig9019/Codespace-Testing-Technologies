function reverseString(strInput) {
    let result = "";
    for (let i = strInput.length; i > 0; i--) {
        result += (strInput[i-1]);
    }
    console.log(result);
}

reverseString("John");
reverseString("James");