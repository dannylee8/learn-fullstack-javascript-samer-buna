import React from "react";
import ContestPreview from "./ContestPreview";

const ContestList = ({ contests, onContestClick }) => {
  return (
    <div className="ContestList link">
      {Object.keys(contests).map((contestID) => (
        <ContestPreview
          onClick={onContestClick}
          key={contestID}
          {...contests[contestID]}
        />
      ))}
    </div>
  );
};

export default ContestList;
