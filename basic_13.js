//Array 1-255
function array(){
    var arr = [];
    for(var x = 0; x< 256; x++){
        arr.push(x);
    }
    return arr;
}
//console.log(array(2));

// get even 1000
function sum_evens_numbers(){
    var sum =0;
    for(var x =1; 1001>x; x++){
        if(x%2 === 0){
            sum = sum +x;
        }
    }
    return sum;
}

//console.log(sum_evens_numbers(2));

// Write a function that returns the sum of all odd numbers from 1 to 5000

function sum_odds(){
    var sum = 0;
    for(var x = 1; 5001>x; x++){
        if(x%2 ===1){
            sum = sum + x
        }
    }
    return sum;
}
//console.log(sum_odds(3));

// iterate array - write a function that returns the sum of all values within an  array

function iterArr(arr){
    var sum = 0;
    for(var x = 0; arr.length>x; x++){
        sum = sum + arr[x];
    }
    return sum;
}
console.log(iterArr([2,4,5]));