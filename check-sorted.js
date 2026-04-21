//Problem:-Check if Array is Sorted

let arr=[1, 2, 3, 4]
let isSorted=true;

for(let i=0;i<arr.length;i++){    
        if(arr[i]>arr[i+1]){
            isSorted=false;
            break;
        }
}
if(isSorted==true){
    console.log('Array is sorted');
    
}else{
    console.log('Array is not sorted');
    
}