// Problem: Minimum element using loop

let arr=[5,2,9,1,7]

let min=arr[0];

for(i=0; i<arr.length; i++){
    if(min > arr[i]){
        min = arr[i]
    }
}
console.log("Minimun element of array:",min);


//Problem 2: Minimum element using Math.min
let arr=[5,2,9,1,7]

let min= Math.min(...arr);
console.log(min);


