"use strict";

var str = 'Hello!';
var str2 = "Hello\n                world!\n                    *------------*";
var str3 = 'Hello world!';
console.log(str);
console.log(str2);
console.log(str3);
console.log(str3.charAt(6));
console.log(str3);
console.log(str3.toLowerCase());
str3 = str3.toUpperCase();
console.log(str3);
console.log(str3.indexOf('W')); // Hello 'W'orld = 6

console.log(str3.lastIndexOf('O')); // Hello W'o'rld = 7

console.log(str3.startsWith('H'));
console.log(str3.endsWith('!'));
console.log(str3.includes('WOR'));
console.log(str3.slice(6, 11)); // Hello 'world'!

console.log(str3.slice(-6, -1)); // Hello 'world'!

console.log(str3.substring(6, 2)); // He'llo' world!

console.log(str3.replace('E', 'A')); // Hello world!  =>   Hallo world!

console.log(str3.replaceAll('O', 'A')); // Hello world!  =>   Hella warld!

var names = 'Ivan, Anna, Vasja, Olja, Petja';
var nameArray = names.split(', ');
console.log(nameArray[0], nameArray); // Array // Массив

var num = [1, 2, 3, 4, 5];
delete num[1];
console.log(num);
num.splice(1, 1, 5, 6, 7, 8, 9, 10);
console.log(num);
num.slice(1, 3);
console.log(num);
num1 = num.slice(1, 3);
console.log(num1);
var newNums = num.concat(num1, 5, 5, 5, 5, 5);
console.log(newNums);
newNums.forEach(function (item, index, array) {
  return console.log("".concat(item, " has index ").concat(index, ", in ").concat(array));
});
var users = [{
  id: 1,
  name: 'Vasja'
}, {
  id: 2,
  name: 'Anna'
}, {
  id: 3,
  name: 'Vanya'
}];
var user = users.find(function (item) {
  return item.id == 1;
});
console.log(user);