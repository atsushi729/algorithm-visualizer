//---------------------------------------------------------------------
// Dashboard
//---------------------------------------------------------------------
export const code = `// Secondaly, addOne() get input value and execute function(algorithm).
function addOne(value: number) {
  // Finaly, return output value.
  return value + 1;
}

// First of all, set input value to addOne().
const result = addOne(1);
// Output value is 2
`;

export const pseudocode = `function find_maximum(L):
    max_num <- L[0]
    for each n in L:
        if n > max_num:
            max_num <- n
    return max_num
`;

export const RecursiveCode = `function factorial(n) {
  // Base case: if n is 0 or 1
  if (n === 0 || n === 1) {
    return 1;
  } else {
    // Recursive case: n! = n * (n-1)!
    return n * factorial(n - 1);
  }
}

// Example usage
console.log(factorial(5)); // Outputs: 120
`;

export const timeComplexities = [
  {
    complexity: "O(1)",
    time: "Constant Time",
    description:
      "The execution time of the algorithm is the same, regardless of the size of the input data. An example is accessing a specific element in an array by index.",
    code: `function constantTime(arr, index) {
      return arr[index]; // Constant time access
    }`,
  },
  {
    complexity: "O(log n)",
    time: "Logarithmic Time",
    description:
      "The execution time of the algorithm increases logarithmically with the input size. A common example is a binary search in a sorted array.",
    code: `function binarySearch(arr, target) {
      let left = 0;
      let right = arr.length - 1;
      while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (arr[mid] === target) {
          return mid;
        } else if (arr[mid] < target) {
          left = mid + 1;
        } else {
          right = mid - 1;
        }
      }
      return -1;
    }`,
  },
  {
    complexity: "O(n)",
    time: "Linear Time",
    description:
      "The execution time increases linearly with the input size. For instance, iterating through all elements in an array.",
    code: `function linearTime(arr) {
      arr.forEach(element => {
        // Perform some operation
      });
    }`,
  },
  {
    complexity: "O(n log n)",
    time: "Log-linear Time",
    description:
      "More complex than linear time but more efficient than quadratic time, common in efficient sorting algorithms like mergesort and heapsort.",
    code: `function mergeSort(arr) {
      if (arr.length <= 1) {
        return arr;
      }
      const mid = Math.floor(arr.length / 2);
      const left = mergeSort(arr.slice(0, mid));
      const right = mergeSort(arr.slice(mid));
      return merge(left, right);
    }
    
    function merge(left, right) {
      const result = [];
      let leftIndex = 0;
      let rightIndex = 0;
      while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
          result.push(left[leftIndex]);
          leftIndex++;
        } else {
          result.push(right[rightIndex]);
          rightIndex++;
        }
      }
      return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
    }`,
  },
  {
    complexity: "O(n^2)",
    time: "Quadratic Time",
    description:
      "The execution time is proportional to the square of the input size. An example of this is the bubble sort algorithm, where you might have to iterate through the elements multiple times.",
    code: `function bubbleSort(arr) {
      const n = arr.length;
      for (let i = 0; i < n; i++) {
        for (let j = 0; j < n - i - 1; j++) {
          if (arr[j] > arr[j + 1]) {
            [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
          }
        }
      }
      return arr;
    }`,
  },
  {
    complexity: "O(2^n)",
    time: "Exponential Time",
    description:
      "The execution time doubles with each addition to the input data set. Algorithms with exponential time complexity become infeasible to run with larger inputs.",
    code: `function fibonacci(n) {
      if (n <= 1) {
        return n;
      }
      return fibonacci(n - 1) + fibonacci(n - 2);
    }`,
  },
  {
    complexity: "O(n!)",
    time: "Factorial Time",
    description:
      "The execution time grows factorially with the input size. An example would be the brute-force solution to the traveling salesman problem using permutation.",
    code: `function permute(arr, l, r) {
      if (l === r) {
        console.log(arr);
      } else {
        for (let i = l; i <= r; i++) {
          [arr[l], arr[i]] = [arr[i], arr[l]];
          permute(arr, l + 1, r);
          [arr[l], arr[i]] = [arr[i], arr[l]]; // backtrack
        }
      }
    }`,
  },
];

