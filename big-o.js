// What is the Big O for the following algorithms?

// 1.a) 15 people. Find a playmate for your dog, preferably the same breed. You stand up and yell, "Who has a golden retriever who wants to have a playdate with my dog?" Someone responds they have a golden retriever and he'd be happy to bring it over.

// Answer: O(1); 
// Best, Avg., Worst Case: Constant time. 
// You will only ever have one action to take.

// 1.b) Determine the Big O for the following algorithm: You are sitting in a room with 15 people. You want to find a playmate for your dog who is of the same breed. So you want to know if anyone out of the 15 people have the same breed as your dog. You start with the first person and ask him if he has a golden retriever. He says no, then you ask the next person, and the next, and the next until you find someone who has a golden or there is no one else to ask. 

// Answer:
// Best case: O(1). If the first person you ask has a golden retriever and is willing to let them play together.
// Avg. case: O(n). If the middle person you ask has a golden retriever and is willing to let them play together.
// Worst case: O(n). If the last person you ask has a golden retriever or if nobody has a golden retriever.

// 2. Even or odd
function isEven(value) {
  if (value % 2 === 0) {
    return true;
  }
  else {
    return false;
  }
}
// Answer: O(1). Constant time for best, avg, and worst case. No matter the input there is always the same number of operations to be done for this function.

// 3. Are you here?
function areYouHere(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    const el1 = arr1[i];
    for (let j = 0; j < arr2.length; j++) {
      const el2 = arr2[j];
      if (el1 === el2) return true;
    }
  }
  return false;
}
// Answer: 
// Best case: O(n). For each of the items in arr1 you only have to look at the first item in arr2.
// O(n * m). Polynomial time. I don't think that this is O(n^2) because arr1 and arr2 might be different lengths. So, instead of multiplying the size of an array by itself it has to be by the size of the second array.

// 4. Doubler
function doubleArrayValues(array) {
  for (let i = 0; i < array.length; i++) {
    array[i] *= 2;
  }
  return array;
}
// Answer: Best, Avg, Worst cases: O(n). Linear time. This function will have to perform the same action on every item of an array. Thus, the number of actions to be taken will be directly proportional to the size of the input.

// 5. Naive search
function naiveSearch(array, item) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === item) {
      return i;
    }
  }
}
/*
Answer:
  Best Case: O(1). The item you are looking for is at the beginning of the array.
  Avg Case: O(n). The item you are looking for is in the middle of the array.
  Worst Case: O(n). The item you are looking for is at the end of the array.
*/

// 6. Creating pairs
function createPairs(arr) {
  for (let i = 0; i < arr.length; i++) {
    for(let j = i + 1; j < arr.length; j++) {
      console.log(arr[i] + ", " +  arr[j] );
    }
  }
}
/*
Answer:
  Best, Avg, Worst Cases: Either O(n^2) or O(log n). The reason I don't think that it is just O(n^2) is that every time the first loop iterates to the next item in it's loop the number of times it goes through the duplicate version of itself shrinks.
*/

// 7. Compute the sequence
function compute(num) {
  let result = [];
  for (let i = 1; i <= num; i++) {

    if (i === 1) {
      result.push(0);
    }
    else if (i === 2) {
      result.push(1);
    }
    else {
      result.push(result[i - 2] + result[i - 3]);
    }
  }
  return result;
}
/*
Answer: 
  Creates the fibonacci sequence for a given number. Example input: 10.
  1 - [0]
  2 - [0, 1]
  3 - [0, 1, 1]
  4 - [0, 1, 1, 2]
  5 - [0, 1, 1, 2, 3]
  6 - [0, 1, 1, 2, 3, 5]
  7 - [0, 1, 1, 2, 3, 5, 8]
  8 - [0, 1, 1, 2, 3, 5, 8, 13]
  9 - [0, 1, 1, 2, 3, 5, 8, 13, 21]
  10 - [0, 1, 1, 2, 3, 5, 8, 13, 21, 34] - return

  Best, Avg, Worst Case: O(n) where 'n' is the size of the number input. Linear time. The larger the number the more operations that must be done. The smaller the number the less operations that have to be done. The number of operations to be done is directly proportionate to the size of the input.
*/

// 8. An efficient search
function efficientSearch(array, item) {
  let minIndex = 0;
  let maxIndex = array.length - 1;
  let currentIndex;
  let currentElement;

  while (minIndex <= maxIndex) {
    currentIndex = Math.floor((minIndex + maxIndex) / 2);
    currentElement = array[currentIndex];

    if (currentElement < item) {
      minIndex = currentIndex + 1;
    }
    else if (currentElement > item) {
      maxIndex = currentIndex - 1;
    }
    else {
      return currentIndex;
    }
  }
  return -1;
}
/*
Answer: 
  Best case: O(1) Constant time. The very middle index that is compared first is the item desired.
  Avg case: O(log n) the number of elements being processed are being cut in half every loop. The function becomes more and more efficient as time goes by.
  Worst case: O(log n) the number of elements being processed are being cut in half every loop. The function becomes more and more efficient as time goes by.
*/

// 9. Random element
function findRandomElement(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}
/*
Answer: Best, Avg, Worst Case: O(1). Constant time. It only ever does the same number of operations, irregardless of the size of the input.
*/

// 10. What am I?
function isWhat(n) {
  if (n < 2 || n % 1 !== 0) {
    return false;
  }
  for (let i = 2; i < n; ++i) {
    if (n % i === 0) return false;
  }
  return true;
}
/*
Answer:
  What does this algorithm do? It returns whether or not a number is a prime number.

  Best case: O(1). Constant time. It will return false without looping or in the first loop.
  Avg case: O(n). It will return false somewhere in the middle.
  Worst case: O(n). It will need to fully iterate to return true.
*/