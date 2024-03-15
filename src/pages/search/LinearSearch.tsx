import SyntaxHighlight from "../../components/SyntaxHighlight";
import AnchorLinks from "../../components/common/AnchorLinks";
import BubbleSortCanvas from "../../components/visualizer/sort/BubbleSort";
import { binarySearchAnchorLinks } from "../../constants/common/anchorLink";
import { binarySearch } from "../../constants/sample-code/code";

const LinearSearch = () => {
  //---------------------------------------------------------------------
  // Sub component
  //---------------------------------------------------------------------
  const AboutBinarySearch = () => {
    return (
      <div id="about-binary-search" className="flex justify-start">
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
            the remaining search space is reduced to zero.{" "}
            <strong>
              The most crucial condition for binary search is that the dataset
              (e.g. an array) must be sorted in either ascending or descending
              order.
            </strong>
          </p>
          <p></p>
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

  const AboutTimecomplexity = () => {
    return (
      <div id="time-complexity" className="flex">
        <div className="max-w-4xl m-auto p-8">
          <h1 className="text-3xl mb-4 font-bold">Time Complexity</h1>
          <p className="text-lg mb-4">
            For binary search, the best, average, and worst-case time
            complexities can be summarized as follows:
          </p>
          <ul className="marker:text-blue-600 list-disc ps-5 space-y-2">
            <li>
              <p className="no-underline font-bold">
                Worst Case: O(log n) and Ω(log n){" "}
              </p>
              <p>
                The worst-case upper bound for binary search remains O(log n).
                The lower bound is also Ω(log n), meaning that in the worst-case
                scenario (like when the target is at the very end of the array
                or not present), the time complexity can't be better than
                logarithmic. Given that both the upper and lower bounds are
                logarithmic, the tight bound for the worst case can also be
                expressed as Θ(log n).
              </p>
            </li>
            <li>
              <p className="no-underline font-bold">Best Case: Ω(1)</p>
              <p>
                The best-case lower bound for binary search is constant time,
                Ω(1), because the target might be found on the first try if it's
                located at the midpoint of the array.
              </p>
            </li>
            <li>
              <p className="no-underline font-bold">Average Case: Θ(log n)</p>
              <p>
                On average, binary search has a tight bound of Θ(log n),
                indicating that the number of steps needed to find the target
                (or determine its absence) grows logarithmically with the size
                of the array. This is both the average-case upper and lower
                bound.
              </p>
            </li>
          </ul>
          <p className="mt-5">
            Here is a simple example that adds one to the input value:
          </p>
          <SyntaxHighlight codeString={binarySearch} language="javascript" />
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
        <AboutBinarySearch />
        <AboutTimecomplexity />
        <PlayGround />
      </div>

      <div className="flex-grow" style={{ flex: "1" }}>
        <AnchorLinks links={binarySearchAnchorLinks} />
      </div>
    </div>
  );
};

export default LinearSearch;
