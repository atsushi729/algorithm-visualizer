import SyntaxHighlight from "../../components/SyntaxHighlight";
import AnchorLinks from "../../components/common/AnchorLinks";
import LinearSearchCanvas from "../../components/visualizer/search/LinearSearch";
import { linearSearchAnchorLinks } from "../../constants/common/anchorLink";
import { linearSearch } from "../../constants/sample-code/code";

const HashSearch = () => {
  //---------------------------------------------------------------------
  // Sub component
  //---------------------------------------------------------------------
  const AboutHashSearch = () => {
    return (
      <div id="about-binary-search" className="flex justify-start">
        <div className="max-w-4xl m-auto p-8">
          <h1 className="text-3xl mb-4 mt-4 font-bold text-left">
            Hash search
          </h1>
          <p className="text-lg mb-4 text-left">
            In computer science, hash search, also known as hash lookup or hash
            table lookup, refers to the process of finding a value or an item in
            a hash table data structure using a key. A hash table is a data
            structure that stores key-value pairs and allows for efficient
            retrieval of values based on their keys. Hash search is widely used
            in various applications, such as database indexing, caching systems,
            compiler symbol tables, and many other scenarios where fast lookup
            of key-value pairs is crucial for efficient data retrieval and
            processing.
          </p>
          <p className="text-base inline">How Hash search works:</p>
          <ul className="list-decimal ps-5 space-y-2 mb-5 mt-3">
            <li>
              <strong>Hashing: </strong> A hash function is applied to the key
              to compute a hash value or hash code. The hash function maps the
              key to a specific index or bucket within the hash table.
            </li>
            <li>
              <strong>Indexing:</strong> The computed hash value serves as an
              index into the hash table's array (or buckets). This index
              determines the position where the key-value pair should be stored
              or searched for.
            </li>
            <li>
              <strong>Collision Handling:</strong> Since different keys may hash
              to the same index (known as a collision), hash tables employ
              various collision resolution techniques. Common techniques include
              separate chaining (using a linked list or another data structure
              to store multiple key-value pairs at the same index) and open
              addressing (probing for the next available slot in case of a
              collision).
            </li>
            <li>
              <strong>Search:</strong> To search for a value in the hash table,
              the key is hashed using the same hash function to compute the hash
              value. The hash table is then accessed at the index corresponding
              to this hash value. If the key-value pair is found at that index
              (or in the associated data structure, in case of separate
              chaining), the value is retrieved. If not found, the search
              concludes that the key-value pair is not present in the hash
              table.
            </li>
          </ul>
          <p>
            The main advantage of hash search is its average-case time
            complexity of O(1), which means that the time required to find a
            value is constant and independent of the number of elements in the
            hash table, assuming a good hash function and proper handling of
            collisions. This makes hash tables highly efficient for lookup
            operations, especially in scenarios where the number of keys is
            large.
          </p>
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
        <AboutHashSearch />
        <AboutTimecomplexity />
        <PlayGround />
      </div>

      <div className="flex-grow" style={{ flex: "1" }}>
        <AnchorLinks links={linearSearchAnchorLinks} />
      </div>
    </div>
  );
};

export default HashSearch;
