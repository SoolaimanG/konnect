import React from "react";
import Lottie from "react-lottie";
import AnimationData from "../svg/success.json";

export type successProps = {
  message: string;
};

const Success = (props: successProps) => {
  return (
    <div className="w-fit greenColor-1 greenColor-2 px-3 rounded-lg flex p-1 relative items-center gap-2">
      <div className="w-[2.5rem] relative h-[2.5rem]">
        <Lottie options={{ animationData: AnimationData, loop: false }} />
      </div>
      <p className="text-lg">{props.message}</p>
    </div>
  );
};

export default Success;
