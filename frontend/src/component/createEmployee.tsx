import { useRef } from "react";
import { InputBox } from "./InputBox";
import { Button } from "./button";
import { ManLogo } from "../logo/menlogo";
import axios from "axios";

interface Employee {
  _id: string; // Assuming MongoDB _id
  name: string;
  email: string;
  role: string;
  department: string;
  status: "Active" | "Inactive";
  userId?: string; // Optional, if it's stored but not always used on the frontend
}

export function CreateContentModel({open, onClose, setContent}: {open: boolean, onClose: () => void, setContent: React.Dispatch<React.SetStateAction<Employee[]>>;}) {
    const nameRef = useRef<HTMLInputElement>(null);
    const emailRef = useRef<HTMLInputElement>(null);
    const roleRef = useRef<HTMLSelectElement>(null);
    const departmentRef = useRef<HTMLSelectElement>(null);

    async function createContent(){
        const name = nameRef.current?.value;
        const email = emailRef.current?.value;
        const role = roleRef.current?.value;
        const department = departmentRef.current?.value;

        console.log(name, email, role, department);
        const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/employee`, {
            name,
            email,
            role,   
            department,
            status: "Active"
        }, 
        {
            headers: {
                "token": localStorage.getItem("token")
            }
        }   
        )
        alert(response.data.message);
        setContent((prev) => [...prev, response.data.content]);
        onClose();
    } 
    const role = ["Ethical Hacker", "Software Tester", "Marketing Coordinator", "Web Designer", "UI/UX Designer", "President of Sales", "Software Developer", "Team Leader", "Project Manager", "Scrum Master"];
    const department = ["Engineering", "Operations", "Human Resources", "Manning", "HSEQ", "IT", "Maintenance"]

    return <div>
        {open && <div>
            <div className="w-screen h-full flex justify-center items-center bg-slate-500 fixed top-0 left-0 opacity-65">
            
            </div> 
            <div className="w-screen h-full flex flex-col justify-center items-center fixed top-0 left-0 ">
                <div className="bg-gradient-to-r from-white via-white/80 to-rose-50 rounded-2xl p-10 shadow-lg flex items-center justify-center gap-30">
                    <div >
                        <ManLogo/>
                    </div>
                    <div className="bg-white p-6 rounded-2xl">
                        <div className=" text-[#567BFF] font-bold text-xl">
                            Add New Employee
                        </div>
                        
                        <div>
                            <InputBox reference={nameRef} className="w-90 p-3 border-1 border-[#BFBFBF] rounded-md" type="text" heading="Full Name" id="name" placeholder="Enter full name"/>
                            <InputBox reference={emailRef} className="p-3 border-1 border-[#BFBFBF]  rounded-md" type="email" heading="Email Address" id="email" placeholder="Enter email address"/>  
                        </div>
                        <div className="flex gap-6 my-7">
                            <div className="flex flex-col  ">
                                <label htmlFor="role" className="mb-1 text-md font-medium">Role</label>
                                <select ref={roleRef} id="role" name="role" className=" rounded-md border-1 border-[#BFBFBF] py-2 text-md text-[#94A3B8] shadow-sm p-1 ">
                                <option selected disabled hidden>Select role</option>
                                {role.map((role) => <option key={role} value={role}>{role}</option> )}
                                </select>
                            </div>

                            <div className="flex flex-col">
                                <label htmlFor="department" className="mb-1 text-md font-medium">Department</label>
                                <select ref={departmentRef} id="department" name="department" className="rounded-md border-1 border-[#BFBFBF] py-2 text-md text-[#94A3B8] shadow-sm p-1 ">
                                <option selected disabled hidden>Select department</option>
                                {department.map((department) => <option key={department} value={department}>{department}</option>)}
                                </select>
                            </div>
                        </div>
                        <div className="flex mt-7 ">
                            <div className="mr-2">     
                                <Button onClick={() => { createContent()}} heading="Add Employee"/>
                            </div>
                            <div>
                                <Button onClick={onClose} heading="Cancel"/>
                            </div>
                        </div>
                    </div>
                </div>
                
                
               
            </div>        
        </div>
        }
    </div>
   
}

