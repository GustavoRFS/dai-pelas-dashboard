import { useEffect } from "react";
import cookie from "react-cookies";
import Logo from "../../assets/logo.png";
import "./loginRedirect.scss";

export function LoginRedirect() {
  useEffect(() => {
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

    window.opener!.postMessage("done", `${window.location.origin}/login`);
    window.close();
  });
  return (
    <div className="redirect">
      <img src={Logo} alt="Logo do dai pelas" />
    </div>
  );
}
