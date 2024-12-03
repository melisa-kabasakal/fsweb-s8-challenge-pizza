
import './App.css'
import OrderPizza from './pages/OrderPizza';
import Home from './pages/Home'; 
import Success from './pages/Success'; 
import { Redirect, Route, Switch } from 'react-router-dom'

function App() {

  return (
    <>
    <Switch>
      <Route exact path='/'>
        <Redirect to="/home"/> 
      </Route>
      <Route path='/home'>
       <Home />
      </Route>
       <Route path='/orderpizza'>
       <OrderPizza />
      </Route>
      <Route path='/success'>
       <Success />
      </Route>
    </Switch>
 
    </>
  )
}

export default App
