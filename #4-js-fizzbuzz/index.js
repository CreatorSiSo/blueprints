function printFizzBuzz(length) {
    for (let i = 1; i <= length; i++) {
        let returnStr = "";
        if (i % 3 == 0) { returnStr = "Fizz" }
        if (i % 5 == 0) { returnStr += "Buzz" }
        if (returnStr == "") { returnStr = i }
        console.log(returnStr);
    }
}

printFizzBuzz(100);