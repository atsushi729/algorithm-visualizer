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
