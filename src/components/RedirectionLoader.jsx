import React from "react";
import BeatLoader from "react-spinners/BeatLoader";

function RedirectionLoader() {
  return (
    <div className="flex justify-center items-center w-full h-[450px]">
      <div className="flex flex-col items-center gap-1">
        <BeatLoader color="#5ea6f2" />
      </div>
    </div>
  );
}

export default RedirectionLoader;
