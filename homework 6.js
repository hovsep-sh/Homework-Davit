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





//2 Write a function to get all possible subsets of length N of the given array. Assume that all elemnts in array are unique.

const arr = [1, 2, 3, 4, 5, 6, 7];
const num = +prompt ('type any number [1 - 9]','5');

function getAllPossibleSubsets(arr, num) {
  let arrLength = arr.length;
  if (num >= arrLength){
	  return arr;
  }
  let result = [];
  let numArr = [];
  let j = 0;
  while (j < num) {
    numArr.push(j++);
  }
  while (numArr[0] !== arrLength - num + 1) {
    while (numArr[num - 1] < arrLength) {
      subArr = [];
      for (let i = 0; i < num; i++) {
        subArr.push(arr[numArr[i]])
      }
      result.push(subArr);
      numArr[num - 1]++;
    }
    numArr = getnextIterationNumArr(numArr, num, arrLength);
  }
  return result;
}

function getnextIterationNumArr(numArr, num, arrLength, currentIndex = num - 1) {
  if (numArr[currentIndex] - 1 === numArr[currentIndex - 1]) {
    numArr = getnextIterationNumArr(numArr, num, arrLength, currentIndex - 1)
    numArr[currentIndex] = numArr[currentIndex - 1] + 1;
    return numArr;
  }
  numArr[currentIndex - 1] += 1;
  numArr[currentIndex] = numArr[currentIndex - 1] + 1
  return numArr;
}

const output = getAllPossibleSubsets(arr, num);
console.log(output);
