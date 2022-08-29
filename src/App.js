import * as ROUTES from "./constants/routes";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Home, Browse, Signin, Signup} from "./pages";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTES.HOME} element={<Home/>} />
        <Route path={ROUTES.BROWSE} element={<Browse/>} />
        <Route path={ROUTES.SIGNIN} element={<Signin/>} />
        <Route path={ROUTES.SIGNUP} element={<Signup/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
