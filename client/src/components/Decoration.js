import React from "react";
import decorationImage from "../../public/decoration.png";

function Decoration() {
  return (
    <div>
      {" "}
      <div className="lg:w-1/2 h-1/3 md:w-full w-full">
        <img
          src={decorationImage}
          alt="Kil-A-Bytes"
          className="w-full h-auto"
        />
      </div>
    </div>
  );
}

export default Decoration;
