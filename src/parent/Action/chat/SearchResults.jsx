import React from "react";
import "./searchResults.css";
import SearchResult from "./SearchResult";

const SearchResults = ({
  results,
  setCloseResults,
  closeResults,
  currentUser,
}) => {
  return (
    <div className="searchResults">
      <p onClick={() => setCloseResults(!closeResults)} className="xSign">
        X
      </p>
      <div className="searchResults__container">
        {results.map((result) => (
          <SearchResult
            result={result}
            currentUser={currentUser}
            setCloseResults={setCloseResults}
            closeResults={closeResults}
          />
        ))}
      </div>
    </div>
  );
};

export default SearchResults;
