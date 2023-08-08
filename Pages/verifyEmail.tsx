"use client";

import AllModals from "@/Components/allModals";
import Button from "@/Components/button";
import Input from "@/Components/input";
import Logo from "@/Components/logo";
import { IconButton, Tooltip } from "@mui/material";
import { useState } from "react";
import { AiOutlineClose, AiOutlineExclamationCircle } from "react-icons/ai";
import { useRouter } from "next/navigation";

const VerifyEmail = ({ params }: { params: string }) => {
  const [openModal, setOpenModal] = useState(false);
  const route = useRouter();
  return (
    <div className="w-full relative flex flex-col md:flex-row overflow-hidden h-screen">
      <div className="absolute z-10 cursor-pointer top-0 right-0 mt-4 mr-4">
        <Tooltip title="Skip">
          <IconButton>
            <AiOutlineClose />
          </IconButton>
        </Tooltip>
      </div>
      <div className="basis-[30%] flex-col justify-center px-2 items-center md:justify-between py-4 w-full h-full bg-blue-50 flex">
        <div className="hidden md:block">
          {" "}
          <Logo enableColor={false} showIcon={true} loading={false} />
        </div>
        <h2 className="md:text-5xl text-7 text-3xl text-center md:text-left font-semibold">
          Please confirm the validity of your email.
        </h2>
        <div className="hidden md:flex text-gray-500 items-center gap-1">
          <AiOutlineExclamationCircle size={35} />
          <span>
            We need to verify your email for security reasons and for you to be
            able to access all app features
          </span>
        </div>
      </div>
      <div className="basis-[70%] relative items-center justify-center py-4 w-full h-full  flex">
        <div className="flex w-full flex-col px-3 gap-3">
          <h2 className="md:text-5xl text-6 text-3xl md:w-2/3 w-full font-semibold">
            Check your email for a verification link
          </h2>
          <label htmlFor="">
            Your email
            <Input
              value={params}
              setValue={() => {}}
              disabled={false}
              includeBorder={true}
              placeholder="Johndoe@gmail.com"
              type="email"
            />
          </label>
          <p className="text-lg text-4 text-gray-500">
            Didn't receive the email?Please check the spam folder or try to
            resend the email with your correct email
          </p>
          <div className="w-full flex items-center md:mt-0 mt-3">
            <div className="w-full flex items-start justify-start">
              <AllModals
                button={
                  <button
                    onClick={() => setOpenModal((prev) => !prev)}
                    className="text-blue-600 w-full text-[1rem]"
                  >
                    Terms of Service
                  </button>
                }
                open={openModal}
                setOpen={setOpenModal}
              >
                <h1 className="text-center text-4xl font-semibold">
                  Terms of Service
                </h1>

                <p className="text-lg">
                  <strong className="text-xl"> Use of the Service:</strong> The
                  link aggregator web app (the "Service") is provided by{" "}
                  <span className="text-blue-600">Konnect</span>, By using the
                  Service, you agree to be bound by these Terms of Service and
                  our User Privacy
                </p>

                <p className="text-lg">
                  <strong className="text-xl"> Eligibility:</strong> You must be
                  at least 12 years old to use the Service. By using the
                  Service, you represent and warrant that you meet this
                  requirement.
                </p>

                <p className="text-lg">
                  <strong className="text-xl"> Content:</strong> The Service
                  allows users to submit links to websites, articles, and other
                  online resources (collectively, "Content"). By submitting
                  Content, you represent and warrant that you own all rights to
                  such Content, or have obtained all necessary permissions and
                  licenses to use such Content. You further represent and
                  warrant that the Content does not violate any laws or
                  regulations, and does not contain any harmful, unethical,
                  racist, sexist, toxic, dangerous, or illegal content.
                </p>

                <p className="text-lg">
                  <strong className="text-xl"> License Grant:</strong> By
                  submitting Content to the Service, you grant us a worldwide,
                  royalty-free, non-exclusive, sublicensable, and transferable
                  license to use, reproduce, prepare derivative works of,
                  display, perform, and distribute the Content in connection
                  with the Service and our business, including for marketing and
                  advertising purposes.
                </p>

                <p className="text-lg">
                  <strong className="text-xl"> User Conduct:</strong> You agree
                  to use the Service only for lawful purposes, and to comply
                  with all applicable laws and regulations. You further agree
                  not to engage in any conduct that could damage or impair the
                  Service, or interfere with others' use of the Service.
                </p>

                <p className="text-lg">
                  <strong className="text-xl"> Ownership:</strong> All right,
                  title, and interest in and to the Service, including all
                  intellectual property rights therein, are owned by us or our
                  licensors. You do not acquire any ownership rights by using
                  the Service.
                </p>

                <p className="text-lg">
                  <strong className="text-xl">Disclaimer of Warranties:</strong>{" "}
                  THE SERVICE IS PROVIDED ON AN AS-IS AND AS-AVAILABLE BASIS,
                  WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED. WE
                  SPECIFICALLY DISCLAIM ALL WARRANTIES OF MERCHANTABILITY,
                  FITNESS FOR A PARTICULAR PURPOSE, TITLE, AND NON-INFRINGEMENT.
                </p>

                <p className="text-lg">
                  <strong className="text-xl">
                    {" "}
                    Limitations of Liability:
                  </strong>{" "}
                  IN NO EVENT SHALL WE BE LIABLE TO YOU FOR ANY DAMAGES ARISING
                  OUT OF OR RELATED TO THE USE OF THE SERVICE, INCLUDING ANY
                  DIRECT, INDIRECT, INCIDENTAL, SPECIAL, PUNITIVE, OR
                  CONSEQUENTIAL DAMAGES.
                </p>

                <p className="text-lg">
                  <strong className="text-xl"> Governing Law:</strong> These
                  Terms shall be governed by and construed in accordance with
                  the laws of NIGERIA. Any disputes arising out of or related to
                  these Terms shall be resolved through binding arbitration in
                  accordance with the rules of the American Arbitration
                  Association.
                </p>
              </AllModals>
            </div>
            <div className="w-full justify-end md:gap-5 gap-3 flex items-end">
              <Button
                filled={false}
                onClick={() => {}}
                name="Resend"
                bigger={false}
              />
              <Button
                filled={true}
                onClick={() => {}}
                name="Verify"
                bigger={false}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerifyEmail;