//---------------------------------------------------------------------
// Data structure
//---------------------------------------------------------------------
export const stackCode = `class Queue {
    constructor() {
        this.items = [];
    }
  
    enqueue(item) {
        // Add an element to the rear of the queue.
        this.items.push(item);
    }
  
    dequeue() {
        // Remove and return the element from the front of the queue.
        if (!this.isEmpty()) {
            return this.items.shift();
        } else {
            throw new Error("Cannot dequeue from an empty queue");
        }
    }
  
    front() {
        // Return the element at the front of the queue without removing it.
        if (!this.isEmpty()) {
            return this.items[0];
        } else {
            throw new Error("Queue is empty");
        }
    }
  
    size() {
        // Return the number of elements in the queue.
        return this.items.length;
    }
  
    isEmpty() {
        // Check if the queue is empty.
        return this.items.length === 0;
    }
  }
  
  // Example usage:
  const myQueue = new Queue();
  myQueue.enqueue(10);
  myQueue.enqueue(20);
  myQueue.enqueue(30);
  
  console.log("Front of the queue:", myQueue.front());
  console.log("Queue size:", myQueue.size());
  
  // Dequeue elements
  while (!myQueue.isEmpty()) {
    console.log("Dequeued:", myQueue.dequeue());
  }
  
  console.log("Is the queue empty?", myQueue.isEmpty());
  
  `;

export const queueCode = `class Queue {
    constructor() {
        this.items = [];
    }
  
    enqueue(item) {
        // Add an element to the rear of the queue.
        this.items.push(item);
    }
  
    dequeue() {
        // Remove and return the element from the front of the queue.
        if (!this.isEmpty()) {
            return this.items.shift();
        } else {
            throw new Error("Cannot dequeue from an empty queue");
        }
    }
  
    front() {
        // Return the element at the front of the queue without removing it.
        if (!this.isEmpty()) {
            return this.items[0];
        } else {
            throw new Error("Queue is empty");
        }
    }
  
    size() {
        // Return the number of elements in the queue.
        return this.items.length;
    }
  
    isEmpty() {
        // Check if the queue is empty.
        return this.items.length === 0;
    }
  }
  
  // Example usage:
  const myQueue = new Queue();
  myQueue.enqueue(10);
  myQueue.enqueue(20);
  myQueue.enqueue(30);
  
  console.log("Front of the queue:", myQueue.front());
  console.log("Queue size:", myQueue.size());
  
  // Dequeue elements
  while (!myQueue.isEmpty()) {
    console.log("Dequeued:", myQueue.dequeue());
  }
  
  console.log("Is the queue empty?", myQueue.isEmpty());
  
  `;

export const arrayCode = `// Initial array
  let numbers = [10, 20, 30, 40, 50];
  
  // Traversing the array
  console.log("Traversing:");
  numbers.forEach(function(element) {
      console.log(element);
  });
  
  // Insertion
  numbers.push(60); // Adds 60 at the end
  numbers.splice(2, 0, 25); // Inserts 25 at index 2
  console.log("After Insertion:", numbers);
  
  // Deletion
  numbers.pop(); // Removes the last element
  numbers.splice(2, 1); // Removes 1 element at index 2
  console.log("After Deletion:", numbers);
  
  // Searching
  let index = numbers.indexOf(30); // Returns the index of the element 30
  console.log("Index of 30:", index);
  
  // Sorting
  numbers.sort((a, b) => a - b); // Sorts the array in ascending order
  console.log("After Sorting:", numbers);
  
  // Updating
  numbers[2] = 35; // Updates the element at index 2 to 35
  console.log("After Updating:", numbers);
  
  // Merging
  let moreNumbers = [70, 80];
  let mergedArray = numbers.concat(moreNumbers);
  console.log("After Merging:", mergedArray);
  
  // Splitting
  let firstHalf = numbers.slice(0, numbers.length / 2);
  let secondHalf = numbers.slice(numbers.length / 2);
  console.log("First Half:", firstHalf);
  console.log("Second Half:", secondHalf);
  
  
  `;

