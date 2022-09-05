import * as ROUTES from "./constants/routes";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Home, Browse, Signin, Signup} from "./pages";
import { IsUserRedirect } from './helpers/routes';
import { useAuthListener } from "./hooks";

function App() {
  const {user} = useAuthListener();
  console.log(user)
  return (
    <BrowserRouter>
      <Routes>
        <Route 
          path={ROUTES.SIGNIN} 
          element={!user ? <Signin/> : <Browse/>} 
        />
        <Route 
          path={ROUTES.SIGNUP} 
          element={!user ? <Signup/> : <Browse/>} 
        />
        <Route 
          path={ROUTES.HOME} 
          element={!user ? <Home/> : <Browse/>} 
        />
        <Route 
          path={ROUTES.BROWSE} 
          element={!user ? <Signup/> : <Browse/>} 
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
