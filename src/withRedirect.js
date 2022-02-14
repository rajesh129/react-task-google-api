import { Redirect, Route } from "react-router";

const withRedirect = (WrapperCompent, isLoggedIn, routePath) => {
    return () => {
        console.log(isLoggedIn, routePath);
        return (<Route path={`/${routePath}`}>
            {isLoggedIn ? <WrapperCompent /> : <Redirect to="/forbidden" />}
        </Route>)
    }
}

export default withRedirect;