import { render } from "@react-email/components";
import { Resend } from "resend";
import { VerifyEmail } from "../emails/verify-email";

if (!process.env.RESEND_API_KEY) {
  throw new Error("RESEND_API_KEY is not set");
}

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendVerificationEmail({
  email,
  url,
  token: _token,
}: {
  email: string;
  url: string;
  token: string;
}) {
  const html = await render(<VerifyEmail name={email} url={url} />);

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
