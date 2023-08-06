"use client";

import Background from "@/Components/background";
import Button from "@/Components/button";
import ButtonTwo from "@/Components/buttonTwo";
import Input from "@/Components/input";
import { useRouter } from "next/navigation";

const ResetPassword = ({ params }: { params: string }) => {
  const imageURL = "https://i.ibb.co/YBhPSWL/1691201964000-1.png";
  const route = useRouter();
  return (
    <div className="w-full flex overflow-hidden relative md:flex-row flex-col-reverse h-screen">
      <div className="absolute z-30 mt-4 ml-4 top-0 left-0">
        <Button
          name="Back"
          filled={true}
          onClick={() => {
            route.back();
          }}
          bigger={false}
        />
      </div>
      <div className="w-full basis-[60%] overflow-auto md:basis-[40%] flex">
        <div className="md:w-3/4 w-full pb-5 md:pb-0 px-3 md:px-0 flex-col m-auto gap-3 flex items-center justify-center">
          <div className="w-full flex-col items-start justify-start flex">
            <h2 className="text-4xl text-blue-600">Reset Password!</h2>
            <p className="text-lg">
              Please create a strong and memorable password
            </p>
          </div>
          <form className="w-full flex flex-col gap-4" action="">
            <label htmlFor="">
              Password
              <Input
                includeBorder={true}
                value={""}
                setValue={() => {}}
                placeholder="IComeInPeace$12"
                type="password"
                disabled={false}
              />
            </label>
            <label htmlFor="">
              Confirm Password
              <Input
                includeBorder={true}
                value={""}
                setValue={() => {}}
                placeholder="IComeInPeace$12"
                type="password"
                disabled={false}
              />
            </label>
            <ButtonTwo
              filled={true}
              disabled={false}
              rounded={true}
              text="Reset"
              hover={false}
            />
          </form>
        </div>
      </div>
      <div className="w-full basis-[40%] md:basis-[60%] flex">
        <Background
          image={imageURL}
          header="Create your new strong password"
          message="Reset Your Password"
        />
      </div>
    </div>
  );
};

export default ResetPassword;
