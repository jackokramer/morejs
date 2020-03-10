// Count Positives - Given an array of numbers, create a function to replace the last value with the number of positive values found in the array.  Example, countPositives([-1,1,1,1]) changes the original array to [-1,1,1,3] and returns it.

function countPositives(arr){
    var positives = 0; // or here
    for(var x = 0; arr.length>x; x++){
        if(arr[x]>0){
            positives ++; // something not right here. 
        }
    }
    arr[arr.length-1] = positives;
    return arr
}
console.log(countPositives([1,2,3,-9,-1,-4]));

// Evens and Odds - Create a function that accepts an array.  Every time that array has three odd values in a row, print "That's odd!".  Every time the array has three evens in a row, print "Even more so!".

function evensNOdds(arr){
    var odds = 0;
    var evens = 0;
    //var sums = 0;
    for(var x = 0; arr.length > x; x++){
        if(arr[x]%2 ===1){
            odds ++;
            evens = 0;
        } else{
            evens++;
            odds = 0;
        }
        if (odds === 3){
            console.log('that is odd');
            odds = 0
        } else if (evens === 3){
            console.log('even more so!');
            evens = 0;
        }
    }
}

// Increment the Seconds - Given an array of numbers arr, add 1 to every other element, specifically those whose index is odd (arr[1], arr[3], arr[5], etc).  Afterward, console.log each array value and return arr.

function incerementInSeconds(arr){
    for(var x = 1; arr.length>x; x+2){
        arr[x] = arr[x]+ 1;
    for(var x = 0; arr.length>x; x++){
        console.log(arr[x]);
    }
    }
    return arr;
}

console.log(incerementInSeconds([1,3,5,10,14]));