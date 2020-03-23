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
//console.log(iterArr([2,4,5]));

//find max -Given an array with multiple values, write a function that returns the maximum number in the array
function maxArry(arr){
    var max = 0;
    for(var x = 0; arr.length>x; x++){
        if(arr[x]>max){
            max = arr[x];
        }
    }
    return max;
}

//find average - given the array with multiple values, write a function that returns the average values in the array.

function findAvg(arr){
    var sum = 0;
    for(var x =0; arr.lengh>x; x++){
        sum = sum + arr[x];
    }
    var avg = sum/arr.length;
    return avg;
}

//console.log(findAvg([1,2,4,67,8]));

// Array odd write a function that would return an array of all the pdd numbers between 1 to 50. 

function arrayOdd(){
    var arr = [];
    for(var x = 0; 51>x; x++){
        if(x%2===1){
            arr.push(x);
        }
    }
    return arr;
}

//console.log(arrayOdd(1));


//Greater than Y - Given the value of Y write a function that takes an array and returns the number of values that are greater than Y . For example if arr=[1,2,4,7] and Y =3, your function will return 2. There are two values in the array greater than 3 which are 5,7

function greaterThanY(arr, Y){
    var count = 0;
    for(var x = 0; arr.length>x; x++){
        if(arr[x]>Y){
            count++;
        }
    }
    return count;
}

//console.log(greaterThanY([2,5,6,5,9], 4)); //doesn't work

// Squares - Given an array with muiltiple values, write a function that replaces each value in the array with the product of the original multiplied by itself. 

function multiple(arr){
    for(var x = 0; arr.length>x; x++){
        arr[x] = arr[x] * arr[x];
    }
    return arr;
}

//console.log(multiple([2,4,6,8]));

// Negatives If a number in the array is less than zero replace it with the value of zero.

function negative(arr){
    var sum = 0;
    for(var x = 0; arr.length>x; x++){
        if(arr[x]<0){
            arr[x] = 0;
        }
    }
    return arr;
}

//console.log(negative([1,3,5,-4]));

// Max/Min/Avg - Given an array with multiple values, write a function that returns a new array that only contains the maximum, minimum, and average of the original array,

function maxMinAvg(arr){
    var max = 0;
    var min = 0;
    var sum = 0;
    for(var x = 0; arr.length > x; x++){
        if(max<arr[x]){
            arr[x] = max;
        } else if(min> arr[x]){
            arr[x] = min;
        }
        sum = sum +arr[x];
    }
        var avg = sum/arr.length;
        var arrnew = [max, min, avg];
        return arrnew;
}

//console.log(maxMinAvg([-1,3,7,11,28]));

// swap values write a function that swaps the first and the last values of a given array. the default minimum of an array is 2.
function swap(arr){
    var temp = arr[0];
    arr[0] = arr[arr.length -1];
    arr[arr.length -1] = temp;
    return arr;
}
//console.log(swap([2,3,1,51,2,4]));

// Numbers to strings - Write a functio  that takes an array of numbers and replaces any negative values within the arry with the String ' What'.

function replaceNeg(arr){
    var sum = 0;
    for(var x = 0; arr.length>x; x++){
        if(arr[x]<0){
            arr[x] = 'What';
        }
    }
    return arr;
}

console.log(replaceNeg([1,4,2,13,-11,2,-9]));