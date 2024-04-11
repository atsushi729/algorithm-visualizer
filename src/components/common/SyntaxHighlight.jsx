import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { useState } from "react";

const SyntaxHighlight = ({ codeString = "", language = "javascript" }) => {
  const [copy, setCopy] = useState(false);

  //---------------------------------------------------------------------
  // Sub component
  //---------------------------------------------------------------------
  const CopiedButton = () => {
    return (
      <button className="py-1 inline-flex items-center gap-1">
        <span className="text-base mt-1">
          <ion-icon name="checkmark-sharp"></ion-icon>
        </span>
        Copied
      </button>
    );
  };

  const CopyButton = () => {
    return (
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
    );
  };

  //---------------------------------------------------------------------
  // Main component
  //---------------------------------------------------------------------
  return (
    <div className="max-w-2x1 min-w-[25rem] bg-[#3a404d] rounded-md overflow-hidden">
      <div className="flex justify-between px-4 text-white text-xs items-center">
        <p className="text-sm">Example code</p>
        {copy ? <CopiedButton /> : <CopyButton />}
      </div>
      <SyntaxHighlighter
        language={language}
        style={atomOneDark}
        customStyle={{ padding: "25px" }}
      >
        {codeString}
      </SyntaxHighlighter>
    </div>
  );
};

export default SyntaxHighlight;
