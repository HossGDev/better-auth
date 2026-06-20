"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { authClient } from "@/lib/auth-client";

export default function RegisterPage() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  async function handleRegister() {
    setError(null);
    const { error } = await authClient.signUp.email({
      name: form.name,
      email: form.email,
      password: form.password,
      callbackURL: "/dashboard",
    });

    if (error) {
      setError(error.message ?? "Something went wrong.");
    } else {
      router.push("/verify");
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="w-full max-w-sm space-y-6">
        <div className="space-y-1 text-center">
          <h1 className="font-semibold text-2xl tracking-tight">
            Create an account
          </h1>
          <p className="text-muted-foreground text-sm">
            Enter your details to get started
          </p>
        </div>

        <div className="space-y-4 rounded-xl border border-border bg-card p-6 shadow-sm">
          {error && (
            <p className="text-center text-destructive text-sm">{error}</p>
          )}
          <div className="space-y-1.5">
            <Label htmlFor="name">Full name</Label>
            <Input
              autoComplete="name"
              id="name"
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              placeholder="John Doe"
            />
          </div>
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
            <Label htmlFor="password">Password</Label>
            <Input
              autoComplete="new-password"
              id="password"
              onChange={(e) => setForm({ ...form, password: e.target.value })}
              placeholder="••••••••"
              type="password"
            />
          </div>
          <Button className="w-full" onClick={handleRegister}>
            Create account
          </Button>
        </div>

        <p className="text-center text-muted-foreground text-sm">
          Already have an account?{" "}
          <Link className="text-foreground hover:underline" href="/login">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
}
