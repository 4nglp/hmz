"use client";
import Link from "next/link";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Terms } from "../components/ui/terms";

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
        <Label htmlFor="email">E-mail</Label>
        <Input id="email" type="email" />
      </div>
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label htmlFor="password">Password</Label>
        <Input
          id="password"
          type="password"
          placeholder="Choose a password (min 10)"
        />
      </div>
      <Terms />
      <div className="w-full">
        <Button className="w-full" size="lg">
          Register
        </Button>
      </div>
      <p className="text-center">
        Have an account already?{" "}
        <Link className="text-indigo-500 hover:underline" href="/login">
          Log in!
        </Link>
      </p>
    </form>
  );
};

export default RegisterForm;
