//1. Given an array. Write a recursive function that removes the first element and returns the given array. (without using arr.unshift(),assign second element to first, third element to second...)


let arr = [6, 78, 'n', 0, 1];
//let arr = [5];
//let arr = [];

function removeFirstElement (arr, i = 0) {
	if (i == arr.length - 1 || arr.length == 0) {
		arr.length = i;
		return arr;
	}
	arr[i] = arr[++i];
	return removeFirstElement (arr , i) ;
}

let output = removeFirstElement (arr);
console.log (output);


// 2. Given an array of nested arrays. Write a recursive function that flattens it. (Hint create function that concats arrays).

var arr = [1, [2, 3, [4, 5], 6,  [7]], 8, [9, [[10]]]];
//let arr = [14, [1, [3, []], 1], 0];
function concatSubArrays (arr, newArr = [], i = 0) {

	if (i == arr.length){
		 return newArr;
	} else if ( typeof arr[i] == 'object') {
		var  j = 0;
		newArr = concatSubArrays(arr[i], newArr, j);
		return concatSubArrays(arr, newArr, i +=1)
	} else {
		newArr.push (arr[i]);
		return concatSubArrays(arr, newArr, i +=1);
	}
}

var output = concatSubArrays (arr);
console.log (output);
