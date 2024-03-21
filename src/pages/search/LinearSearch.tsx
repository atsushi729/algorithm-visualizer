import SyntaxHighlight from "../../components/SyntaxHighlight";
import AnchorLinks from "../../components/common/AnchorLinks";
import LinearSearchCanvas from "../../components/visualizer/search/LinearSearch";
import { linearSearchAnchorLinks } from "../../constants/common/anchorLink";
import { linearSearch } from "../../constants/sample-code/code";

const LinearSearch = () => {
  //---------------------------------------------------------------------
  // Sub component
  //---------------------------------------------------------------------
  const AboutLinearSearch = () => {
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
            For linear search, the best, average, and worst-case time
            complexities can be summarized as follows:
          </p>
          <ul className="marker:text-blue-600 list-disc ps-5 space-y-2">
            <li>
              <p className="no-underline font-bold">
                Worst Case: O(n) and Ω(n)
              </p>
              <p>
                The worst-case upper bound for linear search is O(n), meaning
                that in the worst-case scenario (like when the target is at the
                very end of the array or not present), the algorithm may need to
                check every element, leading to a linear time complexity. The
                lower bound in this scenario is also Ω(n), indicating that the
                algorithm cannot perform better than linear time in the
                worst-case scenario. Since both the upper and lower bounds are
                linear, the tight bound for the worst case can be expressed as
                Θ(n).
              </p>
            </li>
            <li>
              <p className="no-underline font-bold">Best Case: Ω(1)</p>
              <p>
                The best-case lower bound for linear search is Ω(1), which
                occurs when the target element is the first element of the
                array, allowing the algorithm to find the target on the first
                comparison.
              </p>
            </li>
            <li>
              <p className="no-underline font-bold">Average Case: Θ(n)</p>
              <p>
                On average, the tight bound for linear search is Θ(n). This
                takes into account that the target element could be anywhere in
                the array, and on average, the algorithm might need to check
                around half of the elements. However, since we consider the
                growth rate for large n, the constant factor (like 1/2) is
                disregarded, leading to a linear Θ(n) complexity. This
                represents both the average-case upper and lower bounds.
              </p>
            </li>
          </ul>
          <p className="mt-5">
            Here is a simple example that adds one to the input value:
          </p>
          <SyntaxHighlight codeString={linearSearch} language="javascript" />
        </div>
      </div>
    );
  };

  const PlayGround = () => {
    return (
      <div id="playground" className="flex justify-start">
        <div className="max-w-4xl m-auto p-8">
          <h1 className="text-3xl mb-4 mt-4 font-bold text-left">Playground</h1>
          <LinearSearchCanvas />
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
        <AboutLinearSearch />
        <AboutTimecomplexity />
        <PlayGround />
      </div>

      <div className="flex-grow" style={{ flex: "1" }}>
        <AnchorLinks links={linearSearchAnchorLinks} />
      </div>
    </div>
  );
};

export default LinearSearch;
