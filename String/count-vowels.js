//Problem: Count Vowels in a String

let s="hellooo"
let count=0

for(let i=0;i<s.length;i++){
    let ch=s[i]
    if("aeiou".includes(ch)){
        count++
    }
}

console.log(count);
