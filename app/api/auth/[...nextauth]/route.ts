import NextAuth, { NextAuthOptions } from "next-auth";
import NextAuthGoogleProvider from "next-auth/providers/google";

export const authOptions: NextAuthOptions = {
  providers: [
    NextAuthGoogleProvider({
      //Google Cloud Platformより作成（Firebaseの場合は作成済）
      clientId: process.env.GOOGLE_ID!,
      clientSecret: process.env.GOOGLE_SECRET_ID!,
    }),
  ],
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
