import React from "react";
import { RotatingLines } from "react-loader-spinner";
import HashLoader from "react-spinners/HashLoader";

function Loader() {
  return (
    <div className="flex justify-center items-center w-full h-[450px]">
      <div className="flex flex-col items-center gap-1">
        {/* <RotatingLines
          visible={true}
          height="65"
          width="65"
          color="blue"
          strokeWidth="5"
          animationDuration="0.75"
          ariaLabel="rotating-lines-loading"
          wrapperStyle={{}}
          wrapperClass=""
        /> */}
        <HashLoader

          color="#5ea6f2"
        />
      </div>
    </div>
  );
}

export default Loader;

// // Loader.jsx
// import React from "react";
// // import { CircleLoader } from "react-spinners";

// const Loader = ({ loading = true, color = "#36d7b7", size = 50 }) => {
//   return (
//     <div className="flex items-center justify-center w-full h-full">
//       <CircleLoader loading={loading} color={color} size={size} />
//     </div>
//   );
// };

// export default Loader;
