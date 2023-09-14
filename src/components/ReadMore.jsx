
import React, { useState } from "react";

const ReadMore = ({ text, maxChars }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  const displayText = expanded ? text : text.slice(0, maxChars);

  return (
    <div className="">
      <p className="text-md text-justify">{displayText}...</p>
      {text.length > maxChars && (
        <button
          onClick={toggleExpand}
          className="bg-gradient-to-r from-primary to-green-900 bg-clip-text text-transparent pt-3"
        >
          {expanded ? "Read Less" : "Read More"}
        </button>
      )}
    </div>
  );
};

export default ReadMore;
