
import './App.css'
import OrderPizza from './pages/OrderPizza';
import Home from './pages/Home'; 
import Success from './pages/Success'; 
import { Redirect, Route, Switch } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';

function App() {
  const [orderData, setOrderData] = useState(null)

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
       <OrderPizza setOrderData={setOrderData}/>
      </Route>
      <Route path='/success'>
       <Success orderData={orderData}/>
      </Route>
    </Switch>
 
    </>
  )
}

export default App
