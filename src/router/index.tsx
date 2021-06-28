import { BrowserRouter, Route } from "react-router-dom";
import { Login } from "../views/Login/index";
import { Home } from "../views/Home/index";

export function Router() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Home} />
      <Route path="/login" component={Login} />
    </BrowserRouter>
  );
}
