import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import React, { useState } from "react";

const Basic = () => {
  const codeString = `import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

  const Component = () => {
    const codeString = '(num) => num + 1';
    return (
      <SyntaxHighlighter language="javascript" style={docco}>
      {codeString}
      </SyntaxHighlighter>
      );
    };`;

  const [copy, setCopy] = useState(false);

  return (
    <div className="max-w-2x1 min-w-[25rem] bg-[#3a404d] rounded-md overflow-hidden">
      <div className="flex justify-between px-4 text-white text-xs items-center">
        <p className="text-sm">Example code</p>
        {copy ? (
          <button className="py-1 inline-flex items-center gap-1">
            <span className="text-base mt-1">
              <ion-icon name="checkmark-sharp"></ion-icon>
            </span>
            Copied
          </button>
        ) : (
          <button
            className="py-1 inline-flex items-center gap-1"
            onClick={() => {
              navigator.clipboard.writeText(codeString);
              setCopy(true);
              setTimeout(() => {
                setCopy(false);
              }, 3000);
            }}
          >
            <span className="text-base mt-1">
              <ion-icon name="clipboard-outline"></ion-icon>
            </span>
            Copy code
          </button>
        )}
      </div>
      <SyntaxHighlighter
        language="jsx"
        style={atomOneDark}
        customStyle={{ padding: "25px" }}
        // wrapLongLines={true}
      >
        {codeString}
      </SyntaxHighlighter>
    </div>
  );
};

export default Basic;
