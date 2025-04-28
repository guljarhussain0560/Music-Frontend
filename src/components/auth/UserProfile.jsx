import React, { useState, useEffect } from "react";
import api from "../services/api";
import { useMyContext } from "../store/ContextApi";
import Avatar from "@mui/material/Avatar";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import InputField from "../InputField/InputField";
import { useForm } from "react-hook-form";
import Buttons from "../utils/Buttons";
import Switch from "@mui/material/Switch";
import toast from "react-hot-toast";
import { jwtDecode } from "jwt-decode";
import { Blocks } from "react-loader-spinner";
import moment from "moment";
import Errors from "../Errors";

const UserProfile = () => {
    const { currentUser, token } = useMyContext();

    const [loginSession, setLoginSession] = useState([]);

    const [psgeError, setPageError] = useState(false);

    //loading state
    const [loading, setLoading] = useState(false);
    const [pageLoader, setPageLoader] = useState(false);
    const [disabledLoader, setDisbledLoader] = useState(false);
    const [twofaCodeLoader, settwofaCodeLoader] = useState(false);

    const {
        register,
        handleSubmit,
        setValue,

        formState: { errors },
    } = useForm({
        defaultValues: {
            username: currentUser?.username,
            email: currentUser?.email,
            password: "",
        },
        mode: "onTouched",
    });

    //update the credentials
    const handleUpdateCredential = async (data) => {
        const newUsername = data.username;
        const newPassword = data.password;

        try {
            setLoading(true);
            const formData = new URLSearchParams();
            formData.append("token", token);
            formData.append("newUsername", newUsername);
            formData.append("newPassword", newPassword);
            await api.post("/auth/update-credentials", formData, {
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                },
            });

            //fetchUser();
            toast.success("Update Credential successful");
        } catch (error) {
            toast.error("Update Credential failed");
        } finally {
            setLoading(false);
        }
    };

      //two function for opening and closing the according
  const onOpenAccountHandler = () => {
    setOpenAccount(!openAccount);
    setOpenSetting(false);
  };
  const onOpenSettingHandler = () => {
    setOpenSetting(!openSetting);
    setOpenAccount(false);
  };


  return (
    <div className="min-h-[calc(100vh-74px)] py-10">
      {pageLoader ? (
        <>
          {" "}
          <div className="flex  flex-col justify-center items-center  h-72">
            <span>
              <Blocks
                height="70"
                width="70"
                color="#4fa94d"
                ariaLabel="blocks-loading"
                wrapperStyle={{}}
                wrapperClass="blocks-wrapper"
                visible={true}
              />
            </span>
            <span>Please wait...</span>
          </div>
        </>
      ) : (
        <>
          {" "}
          <div className="xl:w-[70%] lg:w-[80%] sm:w-[90%] w-full sm:mx-auto sm:px-0 px-4   min-h-[500px] flex lg:flex-row flex-col gap-4 ">
            <div className="flex-1  flex flex-col shadow-lg shadow-gray-300 gap-2 px-4 py-6">
              <div className="flex flex-col items-center gap-2   ">
                <Avatar
                  alt={currentUser?.username}
                  src="/static/images/avatar/1.jpg"
                />
                <h3 className="font-semibold text-2xl">
                  {currentUser?.username}
                </h3>
              </div>
              <div className="my-4 ">
                <div className="space-y-2 px-4 mb-1">
                  <h1 className="font-semibold text-md text-slate-800">
                    UserName :{" "}
                    <span className=" text-slate-700  font-normal">
                      {currentUser?.username}
                    </span>
                  </h1>

                </div>
                <div className="py-3">
                  <Accordion expanded={openAccount}>
                    <AccordionSummary
                      className="shadow-md shadow-gray-300"
                      onClick={onOpenAccountHandler}
                      expandIcon={<ArrowDropDownIcon />}
                      aria-controls="panel1-content"
                      id="panel1-header"
                    >
                      <h3 className="text-slate-800 text-lg font-semibold ">
                        Update User Credentials
                      </h3>
                    </AccordionSummary>
                    <AccordionDetails className="shadow-md shadow-gray-300">
                      <form
                        className=" flex flex-col gap-3"
                        onSubmit={handleSubmit(handleUpdateCredential)}
                      >
                        <InputField
                          label="UserName"
                          required
                          id="username"
                          className="text-sm"
                          type="text"
                          message="*Username is required"
                          placeholder="Enter your username"
                          register={register}
                          errors={errors}
                        />{" "}
                        <InputField
                          label="Email"
                          required
                          id="email"
                          className="text-sm"
                          type="email"
                          message="*Email is required"
                          placeholder="Enter your email"
                          register={register}
                          errors={errors}
                          readOnly
                        />{" "}
                        <InputField
                          label="Enter New Password"
                          id="password"
                          className="text-sm"
                          type="password"
                          message="*Password is required"
                          placeholder="type your password"
                          register={register}
                          errors={errors}
                          min={6}
                        />
                        <Buttons
                          disabled={loading}
                          className="bg-customRed font-semibold flex justify-center text-white w-full py-2 hover:text-slate-400 transition-colors duration-100 rounded-sm my-3"
                          type="submit"
                        >
                          {loading ? <span>Loading...</span> : "Update"}
                        </Buttons>
                      </form>
                    </AccordionDetails>
                  </Accordion>

                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default UserProfile;

