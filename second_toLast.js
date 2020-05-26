// Array: Second-to-Last: Return the second-to-last element of an array. Given [42, true, 4, "Liam", 7], return "Liam".  If array is too short, return null.

function secondToLast(arr){
    let largest = [];
    let second = [];
    for(let i = 0; arr.length>i; i++){
        if(largest < arr[i]){
            second = largest
            largest = arr[i]
        } else if(arr.length<1){
            return null;
        }
    }
    return arr;
}

console.log(secondToLast([8,2,1,5,2,1,2]));

//NOT WORKING