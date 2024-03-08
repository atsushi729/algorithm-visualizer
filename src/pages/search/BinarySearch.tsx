import SyntaxHighlight from "../../components/SyntaxHighlight";
import AnchorLinks from "../../components/common/AnchorLinks";
import BubbleSortCanvas from "../../components/visualizer/sort/BubbleSort";
import { bubbleSortAnchorLinks } from "../../constants/common/anchorLink";
import { bubbleSortCode } from "../../constants/sample-code/code";

const BinarySearch = () => {
  //---------------------------------------------------------------------
  // Sub component
  //---------------------------------------------------------------------
  const AboutBubbleSort = () => {
    return (
      <div id="about-bubble-sort" className="flex justify-start">
        <div className="max-w-4xl m-auto p-8">
          <h1 className="text-3xl mb-4 mt-4 font-bold text-left">
            Binary Search
          </h1>
          <p className="text-lg mb-4 text-left">
            Binary search is an efficient algorithm for finding a target value
            within a sorted array. The algorithm compares the target value to
            the middle element of the array; if they are not equal, the half in
            which the target cannot lie is eliminated, and the search continues
            on the remaining half, again taking the middle element for
            comparison. This process repeats until the target value is found or
            the remaining search space is reduced to zero.
          </p>
          <p className="text-base inline">How Binary search works:</p>
          <ul className="list-decimal ps-5 space-y-2 mb-5 mt-3">
            <li>
              <strong>Initialize: </strong> Start with two pointers representing
              the bounds of the array segment you're searching in. Typically,
              the "left" pointer is set to the first index of the array (0) and
              the "right" pointer is set to the last index of the array (array
              length - 1).
            </li>
            <li>
              <strong>Find the Middle:</strong> Calculate the middle position of
              the current segment you're considering. This is usually done by
              adding the left pointer to the right pointer and dividing by 2 (in
              some programming languages, care must be taken to avoid overflow).
            </li>
            <li>
              <strong>Compare:</strong> Compare the target value with the value
              at the middle position. There are three possible outcomes:
              <ul className="list-disc ps-8 space-y-2 mb-5 mt-3">
                <li>
                  <strong className="mr-3">target == middle</strong>
                  If the target value is equal to the middle element, the
                  position of the middle element is returned, and the search is
                  complete!!!
                </li>
                <li>
                  <strong className="mr-3">target &lt;= middle</strong>
                  If the target value is less than the middle element, repeat
                  the search on the sub-array to the left of the middle element.
                </li>
                <li>
                  <strong className="mr-3">target &gt;= middle</strong>
                  If the target value is greater than the middle element, repeat
                  the search on the sub-array to the right of the middle
                  element.
                </li>
              </ul>
            </li>
            <li>
              <strong>Repeat or Conclude:</strong> This process repeats, each
              time halving the number of elements to consider, until the target
              value is found or the sub-array becomes empty (indicating that the
              target is not in the array).
            </li>
          </ul>
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
            It's important to note that while Bubble Sort is simple and easy to
            understand, its O(n²) time complexity makes it inefficient for large
            datasets compared to more advanced sorting algorithms like
            QuickSort, MergeSort, or HeapSort, which have O(n log n) average and
            worst-case time complexities.
          </p>
          <h5 className="text-lg mb-4 mt-4 font-bold">
            Operation of Data structure:
          </h5>
          <ul className="marker:text-blue-600 list-disc ps-5 space-y-2">
            <li>
              <p className="no-underline font-bold">
                Worst-case Time Complexity (O(n²)):
              </p>
              <p>
                This occurs when the array is in reverse order, necessitating
                the maximum number of swaps. In this case, for each of n
                elements, the algorithm performs nearly n comparisons, leading
                to a time complexity of O(n²).
              </p>
            </li>
            <li>
              <p className="no-underline font-bold">
                Best-case Time Complexity (O(n)):
              </p>
              <p>
                This occurs when the array is already sorted. The algorithm only
                needs to make one pass through the array to confirm that no
                swaps are needed. Therefore, the time complexity is O(n).
              </p>
            </li>
            <li>
              <p className="no-underline font-bold">
                Average-case Time Complexity (O(n²))
              </p>
              <p>
                For a randomly ordered array, the average time complexity is
                also O(n²), similar to the worst-case scenario.
              </p>
            </li>
          </ul>
          <p className="mt-5">
            Here is a simple example that adds one to the input value:
          </p>
          <SyntaxHighlight codeString={bubbleSortCode} language="javascript" />
        </div>
      </div>
    );
  };

  const PlayGround = () => {
    return (
      <div id="playground" className="flex justify-start">
        <div className="max-w-4xl m-auto p-8">
          <h1 className="text-3xl mb-4 mt-4 font-bold text-left">Playground</h1>
          <BubbleSortCanvas />
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
        <AboutBubbleSort />
        <AboutOperation />
        <PlayGround />
      </div>

      <div className="flex-grow" style={{ flex: "1" }}>
        <AnchorLinks links={bubbleSortAnchorLinks} />
      </div>
    </div>
  );
};

export default BinarySearch;
