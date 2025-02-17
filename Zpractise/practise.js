const numbers = [1, 2, 3, 2, 4, 1, 5, 6, 3];

const duplicates = [];
const seen = new Set();

for (let i = 0; i < numbers.length; i++) {
  const currentNumber = numbers[i];
  if (seen.has(currentNumber)) {
    duplicates.push(currentNumber);
  } else {
    seen.add(currentNumber);
  }
}

console.log(duplicates); // Output: [2, 1, 3]