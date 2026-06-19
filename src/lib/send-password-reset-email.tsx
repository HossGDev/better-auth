import { render } from "@react-email/render";
import { Resend } from "resend";
import { ResetPassword } from "../emails/reset-password";

function getResendClient() {
  if (!process.env.RESEND_API_KEY) {
    throw new Error("RESEND_API_KEY is not set");
  }
  return new Resend(process.env.RESEND_API_KEY);
}

export async function sendPasswordResetEmail({
  email,
  url,
}: {
  email: string;
  url: string;
}) {
  const resend = getResendClient();
  const html = await render(<ResetPassword name={email} url={url} />);

  const { data, error } = await resend.emails.send({
    from: "onboarding@resend.dev",
    to: email,
    subject: "Reset your password",
    html,
  });

  if (error) {
    throw new Error(`Failed to send password reset email: ${error.message}`);
  }

  if (process.env.NODE_ENV !== "production") {
    console.log("Password reset email sent, id:", data?.id);
  }
}
