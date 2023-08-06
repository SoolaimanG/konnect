"use client";

import Background from "@/Components/background";
import Button from "@/Components/button";
import ButtonTwo from "@/Components/buttonTwo";
import Input from "@/Components/input";
import { BsFingerprint } from "react-icons/bs";
import { useRouter } from "next/navigation";

const ForgetPassword = () => {
  const imageURL = "https://i.ibb.co/28Ls5X3/1691195346091-1.png";
  const route = useRouter();

  return (
    <div className="w-full flex relative h-screen">
      <div className="absolute z-30 mt-4 ml-4 top-0 left-0">
        <Button
          name="Back"
          onClick={() => {
            route.back();
          }}
          bigger={false}
          filled={true}
        />
      </div>
      <div className="basis-[60%] md:basis-[40%] w-full items-center justify-center flex">
        <div className="md:w-3/4 w-full pb-5 md:pb-0 px-3 md:px-0 flex-col m-auto gap-3 flex items-center justify-center">
          <div className="w-full items-start justify-start flex">
            <div className="border-solid flex items-start justify-start cursor-pointer border-[1.2px] border-gray-500 p-2 rounded-lg">
              <BsFingerprint size={30} />
            </div>
          </div>
          <div className="w-full">
            <h2 className="text-3xl">Forgot your password?</h2>
            <p>No worries,we will get it back</p>
          </div>
          <form className="w-full flex flex-col gap-5" action="">
            <label htmlFor="">
              Email
              <Input
                includeBorder={true}
                disabled={false}
                placeholder="Johndoe@gmail.com"
                value={""}
                setValue={() => {}}
                type="email"
              />
            </label>
            <ButtonTwo
              disabled={false}
              text={"Send email"}
              hover={true}
              rounded={true}
              filled={true}
            />
          </form>
        </div>
      </div>
      <div className="basis-[40%] md:basis-[60%] w-full flex">
        <Background
          image={imageURL}
          header=""
          message="We will help you retrive your account with zero stress"
        />
      </div>
    </div>
  );
};

export default ForgetPassword;
