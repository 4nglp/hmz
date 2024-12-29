import Link from "next/link";
import { Checkbox } from "./checkbox";
import { Label } from "./label";

export function Terms() {
  return (
    <div>
      <div className="flex items-center space-x-2">
        <Checkbox id="terms" />
        <Label htmlFor="terms">
          Read the{" "}
          <Link href="/privacy" className="text-indigo-500 hover:underline">
            {" "}
            Privacy and policy
          </Link>
        </Label>
      </div>
    </div>
  );
}
