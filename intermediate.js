// SIGMA - Implement function sigma(num) that, given a number, returns the sum of all positive integers up to the given number(inclusive). 

function Sigma(num){
    if(num === 100){
    return num + Sigma(num-1);
    else:    (return num);
    }
}

//DARTH FIBONACCI -
function fibonacci(num){
    if(num ==1){
        return [0, 1];
    } else{
        var next = fibonacci(num-1);
        next.push(s[s.length -1] + next[next.length-2]);
        return next;
    }
};

console.log(fibonacci(9));

