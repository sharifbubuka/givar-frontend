import  react, { useState, useMemo } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import HomePage from './pages/public/HomePage/HomePage'
import DashboardPage from './pages/protected/DashboardPage/DashboardPage'
import LoginPage from './pages/public/LoginPage/LoginPage'
import ResetPasswordPage from './pages/protected/ResetPasswordPage/ResetPasswordPage'
import NotFound from './pages/public/NotFound'
import ScrollToTop from './components/ScrollToTop'
import Authenticate from './pages/protected/Authenticate'
import RegisterPage from './pages/public/RegisterPage/RegisterPage'
import ProjectPage from './pages/public/ProjectPage/ProjectPage'
import DonatePage from './pages/public/DonatePage/DonatePage'
import ConceptPage from './pages/public/ConceptPage/ConceptPage'
import CreateFundraiserPage from './pages/protected/CreateProjectPage/CreateProjectPage'
import ProjectsPage from './pages/public/ProjectsPage/ProjectsPage'
import { Provider } from 'react-redux'
import store from './redux/store'

function App() {
  const [ user, setUser ] = useState('hello')
  const userProviderValue = useMemo(() => ({ user, setUser }), [user, setUser])

  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path='/' component={HomePage} />

          <Route exact path='/register' component={RegisterPage} />

          <Route exact path='/fundraisers' component={ProjectsPage} />

          <Route exact path='/fundraiser/:id' component={ProjectPage} />

          <Route exact path='/fundraiser/donate/:id' component={DonatePage} />

          <Route exact path='/concept-paper' component={ConceptPage} />

          <Route exact path='/reset-password' component={ResetPasswordPage} />

          <Route exact path='/login' component={LoginPage} />
            
          <Authenticate exact path='/create' component={CreateFundraiserPage} />

          <Authenticate exact path='/dashboard' component={DashboardPage} />

          <Route>
            <NotFound />
          </Route>
        </Switch>
        <ScrollToTop />
      </Router>
    </Provider>
  );
}

export default App;
