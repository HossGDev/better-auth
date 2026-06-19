import { readFileSync } from "node:fs";
import { join } from "node:path";
import { Resend } from "resend";

/**
 * Sends a verification email to the user.
 */
const resend = new Resend(process.env.RESEND_API_KEY);

const template = readFileSync(
  join(process.cwd(), "src/emails/verify-email.html"),
  "utf-8"
);

export async function sendVerificationEmail({
  email,
  url,
  token: _token,
}: {
  email: string;
  url: string;
  token: string;
}) {
  const html = template
    .replace("{{name}}", email)
    .replace("{{url}}", url)
    .replace("{{url}}", url);

  // TODO: Add error handling, logging and change the from address
  const { data, error } = await resend.emails.send({
    from: "onboarding@resend.dev",
    to: email,
    subject: "Verify your email address",
    html,
  });

  console.log("Resend data:", data);
  console.log("Resend error:", error);
}
