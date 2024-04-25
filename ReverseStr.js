// function Reverse(str) {
//   return str.split("").reverse().join("");
// }

// console.log(Reverse("Jai krishna"));

// function reverseTheWord(str) {
//   return str.split("").reverse().join("");
// }

// console.log(reverseTheWord("Sonu singh love India"));

// function reverseTheWord(str) {
//   return str.split("").reverse().join("");
// }

// function reverseTheOrder(str) {
//   return str.split("").reverse().join("");
// }

// console.log(reverseTheOrder("HElLO WORLD"));

// function reverse(str) {
//   return str.split("").reverse().join("");
// }

// console.log(reverse("New World in India"));

// function fibonacci(n) {
//   let sequence = [0, 1];
//   for (let i = 2; i < n; i++) {
//     sequence.push(sequence[i - 1] + sequence[i - 2]);
//   }
//   return sequence;
// }

// console.log(fibonacci(5));

function countCharFreq(str) {
  const frequancey = {};
  for (const char of str) {
    frequancey[char] = (frequancey[char] || 0) + 1;
  }
  return frequancey;
}

console.log(countCharFreq("hello ji holi hai"));
