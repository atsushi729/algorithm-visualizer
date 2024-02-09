import { Link } from "react-router-dom";
import SyntaxHighlight from "../../components/SyntaxHighlight";
import AnchorLinks from "../../components/common/AnchorLinks";
import BubbleSortCanvas from "../../components/visualizer/sort/BubbleSort";

const MergeSort = () => {
  //---------------------------------------------------------------------
  // Sub component
  //---------------------------------------------------------------------
  const AboutMergeSort = () => {
    return (
      <div id="about-merge-sort" className="flex justify-start">
        <div className="max-w-4xl m-auto p-8">
          <h1 className="text-3xl mb-4 mt-4 font-bold text-left">Merge sort</h1>
          <p className="text-lg mb-4 text-left">
            Merge sort is a popular and efficient sorting algorithm that follows
            the{" "}
            <Link to="/dashboard/technique">
              <strong className="text-blue-700 link link-underline link-underline-black">
                divide and conquer strategy.
              </strong>{" "}
            </Link>
            It works by dividing the array into halves, sorting each half, and
            then merging the two sorted halves back together. The process is
            recursive, with the base case being arrays of size one, which are
            inherently sorted. Here's a step-by-step breakdown of how merge sort
            works:
          </p>
          <p className="text-base inline">How Merge sort works:</p>
          <ul className="list-decimal ps-5 space-y-2 mb-5 mt-3">
            <li>
              <strong>Divide: </strong> The array is divided into two halves,
              right down the middle. If the array has an odd number of elements,
              one of the halves will have one more element than the other.
            </li>
            <li>
              <strong>Conquer:</strong> : Each half is recursively sorted using
              merge sort. This process continues until the base case of a single
              element (or no elements) is reached, which is considered sorted by
              definition.
            </li>
            <li>
              <strong>Combine/Merge:</strong> The two sorted halves are then
              merged together into a single sorted array. This is done by
              comparing the elements of each half and copying the smaller
              element into the new array, progressing through both halves until
              all elements are copied into the merged array.
            </li>
          </ul>
          <p className="text-lg mb-4 text-left">
            Merge sort is known for its efficiency and stability. It has a
            worst-case and average complexity of O(n log n), where n is the
            number of elements in the array. Its main disadvantage is that it
            requires additional space proportional to the size of the input
            array for the merging process, making it not an in-place sort.
          </p>
        </div>
      </div>
    );
  };

  const AboutOperation = () => {
    return (
      <div id="time-complexity" className="flex">
        <div className="max-w-4xl m-auto p-8">
          <h1 className="text-3xl mb-4 font-bold">Time Complexity</h1>
          <p className="text-lg mb-4">
            The time complexity of merge sort is O(nlogn) in all cases (worst,
            average, and best). This is because the merge sort algorithm divides
            the array into two halves, recursively sorts the two halves, and
            then merges the two sorted halves. The division of the array into
            two halves takes logarithmic time (because the size of the array is
            halved at each level), and the merging of two sorted halves takes
            linear time in the size of the array. Therefore, the overall time
            complexity is the product of these two, which is O(nlogn).
          </p>
          <h5 className="text-lg mb-4 mt-4 font-bold">
            Performance of Merge sort:
          </h5>
          <ul className="marker:text-blue-600 list-disc ps-5 space-y-2">
            <li>
              <p className="no-underline font-bold">
                Worst-case Time Complexity (O(nlogn)):
              </p>
              <p>
                The worst case scenario represents the situation where the
                algorithm performs the maximum number of steps possible for the
                given input size.
              </p>
              <p>
                For merge sort, the worst case time complexity is O(nlogn) as
                well. This is because the algorithm's divide-and-conquer
                approach results in a consistent performance regardless of the
                input's initial state.
              </p>
            </li>
            <li>
              <p className="no-underline font-bold">
                Best-case Time Complexity (O(nlogn)):
              </p>
              <p>
                This occurs when the array is already sorted. The algorithm only
                needs to make one pass through the array to confirm that no
                swaps are needed. Therefore, the time complexity is O(n).
              </p>
              <p>
                For merge sort, the best case time complexity is also O(nlogn).
                Unlike some other sorting algorithms that can benefit from
                partially sorted data (like insertion sort), merge sort will
                perform the same number of operations regardless of the initial
                order of the elements.
              </p>
            </li>
            <li>
              <p className="no-underline font-bold">
                Average-case Time Complexity (O(nlogn))
              </p>
              <p>
                The average case scenario assumes a random distribution of
                inputs and calculates the expected time complexity across all
                possible inputs of a given size.
              </p>
              <p>
                For merge sort, the average case time complexity is also
                O(nlogn). Since merge sort consistently divides the array and
                merges it, the input's initial order doesn't significantly
                affect the number of operations.
              </p>
            </li>
          </ul>
          <p className="mt-5">
            Here is a simple example that adds one to the input value:
          </p>
          <SyntaxHighlight codeString={linkedListCode} language="javascript" />
        </div>
      </div>
    );
  };

  const PlayGround = () => {
    return (
      <div id="playground" className="flex justify-start">
        <div className="max-w-4xl m-auto p-8">
          <h1 className="text-3xl mb-4 mt-4 font-bold text-left">Playground</h1>

          {/* TODO : create merge sort canvas */}
          {/* <BubbleSortCanvas /> */}
        </div>
      </div>
    );
  };

  //---------------------------------------------------------------------
  // Main component
  //---------------------------------------------------------------------
  return (
    <div className="container mx-auto p-8 flex">
      <div className="flex-grow" style={{ flex: "4" }}>
        <AboutMergeSort />
        <AboutOperation />
        <PlayGround />
      </div>

      <div className="flex-grow" style={{ flex: "1" }}>
        <AnchorLinks links={anchorLinksData} />
      </div>
    </div>
  );
};

const linkedListCode = `function mergeSort(arr) {
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

export const anchorLinksData = [
  { href: "#about-merge-sort", label: "About Merge sort" },
  { href: "#time-complexity", label: "Time complexity" },
  { href: "#playground", label: "Playground" },
];

export default MergeSort;
