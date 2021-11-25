//Enter 3 Numbers do following arithmetic operation and find the one that is maximum and minimum.

{
    const readline = require("readline");
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.question("Enter The First Number ", function (a) {
        rl.question("Enter The Second Number ", function (b) {
            rl.question("Enter The Third Number ", function (c) {
                let ArithmaticOperationOne = a + b * c;
                let ArithmaticOperationTwo = c + a / b;
                let ArithmaticOperationThree = a % b + c;
                let ArithmaticOperationFour = a * b + c;
                console.log("The First Arithmatic Operation is " + ArithmaticOperationOne);
                console.log("The Second Arithmatic Operation is " + ArithmaticOperationTwo);
                console.log("The Third Arithmatic Operation is " + ArithmaticOperationThree);
                console.log("The Four Arithmatic Operation is " + ArithmaticOperationFour);
                if (a > b && a > c) {
                    console.log("The Number one is greater " + a);
                } else if (b > a && b > c) {
                    console.log("The Number Two is greater " + b);
                } else {
                    console.log("The Number Three is greater " + c);
                }
                rl.close();
            });
        });
    });
}