export const linkedListCode = `// Define a class for the list node
  class ListNode {
    constructor(data) {
      this.data = data; // Data carried by the node
      this.next = null; // Reference to the next node in the list
    }
  }
  
  // Define a class for the linked list
  class LinkedList {
    constructor() {
      this.head = null; // The list initially has no head
    }
  
    // Method to add a new node to the end of the list
    add(data) {
      const newNode = new ListNode(data); // Create a new node with the given data
      if (this.head === null) { // If the list is empty
        this.head = newNode; // Set the new node as the head
      } else {
        let current = this.head; // Start at the head
        while (current.next !== null) { // Traverse to the end of the list
          current = current.next;
        }
        current.next = newNode; // Add the new node at the end
      }
    }
  
    // Method to find a node with specified data
    find(data) {
      let current = this.head; // Start at the head
      while (current !== null && current.data !== data) { // Traverse the list
        current = current.next;
      }
      return current; // Return the found node or null
    }
  
    // Method to remove a node with specified data
    remove(data) {
      let current = this.head;
      let previous = null;
  
      while (current !== null && current.data !== data) {
        previous = current; // Keep track of the previous node
        current = current.next;
      }
  
      if (current !== null) { // If the node was found
        if (previous === null) { // If it's the head of the list
          this.head = current.next; // Remove it by changing the head
        } else {
          previous.next = current.next; // Remove it by bypassing it in the chain
        }
      }
    }
  
    // Helper method to output the list as a string
    toString() {
      let result = '';
      let current = this.head;
      while (current !== null) {
        result += current.data;
        current = current.next;
      }
      result += 'null';
      return result;
    }
  }
  
  // Example usage:
  const list = new LinkedList();
  list.add(1);
  list.add(2);
  list.add(3);
  
  console.log(list.toString()); // Outputs: 1 -> 2 -> 3 -> null
  
  const foundNode = list.find(2);
  console.log(foundNode); // Outputs the node with data 2
  
  list.remove(2);
  console.log(list.toString()); // Outputs: 1 -> 3 -> null
  
  `;

//---------------------------------------------------------------------
// Sort
//---------------------------------------------------------------------
export const bubbleSortCode = `function bubbleSort(arr) {
    let n = arr.length;
    let swapped;
  
    for (let i = 0; i < n - 1; i++) {
        swapped = false;
  
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                // Swap the elements
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                swapped = true;
            }
        }
  
        // If no two elements were swapped by inner loop, then break
        if (!swapped) {
            break;
        }
    }
  
    return arr;
  }
  
  // Example usage
  let array = [64, 34, 25, 12, 22, 11, 90];
  console.log("Original Array:", array);
  console.log("Sorted Array:", bubbleSort(array));
  
  `;

export const mergeSortCode = `function mergeSort(arr) {
    if (arr.length <= 1) {
      return arr;
    }
  
    const middle = Math.floor(arr.length / 2);
    const left = arr.slice(0, middle);
    const right = arr.slice(middle);
  
    return merge(mergeSort(left), mergeSort(right));
  }
  
  function merge(left, right) {
    let resultArray = [], leftIndex = 0, rightIndex = 0;
  
    // Concatenate values into the resultArray in order
    while (leftIndex < left.length && rightIndex < right.length) {
      if (left[leftIndex] < right[rightIndex]) {
        resultArray.push(left[leftIndex]);
        leftIndex++; // move left array cursor
      } else {
        resultArray.push(right[rightIndex]);
        rightIndex++; // move right array cursor
      }
    }
  
    // Concatenate any remaining elements
    // (If we didn't go through all elements in one array)
    return resultArray
            .concat(left.slice(leftIndex))
            .concat(right.slice(rightIndex));
  }
  
  // Example usage:
  const unsortedArray = [34, 7, 23, 32, 5, 62];
  const sortedArray = mergeSort(unsortedArray);
  
  console.log(sortedArray); // Output: [5, 7, 23, 32, 34, 62]
  
  `;

