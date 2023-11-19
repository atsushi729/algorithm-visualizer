import SyntaxHighlight from "../../components/SyntaxHighlight";

const Algorithm = () => {
  //---------------------------------------------------------------------
  // Sub component
  //---------------------------------------------------------------------
  const AboutAlgorithm = () => {
    return (
      <div className="flex">
        <div className="max-w-4xl m-auto p-8">
          <h1 className="text-3xl mb-4 mt-4 font-bold">Algorithm</h1>
          <p className="text-lg mb-4">
            An algorithm is a general and simple set of step-by-step
            instructions that a digital computer can execute to solve problem.
            For it to be practical, it must accomplish this within a limited
            number of steps. Thus, An algorithm is defined on specified inputs
            and generates an output.
          </p>
          <p className="text-base inline">
            Algorithm is consist of 3 elements.
          </p>
          <ul className="list-decimal ps-5 space-y-2 mb-5 mt-3">
            <li>
              <strong>Input value </strong> : An algorithm has input values from
              a specified set.
            </li>
            <li>
              <strong>Process</strong> : Execute some process from input to
              desire output value.
            </li>
            <li>
              <strong>Output value </strong>: From each set of input values, an
              algorithm produces output values from a specified set.
            </li>
          </ul>
          <p>Here is a simple example that adds one to the input value:</p>
          <SyntaxHighlight codeString={code} language="javascript" />
          <h3 className="text-2xl mb-4 mt-4 font-bold">Sample of Algorithm</h3>
          <ul className="marker:text-blue-600 list-disc ps-5 space-y-2">
            <li>
              <a
                href="/dashboard/saas"
                className="no-underline hover:underline font-bold"
              >
                Search Algorithm
              </a>
              <p>
                A search algorithm is a step-by-step procedure used to locate
                specific data among a collection of data. It is considered a
                fundamental procedure in the field of computer science. There
                are many types of search algorithms, such as Linear search,
                Binary search.
              </p>
            </li>
            <li>
              <a
                href="/dashboard/saas"
                className="no-underline hover:underline font-bold"
              >
                Sort Algorithm
              </a>
              <p>
                A sort algorithm is a method for arranging elements in lists or
                sequences into a particular order. The most frequently desired
                orders are numerical order and lexicographical order, and the
                efficiency of an algorithm is determined by its performance in
                terms of time and space complexity—specifically, how fast it can
                sort and how much memory it requires.
              </p>
            </li>
          </ul>
        </div>
      </div>
    );
  };

  const Pseudocode = () => {
    return (
      <div className="flex">
        <div className="max-w-4xl m-auto p-8">
          <h1 className="text-3xl mb-4 font-bold">Pseudocode</h1>
          <p className="text-lg mb-4">
            Pseudocode is a simplified, half-English, half-code outline of a
            computer program's logic. It is not written in a specific
            programming language but rather in a human-readable format that
            resembles programming languages.
          </p>
          <p className="text-base inline">
            Algorithm is consist of 3 elements.
          </p>
          <ul className="list-decimal mb-2">
            <li>
              <strong>Input value </strong> : An algorithm has input values from
              a specified set.
            </li>
            <li>
              <strong>Process</strong> : Execute some process from input to
              desire output value.
            </li>
            <li>
              <strong>Output value </strong>: From each set of input values, an
              algorithm produces output values from a specified set.
            </li>
          </ul>
          <SyntaxHighlight codeString={pseudocode} language="pseudocode" />
        </div>
      </div>
    );
  };

  //---------------------------------------------------------------------
  // Main component
  //---------------------------------------------------------------------
  return (
    <>
      <AboutAlgorithm />
      <Pseudocode />
    </>
  );
};

const code = `// Secondaly, addOne() get input value and execute function(algorithm).
function addOne(value: number) {
  // Finaly, return output value.
  return value + 1;
}

// First of all, set input value to addOne().
const result = addOne(1);
// Output value is 2
`;

const pseudocode = `function find_maximum(L):
    max_num <- L[0]
    for each n in L:
        if n > max_num:
            max_num <- n
    return max_num

`;

export default Algorithm;
