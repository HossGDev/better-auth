"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { authClient } from "@/lib/auth-client";

export default function RegisterPage() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const router = useRouter();
  async function handleRegister() {
    const { error } = await authClient.signUp.email({
      name: form.name,
      email: form.email,
      password: form.password,
      callbackURL: "/login",
    });

    if (!error) {
      router.push("/login");
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center">
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle>Create an account</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-1">
            <Label>Name</Label>
            <Input
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />
          </div>
          <div className="space-y-1">
            <Label>Email</Label>
            <Input
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              type="email"
            />
          </div>
          <div className="space-y-1">
            <Label>Password</Label>
            <Input
              onChange={(e) => setForm({ ...form, password: e.target.value })}
              type="password"
            />
          </div>
          <Button className="w-full" onClick={handleRegister}>
            Sign Up
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
