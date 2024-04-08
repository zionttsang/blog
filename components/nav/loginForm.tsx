"use client";

import { FaGithub } from "react-icons/fa";
import { Button } from "../ui/button";
import { createBrowserClient } from "@supabase/ssr";
import { usePathname } from "next/navigation";

export default function LoginForm() {
  // init supabase client
  const supabase = createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );

  // login func
  const pathName = usePathname();
  const handleLogin = () => {
    supabase.auth.signInWithOAuth({
      provider: "github",
      options: {
        // origin will be same as set in github. in dev it's localhost.
        redirectTo: location.origin + "/auth/callback?next=" + pathName,
      },
    });
  };

  return (
    <Button
      variant="outline"
      className="flex items-center gap-2"
      onClick={handleLogin}
    >
      <FaGithub />
      Login
    </Button>
  );
}
