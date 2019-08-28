// 1. Given an array of integers, find the pair of adjacent elements that has the largest product and return that product.

const arr = [5, 6, -7, 3, 1, 5, 9, -8, 6, -4];

function getBiggestAdjacentProduct(arr) {
  let len = arr.length;
  let product = arr[0] * arr[1];
  for (let i = 1; i < len - 1; i++) {
    let compare = arr[i] * arr[i + 1];
    if (compare > product) {
      product = compare
    }
  }
  return product
}

const output = getBiggestAdjacentProduct(arr);
console.log(output);

// 2. Given an array of integers. All numbers are unique. Find the count of missing numbers between minimum and maximum elements to make integers sequence.

const arr = [6, 11, 4, 15];
arr.sort(function (a, b) {
  return a - b
});

const count = arr[arr.length - 1] - arr[0] + 1 - arr.length;
console.log(count);

// 3. Convert a long phrase to its acronym.

//const str = 'Prisoner of War';
const str = 'Have a good night';
function getArrOfStrings(str) {
  let len = str.length;
  let newStr = '';
  for (let i = 0; i < len; i++) {
    if (str[i] >= 'A' && str[i] <= 'z') {
      if (!(str[i - 1] >= 'A' && str[i - 1] <= 'z')) {
        if (str[i] >= 'a' && str[i] <= 'z') {
          newStr += str[i].toUpperCase();
        } else {
          newStr += str[i];
        }
      }
    }
  }
  return newStr;
}

const output = getArrOfStrings(str);
console.log(output);

// 4. Given a string of digits, output all the contiguous substrings of length n in that string.

const str = '495215';
const num = 3;
//const str = 'abcdfghz';
//const num = 7;

function getContiguousSubStr(str, num) {
  let len = str.length;
  let arr = [];
  for (let i = 0; i < len - num + 1; i++) {
    arr.push(str.substring(i, i + num));
  }
  return arr;
}

const output = getContiguousSubStr(str, num);
console.log(output);

//5. Create a function that builds a tree like object given an array with object which contains parent and id properties.
//not done yet

//6. Given the list of the following readers: Output the books sorted by the percent in descending order which readStatus is true.
const arr = [
	{
		book: "Catcher in the Rye", 
		readStatus: true, 
		percent: 40
	},
	{
		book: "Animal Farm", 
		readStatus: true,
		percent: 20
	},
	{
		book: "Solaris",
		readStatus: false,
		percent: 90 
	},
	{
		book: "The Fall",
		readStatus: true,
		percent: 50 
	
	},
	{
		book: "White Nights",
		readStatus: false,
		percent: 60 
	},
	{
		book: "After Dark",
		readStatus: true,
		percent: 70 
	},
];

arr.sort(function(a, b){
	return b.percent - a.percent;
});


arr.forEach (function(item){
	if (item.readStatus) {
		console.log (item.book)
	}
});
