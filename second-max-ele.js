//Problem: Find Second Largest Element in Array

let arr = [10, 5, 20, 8, 20];
let max1 = Math.max(arr[0], arr[1]);
let max2 = Math.min(arr[0], arr[1]);

for (let i = 2; i < arr.length; i++) {
  if (max1 < arr[i]) {
    max2 = max1;
    max1 = arr[i];
  } else if (arr[i] > max2 && arr[i] != max1) {
    max2 = arr[i];
  }
}
console.log(max2);
