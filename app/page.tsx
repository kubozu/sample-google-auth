"use client";

import { signOut, useSession } from "next-auth/react";
import Image from "next/image";

export default function Home() {
  const { data: session } = useSession();
  console.log(session);
  //session
  //  expires: "2023-06-27T06:41:17.733Z"
  //  user:
  //    email
  //    image
  //    name
  return (
    <div>
      <p>ログイン後画面</p>
      {session && (
        <div>
          <p>ログインセッションあり</p>
          <Image
            src={session.user?.image!}
            alt={session.user?.name!}
            width={30}
            height={30}
          />
          <p>{session.user?.email}</p>
          <p>{session.user?.name}</p>
          <p>{session.expires}</p>
          <button onClick={() => signOut()}>ログアウト</button>
        </div>
      )}
    </div>
  );
}
