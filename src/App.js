import {Routes, Route} from "react-router-dom";
import './App.css';
import Home from "./pages/Home";
import Navigation from "./components/Navigation";
import Overview from "./pages/Overview"
import Login from "./pages/Login"
import BlogPost from "./pages/BlogPost";
import {useState} from "react";
import PrivateRoute from "./components/PrivateRoute";

function App() {

  const [isAuthenticated, toggleIsAuthenticated] = useState(false);

  return (
    <div>
        <Navigation
            isAuthenticatedAtr = {isAuthenticated}
            toggleIsAuthenticatedAtr = {toggleIsAuthenticated}>
        </Navigation>
        <Routes>
            <Route path = "/" element = {<Home/>}/>
            <Route path = "/Login" element = {<Login
                isAut = {isAuthenticated}
                toggleIsAuthenticatedAtr = {toggleIsAuthenticated}
                />}
            />
            {/*//from https://www.robinwieruch.de/react-router-private-routes/*/}
            <Route
                path = "/Overzicht"
                element = {
                    <PrivateRoute
                        redirectPath = "/"
                        isAuthenticatedUsr = {isAuthenticated}
                        ><Overview isAuthenticatedAtr = {isAuthenticated}/>
                    </PrivateRoute>}
                />
        {/*    <Route*/}
        {/*        path= "/BlogPost/:id"*/}
        {/*        element={isAuthenticated === true ? <BlogPost/> : <Navigate to="/"/>}/>*/}
            <Route
                path = "/BlogPost/:id"
                element = {<PrivateRoute
                    redirectPath = "/"
                    isAuthenticatedUsr = {isAuthenticated}
                    ><BlogPost isAuthenticatedAtr = {isAuthenticated}/>
                </PrivateRoute>}
            />
        </Routes>
    </div>
  )
}

export default App;