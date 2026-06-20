import { render } from "@react-email/render";
import { Resend } from "resend";
import { VerifyEmail } from "../emails/verify-email";

function getResendClient() {
  if (!process.env.RESEND_API_KEY) {
    throw new Error("RESEND_API_KEY is not set");
  }
  return new Resend(process.env.RESEND_API_KEY);
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
  const resend = getResendClient();
  const html = await render(<VerifyEmail name={email} url={url} />);

  const from = process.env.EMAIL_FROM;

  if (!from) {
    throw new Error("EMAIL_FROM is not set");
  }

  const { data, error } = await resend.emails.send({
    from,
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
