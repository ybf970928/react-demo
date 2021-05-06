import React, {lazy, Suspense } from 'react';
import {
  BrowserRouter as Router,
  Switch, Route
} from "react-router-dom";
import './App.css';
// import { Header } from './components/Header/index'
// import { Content } from './components/Content/index'
// import { Footer } from './components/Footer/index'
// import { Travel } from './pages/Travel/index'
// Promise<{ default: ComponentType<any>

const Header = lazy(() => import('./components/Header/index'))
const Content = lazy(() => import('./components/Content/index'))
const Footer = lazy(() => import('./components/Footer/index'))
const Travel = lazy(() => import('./pages/Travel/index'))
const App: React.FC = () => {
  const Home = () => {
    return (
      <div className="app">
        <Header />
        <Content />
        <Footer />
    </div>
    )
  }
      return (
        <Router>
              <Suspense fallback= {<div>loading...</div>}>
                <Switch>
                  <Route exact path="/" component={Home}/>
                  <Route path="/Travel/:randomId" component={Travel}/>
                  <Route path="/login" render={() => <h1>这是登陆页面</h1>}/>
                  <Route path="" render={() => <h1>404</h1>}/>
                </Switch>
              </Suspense>
            </Router>
      )
}

export default App;

