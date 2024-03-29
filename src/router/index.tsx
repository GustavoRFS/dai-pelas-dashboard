import { BrowserRouter, Route } from "react-router-dom";

import { Login } from "../views/Login/index";
import { Home } from "../views/Home/index";
import { LoginUnauthorized } from "../views/LoginUnauthorized";
import { LoginRedirect } from "../views/LoginRedirect/index";
import { Mamacos } from "../views/Mamacos";

import { UserContextProvider } from "../contexts/UserContext";

export function Router() {
  return (
    <BrowserRouter>
      <UserContextProvider>
        <Route path="/" exact component={Home} />
        <Route path="/mamacos" component={Mamacos} />
        <Route path="/plays" component={Home} />
        <Route path="/frases" component={Home} />
        <Route path="/shitposts" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/login-unauthorized" component={LoginUnauthorized} />
      </UserContextProvider>
      <Route path="/redirect" component={LoginRedirect} />
    </BrowserRouter>
  );
}
