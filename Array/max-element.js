//problem statement:-Find Maximum Element

let arr= [3, 7, 2, 9, 5]
let max=arr[0]

for(i=0;i<arr.length;i++){
    if(max<arr[i]){
        max=arr[i]
    }
}
console.log(max);
