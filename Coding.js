//**sum the array**

// const arrSum = (arr) => {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
//   }
//   return sum;
// };

// console.log(arrSum([5, 10, 15]));// 30
// console.log(arrSum([2, 4, 6]));//12

//**Find Maximum Element in Array**

// function findMax(arr) {
//   let max = arr[0];
//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] > max) {
//       max = arr[i];
//     }
//   }
//   return max;
// }

// const array1 = [1, 10, 15, 25];
// const result = findMax(array1);
// console.log(result);// output = 25

//** Function to count the occurrences of a character in a string**

// function countOccurrences(str, char) {
//   let count = 0;
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] === char) {
//       count++;
//     }
//   }
//   return count;
// }

// const count1 = countOccurrences("sonusinghggggg", "g");
// console.log("countOccurences count characters", count1);

//**fibonacciSeries**

function fibonacciSeries(n) {
  let fibonacci = [0, 1];

  for (let i = 2; i < n; i++) {
    fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
  }

  return fibonacci;
}

const n = 10;
const series = fibonacciSeries(n);
console.log(series);
