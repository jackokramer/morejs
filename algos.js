// push front - Given an array and an additional value, insert the value at the beginning of the array. Do this without any built in methods.

function pushFront(arr, val){
    // push each value in array over once.
    for(var x = arr.length; x>=1; x--){
        arr[x] = arr[x-1];
        console.log(arr);
    }
    arr[0]= val;
    return arr; 
    // can delete all above with this below
    //return insertAt(arr,0,val);
}

//console.log(pushFront([1,2,3,5],19));

//POP front given an array remove and return the value at the beginning of the array. Do this without any built in array method except pop().

function popFront(arr, val){
    console.log(arr);
    var returnVal = arr[0];
    for(var x = 0; arr.length>x; x++){
        arr[x]= arr[x+1]
        console.log(arr);
    }
    arr.pop()
    console.log(arr);
    return returnVal;
    // can add
    //return removeAt(arr,0) for cleaner more effective code
}
//console.log(popFront([1,2,34,1]));

//INSERT AT - Given an array, index, and additional value,  insert the value into array at given index. Do this without using built-in array methods. You can think of pushfront(arrm val) as equivelant to insertAt(arr,0, val).

function insertAt(arr, idx, val){
    //console.log(arr);
    for(var t = arr.length; idx < t; t--){
        arr[t] = arr[t-1];
        //console.log(arr);
    }
    arr[idx] = val;
    return arr;
}
//console.log(insertAt([1,2,5,8], 9,129));

//Remove At  Given an Array and an index into an aray, remove and return the array value at the index. Do this without using built in array methods except pop().
function removeAt(arr, idx){
    console.log(arr);
    var returnVal = arr[idx];
    for(var x = idx; x < arr.length; x++){
        arr[x] = arr[x+1];
        console.log(arr);
    }
    arr.pop();
    console.log(arr);
    return returnVal;
} 

console.log(removeAt([1,2,3,5], 2))

//work on edge cases