import React from "react";
import { successProps } from "./success";
import Lottie from "react-lottie";
import AnimationData from "../svg/message.json";

const Message = (props: successProps) => {
  const { message } = props;
  return (
    <div className="w-full h-[3rem] px-3 blueColor-1 blueColor-2 rounded-lg flex p-1 relative items-center gap-2">
      <div className="w-[2.5rem] relative h-[2.5rem]">
        <Lottie options={{ animationData: AnimationData, loop: false }} />
      </div>
      <p className="text-lg">{message}</p>
    </div>
  );
};

export default Message;
