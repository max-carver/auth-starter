import NextAuth from "next-auth";
import Google from "next-auth/providers/google";

const googleId = String(process.env.AUTH_GOOGLE_ID).trim();
const googleSecret = String(process.env.AUTH_GOOGLE_SECRET).trim();

export const { handlers, auth, signIn, signOut } = NextAuth({
  pages: {
    signIn: "/sign-in",
  },
  providers: [
    Google({
      clientId: googleId,
      clientSecret: googleSecret,
    }),
  ],

  callbacks: {},
});
