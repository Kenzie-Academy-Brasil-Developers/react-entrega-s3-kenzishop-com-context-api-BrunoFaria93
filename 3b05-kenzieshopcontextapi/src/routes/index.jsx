import { Switch } from 'react-router-dom'
import Home from '../pages/Home'
import Cart from '../pages/Cart'
import Login from '../pages/Login'
import Route from './route'
import Signup from '../pages/Signup'
import { AnimatePresence } from 'framer-motion'

const Routes = () => {
  return (
    <AnimatePresence>
        <Switch>
            <Route isPrivate path='/' exact component={Home}/>
            <Route path='/login' exact component={Login}/>
            <Route isPrivate path='/cart' exact component={Cart}/>
            <Route path='/signup' exact component={Signup}/> 
        </Switch>
    </AnimatePresence>
  );
};

export default Routes;