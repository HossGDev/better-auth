/**
 * Login page for the application.
 */
"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { authClient } from "@/lib/auth-client";

export default function LoginPage() {
  const [form, setForm] = useState({ email: "", password: "" });
  const router = useRouter();

  async function handleLogin() {
    const { error } = await authClient.signIn.email({
      email: form.email,
      password: form.password,
      callbackURL: "/dashboard",
    });

    if (!error) {
      router.push("/dashboard");
    } else if (error.status === 403) {
      router.push("/verify");
    } else {
      // optional: show error message
      console.error(error.message);
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center">
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle>Welcome back</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-1">
            <Label htmlFor="email">Email</Label>
            <Input
              autoComplete="email"
              id="email"
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              type="email"
            />
          </div>
          <div className="space-y-1">
            <Label htmlFor="password">Password</Label>
            <Input
              autoComplete="current-password"
              id="password"
              onChange={(e) => setForm({ ...form, password: e.target.value })}
              type="password"
            />
          </div>
          <Button className="w-full" onClick={handleLogin}>
            Sign In
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
