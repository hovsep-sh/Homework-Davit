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
function getNumString(num) {// 1 1 1 1 0 5
  if (num === 'Bye') {
    return num;
  }
  else if (+num === 0) {
    return 'zero';
  }
  const singleDigitarr = ['', 'one', 'two', 'tree', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  const morThanTenArr = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
  const bigNumbersArr = ['', 'thousand', 'million', 'billion', 'trillion', 'quadrillion', 'quintillion'];
  let str = '';
  let arr = [];
  let len = num.length;
  while (len > 0) {
    arr.push(num.substring(len - 3, len));
    len -= 3;
  }
  let i = 0;
  arr.forEach(function (item) {
    let itLeng = item.length;
    str = createDigitsString(i, bigNumbersArr) + ' ' + str

    if (itLeng === 1 || +item.slice(- 2, - 1) !== 1) {
      str = createDigitsString(+item[itLeng - 1], singleDigitarr) + ' ' + str;
    }
    if (itLeng > 1) {
      if (item.slice(-2) > 19) {
        str = createDigitsString(+item.slice(-2, -1), morThanTenArr) + ' ' + str;
      } else {
        str = createDigitsString(+item.slice(-2), singleDigitarr) + ' ' + str;
      }
    }
    if (itLeng > 2 && +item[0] !== 0) {
      str = createDigitsString(+item[0], singleDigitarr) + ' hundred ' + str;
    }
    i++;
  });

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
