import React from "react";
import { Button} from "./ui/button";
import { Mail ,Chrome  ,Globe } from "lucide-react"
import { Label } from "./ui/label";
import { Input } from "./ui/input";

function Signup() {
  return (
    <div className=" bg-slate-100 p-7 lg:p-14 py-24 rounded-2xl">
      
      <div className="flex mb-3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="size-9  m-auto"
          color="pink"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M6.429 9.75 2.25 12l4.179 2.25m0-4.5 5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0 4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0-5.571 3-5.571-3"
          />
        </svg>
        <div>
        <h2 className=" px-2 text-2xl lg:px-5 lg:text-3xl font-bold ">ghost.</h2>
      </div>
      <div className="ml-5 lg:ml-28">
        <h2 className="flex">
          <a href="#">
            No account ? <br />
            Sign up
          </a>
        </h2>
      </div>
      </div>
     <div className="mt-4">
      <h1 className="flex justify-start font-bold">Sign In</h1>
     </div>
      <div  className=" flex justify-center mt-5">
      <Button className="bg-blue-600  mr-2 ">
      <Chrome className="mr-2 h-4 w-4" /> Sign in with Google
    </Button> 
    <Button className="bg-pink-500 ">
           <Globe className="text-pink-300"/>
    </Button>
      </div>
      <div className="grid w-full max-w-sm items-center gap-1.5 mt-4">
      <Label htmlFor="name" className="flex justify-start">Username or Email Address</Label>
      <Input type="email" id="email" placeholder="abcd@gmaol.com" />
    </div>
      <div className="mt-4">
      <label  className="flex justify-start">Password
      <a href="#" className="flex justify-end w-full  ">Foget Password ?</a>
      </label>
      <Input type="password" id="password" placeholder="password" />
    </div>
    <div className="mt-4">
    <Button className="flex justify-start px-6">Sign in</Button>
    </div>
    </div>
  );
}

export default Signup;
