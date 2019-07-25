//1. Write a function which receives an array and a number as arguments and returns a new array from the elements of the given array which are larger than the given number.

//_____________________________________________ NON Recursion

/*
//var arr = [10, 25, 16, -5, 30, 15, 24];
//var num = 16;
 var arr = [1, 1, 2, -3, 0, 8, 4, 0];
 var num = 9;
function getArrWithLargNum (arr, num) {
	var newArr = [];
	for (var i = 0; i < arr.length; i++){
		if (num < arr[i]){
			newArr.push(arr[i]);
		}
	}
	return (newArr.length === 0)? 'Such values do not exist.': newArr;
}

var output = getArrWithLargNum(arr, num) ;
console.log (output);
*/

//__________________________________________________Recursion

/*
//var arr = [10, 25, 16, -5, 30, 15, 24];
//var num = 16;
//var arr = [1, 1, 2, -3, 0, 8, 4, 0];
//var num = 9;
function getArrWithLargNum (arr, num, newArr = []) {
	if (arr.length === 0){
		return (newArr.length === 0)? 'Such values do not exist.': newArr;;
	} else {
		if (arr[0] > num){
			newArr.push(arr[0]);
		}
		arr.shift();
		return getArrWithLargNum (arr, num, newArr)
	}
}

var output = getArrWithLargNum(arr, num) ;
console.log (output);
*/

//______________________________________________________________________________________________________________________________________________

// 2. Write a function, which receives two numbers as arguments and finds all numbers between them such that each digit of the number is even. The numbers obtained should be printed in a comma-separated sequence on a single line.

//_____________________________________________ NON Recursion
/*
var number1 = +prompt ('Write first number to find all numbers between them such that each digit of the number is even','19'); 
var number2 = +prompt ('Write second number to find all numbers between them such that each digit of the number is even','42'); 

var first = +prompt ('Write first number to find all numbers between them such that each digit of the number is even','19'); 
var second = +prompt ('Write second number to find all numbers between them such that each digit of the number is even','42'); 

function getAllEvenDigitNumbers(first, second) {

	if (first%2 !== 0){
		first += 1;
	}
	var arr = [];
	for (var i = first; i <= second; i+=2) {
		var isEven = true;
		var num = i;
		while (num) {
			if (num%2 !== 0){
				isEven = false;
				break
			}
			num = Math.floor(num/10);
		}
		if (isEven){
			arr.push(i);
		}	
	}
	return (arr.length === 0)? 'Such numbers does not exist.' : arr;
}	

var output = getAllEvenDigitNumbers(first, second);
console.log(output);
*/

//__________________________________________________Recursion

/*
var number1 = +prompt ('Write first number to find all numbers between them such that each digit of the number is even','19'); 
var number2 = +prompt ('Write second number to find all numbers between them such that each digit of the number is even','42'); 


function getAllEvenDigitNumbers(first, second, arr = []) {
	if (first%2 !== 0){
		first += 1;
	}
	if (first > second){
		return (arr.length === 0)? 'Such numbers does not exist.' : arr;
	} else {
		var isFirstEven = checkFirstDigits (first + '');
		if (isFirstEven) {
			arr.push(first);
		}
		first += 2;
		return getAllEvenDigitNumbers(first, second, arr);
	}
}
function checkFirstDigits (num, length = num.length){
	length--;
	if (length < 0) {
		return true
	}
	if (num [length] % 2 !== 0){
		return false
	} else {
		return checkFirstDigits (num, length)
	}
}

var output = getAllEvenDigitNumbers(number1, number2);
console.log(output);
*/


//______________________________________________________________________________________________________________________________________________

//3. Write a recursive function to determine whether all digits of the number are odd or not.
/*
function getOddIfAllOddDiggits (num){
	if (num % 2 !== 0) {
		return getOddIfAllOddDiggits(Math.floor(num/10));
	} else if (num === 0){
		return true;
	} else {
		return false;
	}
}

var num = prompt('input number to check if all numbers are odd', '159753')
var output = getOddIfAllOddDiggits(num);
console.log(output);
*/


//______________________________________________________________________________________________________________________________________________

//4. Given an array of numbers. Write a recursive function to find its minimal positive element. (if such element does not exist, return -1)
/*
var arr = [56, -9, 87, -23, 0, -105, 55, 1];
//var arr = [45, -9, 15, 5, -78];
//var arr = [-5, -9, -111, -1000, -7];
function getMinimalPositiveElement (arr, num = arr[0]){
	if (arr[1] === 0 || num === 0){
		return 0;
	}
	if (arr[1] === undefined){
		if (num >= 0){
			return num;
		} else {
			return -1;
		}
	} else if (num < 0){
		arr.shift();
		return getMinimalPositiveElement(arr);
	} else {
		if (num < arr[1])  {
			arr.shift();
			return  getMinimalPositiveElement(arr, num);
		} else if (num > arr[1] && arr[1] >= 0 ){    
			arr.shift();
			return getMinimalPositiveElement(arr, arr[0]);
		} else { 
			arr.shift();
			return  getMinimalPositiveElement(arr, num);
		}
	}
}

var output = getMinimalPositiveElement(arr);
console.log(output);
*/


//______________________________________________________________________________________________________________________________________________

//5. Given an array of numbers which is almost sorted in ascending order. Find the index where sorting order is violated.

//_____________________________________________ NON Recursion
/*
var arr = [2, 12, 15, 48, 64];
//var arr = [-9, -4, -4, 3, 12, 4, 5];
function findIndexSortViolated (arr){
	
	for (var i = 0; i < arr.length; i++){
		if (arr[i] < arr[i-1]){
			return i;
		}
	}
	return -1;
}

var output = findIndexSortViolated (arr);
console.log (output);
*/

//__________________________________________________Recursion
/*
//var arr = [2, 12, 15, 48, 64];
var arr = [-9, -4, -4, 3, 12, 4, 5];
function findIndexSortViolated (arr, length = arr.length){
	length--
	if (length === 0){
		return -1;
	}
	if (arr[length] >= arr[length - 1]) {
		return findIndexSortViolated (arr, length);
	} else {
		return length;
	}
}
var output = findIndexSortViolated (arr);
console.log (output);
*/
