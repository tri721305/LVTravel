import logo from './logo.svg';
import './App.css';
import Home from './pages/index'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import SigninPage from './pages/signin'
import SlidebackgroundTest from './components/slideanimation/slide'
import HomeSlideTri from './pages/homeslide'
import Form from './components/task/taskForm'
import Login from './components/Login/Login'
function App() {
  return (
    <Router>
      <Switch>
        <Route path='/destination' component={Home} exact />
        {/* <Route path='/destina' component={SlidebackgroundTest} exact /> */}
        <Route path='/' component={HomeSlideTri} exact/>
        {/* <Route path='/plan' component={Form} exact />
        <Route path='/login' component={Login} exact /> */}
        <Route path='/signin' component={SigninPage} exact/>
      </Switch>
    </Router>
  );
}

export default App;
