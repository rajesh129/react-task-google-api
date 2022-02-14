import {useSelector} from 'react-redux';
import {Switch, Route} from 'react-router';
import { ConnectedRouter } from 'connected-react-router';
import { history } from './stores';
import Login from './components/Login/Login';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import Academics from './components/Academics/Academics';
import UserData from './components/UserData/UserData';
import withRedirect from './withRedirect';
import Forbidden from './components/Forbidden/Forbidden';

import './App.css';

function App() {
  const {isLoginSuccess} = useSelector(state => state.login);
  const {isLogoutSuccess} = useSelector(state => state.logout);

  return (
    <>
      <ConnectedRouter history={history}>
        {(isLoginSuccess && !isLogoutSuccess) && <Header />}
        <Switch>
          <Route exact path="/" component={Login} />
          {withRedirect(Home,isLoginSuccess,'home')()}
          {withRedirect(Academics,isLoginSuccess,'academics')()}
          {withRedirect(UserData,isLoginSuccess,'userdata')()}
          <Route path="/forbidden" component={Forbidden} />
        </Switch>
      </ConnectedRouter>
    </>
  );
}

export default App;
