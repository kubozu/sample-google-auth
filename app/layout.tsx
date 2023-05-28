import "./globals.css";
import { Noto_Sans_JP } from "next/font/google";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";
import { SessionProvider } from "@/components/SessionProvider";
import Login from "@/components/Login";

const inter = Noto_Sans_JP({ subsets: ["latin"] });

export const metadata = {
  title: "Google Authのサンプルプロジェクト",
  description: "Google Auth/Next.js 13/Tailwind CSS",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);

  //domain制限？
  const matchDomain = session?.user?.email!.match(/@(.*)$/);
  if (process.env.LOGIN_USER_DOMAIN_PERMISSION !== matchDomain?.[1]) {
  }

  return (
    <html lang="ja">
      <body className={inter.className}>
        <SessionProvider session={session}>
          {!session ? <Login /> : <div>{children}</div>}
        </SessionProvider>
      </body>
    </html>
  );
}
