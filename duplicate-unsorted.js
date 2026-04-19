

let arr=[4,6,5,2,2,7,5,4,8,9,9]
let unique=[]

for(let i=0;i<arr.length;i++){
   if(!unique.includes(arr[i])) {
    unique.push(arr[i])
   }
    
}
console.log(unique);