export const quickSortCode = `function quickSort(arr, left = 0, right = arr.length - 1) {
    if (left < right) {
        // Partitioning index
        let partitionIndex = partition(arr, left, right);
  
        // Recursively sort elements before and after partition
        quickSort(arr, left, partitionIndex - 1);
        quickSort(arr, partitionIndex + 1, right);
    }
    return arr;
  }
  
  function partition(arr, left, right) {
    // Choosing the rightmost element as the pivot
    const pivot = arr[right];
    let partitionIndex = left; // Set partition index as left initially
  
    for (let i = left; i < right; i++) {
        if (arr[i] < pivot) {
            // Swapping if element is smaller than pivot
            [arr[i], arr[partitionIndex]] = [arr[partitionIndex], arr[i]];
            partitionIndex++;
        }
    }
  
    // Swap the pivot element with the element at the partition index
    [arr[partitionIndex], arr[right]] = [arr[right], arr[partitionIndex]];
    return partitionIndex;
  }
  
  // Example usage
  const array = [10, 7, 8, 9, 1, 5];
  quickSort(array);
  console.log(array);
  
  `;

//---------------------------------------------------------------------
// Search
//---------------------------------------------------------------------
export const binarySearch = `function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
      const mid = Math.floor((left + right) / 2);

      if (arr[mid] === target) {
          return mid; // Target found
      }

      if (arr[mid] < target) {
          left = mid + 1; // Search in the right half
      } else {
          right = mid - 1; // Search in the left half
      }
  }

  return -1; // Target not found
}

// Example usage
const arr = [1, 3, 5, 7, 9, 11];
const target = 7;

const result = binarySearch(arr, target);
console.log(result); // Output: 3 (because arr[3] is 7)


`;

export const linearSearch = `const linearSearch = function(array, value) {
  // Loop through each element in the array
  for (let i = 0; i < array.length; i++) {
    // Check if the current element matches the value we're searching for
    if (array[i] === value) {
      return i; // Return the index of the element that matches the value
    }
  }
  // If the value is not found, return -1
  return -1;
}

// Export the linearSearch function
export { linearSearch };

// Example usage:
const myArray = [2, 5, 7, 9, 11, 15, 20];
const target = 9;
const index = linearSearch(myArray, target);

if (index !== -1) {
  console.log("found);
} else {
  console.log("not found);
}
`;

export const hashSearch = `// Define the HashTable class
class HashTable {
  constructor(size = 7) {
    this.data = new Array(size);
  }

  // Simple hash function to map keys to array indices
  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  }

  // Set a key-value pair in the hash table
  set(key, value) {
    const address = this._hash(key);
    if (!this.data[address]) {
      this.data[address] = [];
    }
    this.data[address].push([key, value]);
    return this;
  }

  // Get the value associated with a key
  get(key) {
    const address = this._hash(key);
    const currentBucket = this.data[address];
    if (currentBucket) {
      for (let i = 0; i < currentBucket.length; i++) {
        if (currentBucket[i][0] === key) {
          return currentBucket[i][1];
        }
      }
    }
    return undefined;
  }

  // Remove a key-value pair from the hash table
  remove(key) {
    const address = this._hash(key);
    const currentBucket = this.data[address];
    if (currentBucket) {
      for (let i = 0; i < currentBucket.length; i++) {
        if (currentBucket[i][0] === key) {
          currentBucket.splice(i, 1);
          return true;
        }
      }
    }
    return false;
  }
}

// Example usage
const myHashTable = new HashTable();

// Set key-value pairs
myHashTable.set('name', 'John');
myHashTable.set('age', 30);
myHashTable.set('city', 'New York');

// Get values by keys
console.log(myHashTable.get('name')); // Output: 'John'
console.log(myHashTable.get('age')); // Output: 30

// Remove a key-value pair
myHashTable.remove('age');
console.log(myHashTable.get('age')); // Output: undefined`;
