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


let arr = [1, [2, 3, [4, 5], 6,  [7]], 8, [9, [[10]]]];
//let arr = [14, [1, [3, []], 1], 0];
function concatSubArrays (arr, newArr = [], i = 0) {

	if (i == arr.length){
		 return newArr;
	} else if (Array.isArray(arr[i])) {
		var  j = 0;
		concatSubArrays(arr[i], newArr, j);
		return concatSubArrays(arr, newArr, i +=1)
	} else {
		newArr.push (arr[i]);
		return concatSubArrays(arr, newArr, i +=1);
	}
}

var output = concatSubArrays (arr);
console.log (output);


//3. Given a number. Write a function that calculates its sum of the digits and if that sum has more than 1 digit find the sum of digits of that number. Repeat that process if needed and return the result.


// 1-st way
var num = prompt('intput number biger than 9 to get it\'s digits sum', '29');
function getNumDigitsSum(num, sum = 0) {
	if (isNaN(num) || num === null || num < 0){
		return ('wrong input');
	}
	while (num) {
		sum += num%10;
		num = Math.floor(num / 10);
	}
	if (sum > 9) {
		return getNumDigitsSum(sum);
	}	
	return sum;
}
var output = getNumDigitsSum (num);
console.log (output);


// 2-nd way
var num = prompt('intput number biger than 9 to get it\'s digits sum', '29');

function getNumDigitsSum (num, sum = 0) {
	if (isNaN(num) || num === null || num < 0){
		return ('wrong input');
	} else if (num !== 0) {
		sum += num%10;
		num = Math.floor(num/10);
		return getNumDigitsSum (num, sum);
	} else if (sum > 9) {
		return getNumDigitsSum (sum);
	}
	return sum;
}

var output = getNumDigitsSum (num);
console.log (output);

// 4. Given an object. Invert it (keys become values and values become keys). If there is more than key for that given value create an array.


let obj = { a: '1', b: '2',c: '3', d: '2', e: '1', h: '3', g:  '2'};

function invertObject (obj, newObj = {}) {
	for (let key in obj){
		if(newObj.hasOwnProperty(obj[key])){
			if (Array.isArray(newObj[obj[key]])){
				newObj[obj[key]].push(key);
			} else {
				newObj[obj[key]] = [newObj[obj[key]]];
				newObj[obj[key]].push(key);
			}
		} else {
			newObj[obj[key]]= key;
		} 
		
	}
	return newObj;
}

var output = invertObject (obj);
console.log (output);
