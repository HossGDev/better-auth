"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { authClient } from "@/lib/auth-client";

export default function Home() {
  const router = useRouter();

  async function handleSignOut() {
    await authClient.signOut();
    router.push("/login");
  }

  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      <p>This is a simple home page for the application.</p>
      <Button onClick={handleSignOut}>Sign Out</Button>
    </div>
  );
}
