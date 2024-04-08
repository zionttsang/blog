import Link from "next/link";
import { Button } from "../ui/button";
import { FaGithub } from "react-icons/fa";
import LoginForm from "./loginForm";

export default function Navbar() {
  return (
    <nav className="flex item-center justify-between">
      <div className="group">
        <Link href="/" className="font-bold text-2xl">
          DailyBlog
        </Link>
        <div className="h-1 w-0 group-hover:w-full transition-all bg-green-500" />
      </div>
      <LoginForm />
    </nav>
  );
}
