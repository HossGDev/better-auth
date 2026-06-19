"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

export default function Home() {
  const router = useRouter();

  return (
    <div>
      <h1>Welcome</h1>
      <p>This is a simple home page for the application.</p>
      <Button onClick={() => router.push("/login")}>Login</Button>
      <Button onClick={() => router.push("/register")}>Register</Button>
    </div>
  );
}
