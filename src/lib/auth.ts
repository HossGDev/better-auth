import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { account, session, user, verification } from "./auth-schema";
import { getDb } from "./db";
import { sendVerificationEmail } from "./send-verification-email";

/**
 * Initialize the authentication system with the necessary configurations.
 */
export const auth = betterAuth({
  database: drizzleAdapter(getDb(), {
    provider: "pg",
    schema: { user, session, account, verification },
  }),
  emailAndPassword: {
    enabled: true,
    requireEmailVerification: true,
  },
  emailVerification: {
    sendOnSignUp: true,
    sendOnSignIn: true,
    autoSignInAfterVerification: true,
    callbackURL: "/dashboard",
    expiresIn: 600,
    async sendVerificationEmail({ user, url, token }, _request) {
      await sendVerificationEmail({ email: user.email, url, token });
    },
  },
});
