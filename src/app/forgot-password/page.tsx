"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { authClient } from "@/lib/auth-client";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  async function handleSubmit() {
    await authClient.requestPasswordReset({
      email,
      redirectTo: "/reset-password",
    });
    setSent(true);
  }

  if (sent) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background px-4">
        <div className="w-full max-w-sm space-y-6 text-center">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-border bg-card">
            <svg
              aria-hidden="true"
              className="h-5 w-5 text-muted-foreground"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
              />
            </svg>
          </div>
          <div className="space-y-1">
            <h1 className="font-semibold text-2xl tracking-tight">
              Check your inbox
            </h1>
            <p className="text-muted-foreground text-sm">
              We sent you a password reset link.
            </p>
          </div>
          <Link
            className="text-muted-foreground text-sm transition-colors hover:text-foreground"
            href="/login"
          >
            Back to sign in
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="w-full max-w-sm space-y-6">
        <div className="space-y-1 text-center">
          <h1 className="font-semibold text-2xl tracking-tight">
            Forgot password?
          </h1>
          <p className="text-muted-foreground text-sm">
            Enter your email and we'll send you a reset link
          </p>
        </div>

        <div className="space-y-4 rounded-xl border border-border bg-card p-6 shadow-sm">
          <div className="space-y-1.5">
            <Label htmlFor="email">Email address</Label>
            <Input
              autoComplete="email"
              id="email"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              type="email"
            />
          </div>
          <Button className="w-full" onClick={handleSubmit}>
            Send reset link
          </Button>
        </div>

        <p className="text-center text-muted-foreground text-sm">
          Remember your password?{" "}
          <Link className="text-foreground hover:underline" href="/login">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
}
