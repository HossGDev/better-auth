/**
 * Login page for the application.
 */
"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { authClient } from "@/lib/auth-client";

export default function LoginPage() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  async function handleLogin() {
    setError(null);
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
      setError(error.message ?? "Something went wrong.");
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="w-full max-w-sm space-y-6">
        <div className="space-y-1 text-center">
          <h1 className="font-semibold text-2xl tracking-tight">
            Welcome back
          </h1>
          <p className="text-muted-foreground text-sm">
            Sign in to your account to continue
          </p>
        </div>

        <div className="space-y-4 rounded-xl border border-border bg-card p-6 shadow-sm">
          {error && (
            <p className="text-center text-destructive text-sm">{error}</p>
          )}
          <div className="space-y-1.5">
            <Label htmlFor="email">Email address</Label>
            <Input
              autoComplete="email"
              id="email"
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              placeholder="you@example.com"
              type="email"
            />
          </div>
          <div className="space-y-1.5">
            <div className="flex items-center justify-between">
              <Label htmlFor="password">Password</Label>
              <Link
                className="text-muted-foreground text-xs transition-colors hover:text-foreground"
                href="/forgot-password"
              >
                Forgot password?
              </Link>
            </div>
            <Input
              autoComplete="current-password"
              id="password"
              onChange={(e) => setForm({ ...form, password: e.target.value })}
              placeholder="••••••••"
              type="password"
            />
          </div>
          <Button className="w-full" onClick={handleLogin}>
            Sign in
          </Button>
        </div>

        <p className="text-center text-muted-foreground text-sm">
          Don&apos;t have an account?{" "}
          <Link className="text-foreground hover:underline" href="/register">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}
