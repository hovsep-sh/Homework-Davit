// 1. Write a function, which will receive a number between 0 to 999,999 and spell out that number in English.

const number = getNumber();

function getNumber() {
  let number = prompt('type any integer', '');
  var reg = /^[0-9]*$/;
  if (number === null) {
    return 'Bye';
  } else if (!(reg.test(number))) {
    alert('Wrong Intput\n Try Again');
    return getNumber();
  }
  return number;
}

function getNumString(num) {
  if (num === 'Bye') {
    return num;
  }
  else if (+num === 0) {
    return 'zero';
  }
  let str = '';
  let arr = [];
  let len = num.length;
  while (len > 0) {
    arr.push(num.substring(len - 3, len));
    len -= 3;
  }
  let i = 0;
  arr.forEach(function (item) {
    const bigNumbersArr = ['', 'thousand', 'million', 'billion', 'trillion', 'quadrillion', 'quintillion'];
    if (item / 1 !== 0) {
      str = createDigitsString(i, bigNumbersArr) + ' ' + str;
      str = getArrItemAsString(item, str)
    }
    i++;
  });

  return str;
}

function getArrItemAsString(arrStr, str) {
  const singleDigitarr = ['', 'one', 'two', 'tree', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  const morThanTenArr = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
  let itLeng = arrStr.length;

  if (itLeng === 1 || +arrStr.slice(- 2, - 1) !== 1) {
    str = createDigitsString(+arrStr[itLeng - 1], singleDigitarr) + ' ' + str;
  }
  if (itLeng > 1) {
    if (arrStr.slice(-2) > 19) {
      str = createDigitsString(+arrStr.slice(-2, -1), morThanTenArr) + ' ' + str;
    } else {
      str = createDigitsString(+arrStr.slice(-2), singleDigitarr) + ' ' + str;
    }
  }
  if (itLeng > 2 && +arrStr[0] !== 0) {
    str = createDigitsString(+arrStr[0], singleDigitarr) + ' hundred ' + str;
  }
  return str;
}

function createDigitsString(num, arr) {
  if (num) {
    let len = arr.length;
    for (let i = 0; i < len; i++) {
      if (i === num) {
        return arr[i];
      }
    }
  }
  return '';
}

const output = getNumString(number);
alert(output);
