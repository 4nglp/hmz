"use client";
import Link from "next/link";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";

const RegisterForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted");
  };
  return (
    <form className="space-y-4 w-[300px]" onSubmit={handleSubmit}>
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label htmlFor="username">Username</Label>
        <Input id="username" />
      </div>
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label htmlFor="password">Password</Label>
        <Input id="password" type="password" />
      </div>
      <p className="text-center">
        Do not have an account?{" "}
        <Link className="text-indigo-500 hover:underline" href="/register">
          Create one!
        </Link>
      </p>
      <div className="w-full">
        <Button className="w-full " size="lg">
          Log in
        </Button>
      </div>
    </form>
  );
};

export default RegisterForm;
