import { betterAuth, BetterAuthOptions } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import prisma from "./app/lib/prisma";
import { sendEmail } from "./actions/email";
import { openAPI } from "better-auth/plugins";
import { admin } from "better-auth/plugins";

export const auth = betterAuth({
  database: prismaAdapter(prisma, {
    provider: "mongodb",
  }),
  session: {
    expiresIn: 60 * 60 * 24 * 7, // 7 days
    updateAge: 60 * 60 * 24, // 1 day (every 1 day the session expiration is updated)
    cookieCache: {
      enabled: true,
      maxAge: 5 * 60, // Cache duration in seconds
    },
  },
  user: {
    additionalFields: {
      premium: {
        type: "boolean",
        required: false,
      },
    },
  },
  socialProviders: {
    github: {
      clientId: process.env.GITHUB_CLIENT_ID as string,
      clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
    },
  },
  plugins: [openAPI()], // api/auth/reference
  emailAndPassword: {
    enabled: true,
    requireEmailVerification: true,
  },
  emailVerification: {
    sendOnSignUp: true,
    autoSignInAfterVerification: true,
    sendVerificationEmail: async ({ user, token }) => {
      const verificationUrl = `${process.env.BETTER_AUTH_URL}/auth/auth/verify-email?token=${token}&callbackUrl=${process.env.EMAIL_VERIFICATION_CALLBACK_URL}`;
      await sendEmail({
        to: user.email,
        subject: "Verify your email",
        text: `Click here to verify your email: ${verificationUrl}`,
      });
    },
  },
} satisfies BetterAuthOptions);

export type Session = typeof auth.$Infer.Session;
