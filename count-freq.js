//Problem: Count Frequency of Elements


let arr= [1, 2, 2, 3, 1, 4]
let freq={}


for(let i=0;i<arr.length;i++){
    let num=arr[i]
    if(freq[num] !=undefined){
        freq[num]++;
    }else{
        freq[num]=1;
    }
}
console.log(freq);
