"use client";
import { signIn } from "next-auth/react";

function Login() {
  return (
    <div>
      <button onClick={() => signIn("google")}>
        サインインテスト（Google)
      </button>
    </div>
  );
}

export default Login;
