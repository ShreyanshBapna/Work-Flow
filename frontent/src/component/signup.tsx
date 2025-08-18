import { useRef, useState } from "react";
import axios from "axios";
import { Email } from "../icons/email";
import { Mainlogo } from "../logo/mainlogo";
import { Port1, Port2 } from "../icons/port";
import { Button } from "./button";
import { InputBox } from "./InputBox";
import { RInputBox } from "./radioInput";

export const Signup = () => {
  const passwordRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const [role, setRole] = useState<"Admin" | "User" | "Intern">("User");

  async function createUser() {
    const password = passwordRef.current?.value;
    const email = emailRef.current?.value;


    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/signup`, {
          password,
          email,
          role,
        }
      );
      alert(response.data.message);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error("Signup failed:", error.response?.data);
        alert(error.response?.data?.message || "Signup failed. Please try again.");
      } else {
        console.error("An unexpected error occurred:", error);
        alert("An unexpected error occurred.");
      }
    }
  }

  return (
    <div className="flex-col flex h-screen w-full bg-gradient-to-r from-white via-rose-100 to-white/80">
      <div className="absolute top-0 left-0">
        <Mainlogo />
      </div>
      <div className="w-full flex items-center justify-center mt-35">
        <div className="w-75 flex flex-col gap-5">
          <div>
            <InputBox
              reference={emailRef}
              id="Email"
              type="email"
              heading="Email"
              placeholder="Email"
              className="w-75 p-2 border-1 rounded-md"
            />
            <InputBox
              reference={passwordRef}
              id="password"
              type="password"
              heading="Password"
              placeholder="password"
              className="w-75 p-2 border-1 rounded-md"
            />
          </div>

          <div className="flex justify-between items-center">
            <div className="font-medium">Role</div>
            <div className="flex">
              <RInputBox
                id="Admin"
                type="radio"
                name="role"
                value="Admin"
                className="mx-2"
                heading="Admin"
                onChange={() => setRole("Admin")}
              />
              <RInputBox
                id="Intern"
                type="radio"
                name="role"
                value="Intern"
                className="mx-2"
                heading="Intern"
                onChange={() => setRole("Intern")}
        
              />
              <RInputBox
                id="User"
                type="radio"
                name="role"
                value="User"
                className="mx-2"
                heading="User"
                onChange={() => setRole("User")}
              />
            </div>
          </div>
          <div className="flex items-center justify-center">
            <Button
              onClick={createUser}
              StartIcon={<Email />}
              heading="Signup with Email"
            />
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 ml-5">
        <Port1 />
      </div>
      <div className="absolute bottom-0 right-0 mr-5">
        <Port2 />
      </div>
    </div>
  );
};