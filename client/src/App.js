import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';

// Routers
import { BrowserRouter } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom';

// ContextAPIs
import ArticlesState from './Context/Articles/ArticlesState'
import AuthState from './Context/Auth/AuthState';

//Pages
import NavBar from './Components/layouts/Navbar'
// import Alert from './Components/layouts/Alert'
import Home from './Components/Pages/Home';
import About from './Components/Pages/About';
import Login from './Components/Pages/Login';
import User from './Components/Pages/User';
import Register from './Components/Pages/Register';
import Footer from './Components/layouts/Footer'
import setAuthToken from './setAuthToken'
import CreateArticle from './Components/Pages/CreateArticle'
import Tag from './Components/Pages/Tag'

//  Protective Routes
import ProtectiveRoute from './Components/ProtectiveRoute'

if(localStorage.token){
  setAuthToken(localStorage.token);
}

function App() {
  return (
    <AuthState>
      <ArticlesState>
        <BrowserRouter>
          <NavBar />
          <div className='Maincontainer'>
            {/* <Alert/> */}
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/about' component={About} />
              <Route exact path='/login' component={Login} />
              <ProtectiveRoute exact path='/user/:username' component={User} />
              <Route exact path='/tag/:tagname' component={Tag} />
              <Route exact path='/register' component={Register} />
              <ProtectiveRoute exact path='/publish' component={CreateArticle} />
            </Switch>
          </div>
          <Footer />
        </BrowserRouter>
      </ArticlesState>
    </AuthState>
  );
}

export default App;
