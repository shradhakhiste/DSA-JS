 // Problem: Find sum of all elements in an array
// Approach: Traverse array and accumulate sum

let arr= [1, 2, 3, 4]
let sum=0;

for(let i=0; i<arr.length; i++){
    sum += arr[i]
}
console.log("sum of array:",sum);

