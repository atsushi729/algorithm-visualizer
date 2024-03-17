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
            Linear search
          </h1>
          <p className="text-lg mb-4 text-left">
            Linear search, also known as sequential search, is a simple
            searching algorithm that checks every element in a list or array one
            by one until the desired element is found or the end of the list is
            reached. It's used on lists that are either unsorted or have an
            unknown order because it doesn't rely on the elements being arranged
            in any particular way.
          </p>
          <p></p>
          <p className="text-base inline">How Binary search works:</p>
          <ul className="list-decimal ps-5 space-y-2 mb-5 mt-3">
            <li>Start from the first element of the list or array.</li>
            <li>
              Compare the current element with the target element you're
              searching for.
            </li>
            <li>
              If the current element matches the target, return the index of
              this element, indicating that the target has been found.
            </li>
            <li>
              If the current element does not match the target, move to the next
              element in the list.
            </li>
            <li>
              Repeat steps 2-4 until either the target is found or the end of
              the list is reached.
            </li>
            <li>
              If the end of the list is reached without finding the target,
              indicate that the target is not in the list.
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
