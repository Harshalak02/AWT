function fact(number) {
    let global = "I'm a variable in the global scope.";

    function cal(n) {
        if (n === 0) {
            return 1;
        } else {
            return n * cal(n - 1); // Recursive call
        }
    }

    let local = "I'm a variable in the local scope.";

    const factorial = cal(number);
    console.log(`Factorial of ${number} is: ${factorial}`);

    console.log("Accessing global scope variable:", global);
    console.log("Accessing local scope variable:", local);
}

const num = 5;
fact(num);
