//Merge two sorted arrays into one
function mergeArrays(arr1, arr2) {
  return [...new Set([...arr1, ...arr2].sort((a, b) => a - b))];
}

//Simple multiplication
function simpleMultiplication(number) {
  return number % 2 ? number * 9 : number * 8;
}

//Convert a Boolean to a String
function booleanToString(b) {
  return b.toString();
}

//Convert a String to a Number!
const stringToNumber = function (str) {
  return parseInt(str);
};

//Convert a string to an array
function stringToArray(string) {
  let array = string.split(" ");
  return array;
}

//Reversed sequence
const reverseSeq = (n) => {
  let arr = [];
  for (i = n; i > 0; i--) {
    arr.push(i);
  }
  return arr;
};

//Short Long Short
function solution(a, b) {
  let s = a.length < b.length ? a : b;
  let l = a.length > b.length ? a : b;
  return s + l + s;
}

//What is between?
function between(a, b) {
  let arr = [];
  for (i = a; i <= b; i++) {
    arr.push(i);
  }
  return arr;
}

//Sentence Smash
function smash(words) {
  return words.join(" ");
}

//Rock Paper Scissors!
const rps = (p1, p2) => {
  if (p1 === p2) {
    return `Draw!`;
  }
  if (p1 === "rock" && p2 === "scissors") {
    return `Player 1 won!`;
  } else if (p1 === "paper" && p2 === "rock") {
    return `Player 1 won!`;
  } else if (p1 === "scissors" && p2 === "paper") {
    return `Player 1 won!`;
  } else {
    return `Player 2 won!`;
  }
};
