//Problem: Find Most Frequent Element

let arr = [1, 2, 2, 3, 1, 2, 4];
let freq = {};
let maxcount = 0;
let ans;

for (let i = 0; i < arr.length; i++) {
  let num = arr[i];
  if (freq[num] != undefined) {
    freq[num]++;
  } else {
    freq[num] = 1;
  }
}

for (let key in freq) {
  if (freq[key] > maxcount) {
    maxcount = freq[key];
    ans = key;
  }
}

console.log(ans);
