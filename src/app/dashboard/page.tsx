"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { authClient } from "@/lib/auth-client";

export default function DashboardPage() {
  const router = useRouter();

  async function handleSignOut() {
    await authClient.signOut();
    router.push("/login");
  }

  return (
    <div>
      <h1>Dashboard</h1>
      <Button onClick={handleSignOut}>Sign Out</Button>
    </div>
  );
}
