//swaptowards center

function swapTowardsCenter(arr){
    for(let x = 0; arr.length/2>x; x+=2){
        let temp = arr[x];
        arr[x] = arr[arr.length-1-x];
        arr[arr.length-1-x] = temp;
    }
    return arr;
}

console.log(swapTowardsCenter(['run',2, false, 'seveneleven','charles manseon',2,4,5,10]))

// Fibonacci - Create a function to generate Fibonacci numbers.  In this famous mathematical sequence, each number is the sum of the previous two, starting with values 0 and 1.  Your function should accept one argument, an index into the sequence (where 0 corresponds to the initial value, 4 corresponds to the value four later, etc).  Examples: fibonacci(0) = 0 (given), fibonacci(1) = 1 (given), fibonacci(2) = 1 (fib(0)+fib(1), or 0+1), fibonacci(3) = 2 (fib(1) + fib(2)3, or 1+1), fibonacci(4) = 3 (1+2), fibonacci(5) = 5 (2+3), fibonacci(6) = 8 (3+5), fibonacci(7) = 13 (5+8).  Do this without using recursion first.  If you don't know what a recursion is yet, don't worry as we'll be introducing this concept in Part 2 of this assignment.

function Fibonacci(){
    let num = 0;
    let num2 = 1;
    reult = num2;
    for(let z = 1; 100>z; z++){
        result = num + num2;
        num = num2;
        num2 = result
    }
    return result;
}

console.log(Fibonacci(6))

// Array: Second-to-Last: Return the second-to-last element of an array. Given [42, true, 4, "Liam", 7], return "Liam".  If array is too short, return null.

function secondToLast(arr){
    for(let i = 0; arr.length>i; i++){
        if(arr.length-2){
            return arr[i];
        } else if(arr.length<1){
            return null;
        }
    }
    return arr;
}

console.log(secondToLast([8,2,1,5,2,1,2]));