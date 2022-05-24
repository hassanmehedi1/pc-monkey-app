import React from "react";
import { DoubleBubble } from "react-spinner-animated";

import "react-spinner-animated/dist/index.css";

const Loading = () => {
  return (
    <div className="h-screen flex justify-center items-center">
      <DoubleBubble
        // text={"Loading..."}
        // bgColor={"#F0A500"}
        center={false}
        width={"180px"}
        height={"180px"}
      />
    </div>
  );
};

export default Loading;
