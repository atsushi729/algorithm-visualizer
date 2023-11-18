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
          <SyntaxHighlight codeString={code} language="javascript" />
          <h3 className="text-2xl mb-4 mt-4 font-bold">Sample of Algorithm</h3>
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
