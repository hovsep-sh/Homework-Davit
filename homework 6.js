// 1. Given a sorted array and an element from that array.Find the index of the element by using binary search.

let arr = [1, 9, 15, 18, 26, 31, 39, 42, 53, 58, 64, 75, 81, 86, 96];
let num = 31;

function muFunc(arr, num, highRange = arr.length - 1, lowRange = 0, index) {
  index = Math.floor((highRange + lowRange) / 2);
  if (arr[index] < num) {
    lowRange = index + 1;
    return muFunc(arr, num, highRange, lowRange, index);
  } else if (arr[index] > num) {
    highRange = index - 1;
    return muFunc(arr, num, highRange, lowRange, index);
  } else {
    return index;
  }
}

const output = muFunc(arr, num);
console.log(output);
