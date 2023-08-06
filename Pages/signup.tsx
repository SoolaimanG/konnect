"use client";

import AllModals from "@/Components/allModals";
import Background from "@/Components/background";
import Button from "@/Components/button";
import ButtonTwo from "@/Components/buttonTwo";
import Input from "@/Components/input";
import { IconButton } from "@mui/material";
import Link from "next/link";
import React, { useState } from "react";
import { AiFillEye, AiFillQuestionCircle } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { useRouter } from "next/navigation";

const Signup = () => {
  const imageURL = "https://i.ibb.co/V3ycqqt/1691188417152-1.png";
  const route = useRouter();
  const [open, setOpen] = useState(false); //To pass to allModal Component
  return (
    <div className="w-full h-screen relative overflow-hidden flex-col-reverse md:flex-row flex">
      {/* Form Here */}
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
      <div className="w-full pt-20 md:pt-14 items-center justify-center flex-col gap-3 basis-[80%] overflow-auto md:basis-[40%] flex">
        <div className="md:w-3/4 w-full pb-5 md:pb-0 px-3 md:px-0 flex-col m-auto gap-3 flex items-center justify-center">
          <h2 className="text-4xl w-full items-start justify-start">
            Welcome to <span className="text-blue-600">Konnect</span>
          </h2>
          <div className="w-full flex items-center justify-between">
            <p className="text-lg">Register</p>
            {/* A Modal Component to avoid using alot of modals */}
            <AllModals
              button={
                <button
                  onClick={() => setOpen(true)}
                  className="flex gap-1 text-blue-600 items-center"
                >
                  Help
                  <AiFillQuestionCircle />
                </button>
              }
              open={open}
              setOpen={setOpen}
            >
              <div className="w-full flex flex-col gap-2">
                <h1 className="text-3xl font-semibold text-center">
                  Strong Password Tips
                </h1>
                <ul>
                  <li>
                    <h2 className="text-xl font-semibold">Minimum Length:</h2>{" "}
                    Your password should be at least 8 characters long.
                  </li>
                  <li>
                    <h2 className="text-xl font-semibold">Mix It Up:</h2>{" "}
                    Include a mix of uppercase letters, lowercase letters,
                    numbers, and special characters (e.g., @, #, $, %) to
                    enhance security.
                  </li>
                  <li>
                    <h2 className="text-xl font-semibold">
                      Avoid Common Choices:
                    </h2>{" "}
                    Refrain from using easily guessable information, such as
                    your name, birthdate, or common phrases.
                  </li>
                  <li>
                    <h2 className="text-xl font-semibold">Be Unique:</h2> Use
                    different passwords for each of your online accounts to
                    prevent potential security risks.
                  </li>
                </ul>

                <h1 className="text-3xl font-semibold text-center">
                  Creating a Memorable Password
                </h1>
                <ul>
                  <li>
                    <h2 className="text-xl font-semibold">Use Passphrases:</h2>{" "}
                    Consider using a passphrase—a sequence of words or a
                    sentence that you can easily remember but is difficult for
                    others to guess. For example, "PurpleStar$7Glitter!"
                  </li>
                  <li>
                    <h2 className="text-xl font-semibold">
                      Acronyms and Personalization:
                    </h2>{" "}
                    Create a password by combining the first letters of a
                    memorable phrase and personalizing it. For instance,
                    "ILoveToTravel$2023!" (I Love To Travel in 2023!)
                  </li>
                  <li>
                    <h2 className="text-xl font-semibold">
                      Song Lyrics or Quotes:
                    </h2>{" "}
                    Use a line from your favorite song or a quote from a book
                    that holds significance to you, and add numbers and special
                    characters for complexity. For example, "ToBeOrNotToBe?42!"
                  </li>
                </ul>

                <p className="text-lg text-gray-500">
                  Remember, your password is your first line of defense against
                  unauthorized access to your account. Choose a strong and
                  memorable password to protect your information and enjoy a
                  secure experience on our platform.
                </p>
              </div>
            </AllModals>
          </div>
          <form className="w-full flex-col flex gap-4" action="">
            <label htmlFor="">
              Email
              <Input
                value={""}
                setValue={() => {}}
                placeholder="johndoe@gmail.com"
                includeBorder={true}
                disabled={false}
                type="email"
              />
            </label>
            <label htmlFor="">
              Username
              <Input
                value={""}
                setValue={() => {}}
                placeholder="John123"
                includeBorder={true}
                disabled={false}
                type="text"
              />
            </label>
            <label htmlFor="">
              Password
              <div className="border-solid w-full rounded-md flex items-center border-[1.3px] border-blue-400 h-[2.5rem]">
                <input
                  placeholder="123456"
                  disabled={false}
                  value={""}
                  onChange={() => {}}
                  className={`w-full text-[#252525] pl-1 outline-none`}
                  type="password"
                  name=""
                  id=""
                />
                <IconButton>
                  <AiFillEye />
                </IconButton>
              </div>
            </label>
            <div className="w-full">
              <ButtonTwo
                disabled={false}
                text="SignUp"
                hover={true}
                rounded={true}
                filled={true}
              />
            </div>
          </form>
          <p>Or</p>
          <ButtonTwo
            disabled={true}
            text="SignUp with Google"
            hover={false}
            rounded={true}
            filled={false}
            icon={<FcGoogle />}
          />
          <p className="w-full flex items-start justify-start">
            I have an account?
            <Link
              href={"/auth/login"}
              className="text-[1rem] text-blue-600 underline"
              passHref
            >
              Login
            </Link>
          </p>
        </div>
      </div>
      {/* BackGround Here */}
      <div className="w-full basis-[20%] md:basis-[60%] flex">
        <Background
          image={imageURL}
          header="Shorten your link,all your links in one link"
          message="Welcome to Konnect"
        />
      </div>
    </div>
  );
};

export default Signup;
