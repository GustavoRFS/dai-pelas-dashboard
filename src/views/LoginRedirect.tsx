import { useEffect } from "react";
import cookie from "react-cookies";

export function LoginRedirect() {
  useEffect(() => {
    console.log(window.opener);
    window.opener!.postMessage("done", "http://localhost:3000/login");

    const fragment = new URLSearchParams(window.location.hash.slice(1));
    const [accessToken, tokenType, expiresIn] = [
      fragment.get("access_token"),
      fragment.get("token_type"),
      fragment.get("expires_in"),
    ];

    cookie.save("token_type", `${tokenType}`, {
      path: "/",
      maxAge: Number(expiresIn),
    });

    cookie.save("token", `${accessToken}`, {
      path: "/",
      maxAge: Number(expiresIn),
    });

    window.close();
  });
  return <div>Redirecionando kkkj</div>;
}
