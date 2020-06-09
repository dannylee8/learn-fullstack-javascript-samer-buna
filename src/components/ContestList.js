import React from "react";
import ContestPreview from "./ContestPreview";

const ContestList = ({ contests }) => {
  return (
    <div className="ContestList link">
      {contests.map((contest) => (
        <ContestPreview key={contest.id} {...contest} />
      ))}
    </div>
  );
};

export default ContestList;
