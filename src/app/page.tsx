import { Button } from "@/components/ui/button";
import { authClient } from "@/lib/auth-client";

export default function Home() {
  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      <p>This is a simple home page for the application.</p>
      <Button onClick={() => authClient.signOut()}>Sign Out</Button>
    </div>
  );
}
