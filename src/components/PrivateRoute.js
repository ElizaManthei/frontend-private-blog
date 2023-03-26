import {Navigate} from "react-router-dom";

export default function PrivateRoute({isAuthenticatedUsr, redirectPath, children}) {

    if(!{isAuthenticatedUsr}) {
        return(
      <Navigate to={redirectPath} replace/>
    )}
    return (children)
}
