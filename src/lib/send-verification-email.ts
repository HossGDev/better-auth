import { readFileSync } from "node:fs";
import { join } from "node:path";
import { Resend } from "resend";

if (!process.env.RESEND_API_KEY) {
  throw new Error("RESEND_API_KEY is not set");
}

const resend = new Resend(process.env.RESEND_API_KEY);

let template: string | null = null;

function getTemplate() {
  if (!template) {
    template = readFileSync(
      join(process.cwd(), "src/emails/verify-email.html"),
      "utf-8"
    );
  }
  return template;
}

export async function sendVerificationEmail({
  email,
  url,
  token: _token,
}: {
  email: string;
  url: string;
  token: string;
}) {
  const html = getTemplate()
    .replace("{{name}}", email)
    .replace("{{url}}", url)
    .replace("{{url}}", url);

  const { data, error } = await resend.emails.send({
    from: "onboarding@resend.dev",
    to: email,
    subject: "Verify your email address",
    html,
  });

  if (error) {
    throw new Error(`Failed to send verification email: ${error.message}`);
  }

  if (process.env.NODE_ENV !== "production") {
    console.log("Verification email sent, id:", data?.id);
  }
}
